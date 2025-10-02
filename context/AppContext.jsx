'use client'
import { productsDummyData, userDummyData } from "@/assets/assets";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY
    const router = useRouter()

    const { user } = useUser()
    const { getToken } = useAuth()

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [userData, setUserData] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const [wishlistItems, setWishlistItems] = useState([])


    const fetchProductData = async () => {

        try {
            const { data } = await axios.get('/api/product/list')
            if (data.success) {
                setProducts(data.products)
            } else {
                console.log('API failed, using dummy data:', data.message)
                setProducts(productsDummyData)
            }

        } catch (error) {
            console.log('API error, using dummy data:', error.message)
            setProducts(productsDummyData)
        }

    }


    // Fetch categories data
    const fetchCategoriesData = async () => {
        try {
            const { data } = await axios.get('/api/categories');
            if (data.success) {
                setCategories(data.categories);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };


    //user data fetch
    const fetchUserData = async () => {
        try {
            if (user?.publicMetadata?.role === "seller") {
                setIsSeller(true);
            }

            const token = await getToken();

            const { data } = await axios.get("/api/user/data", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (data.success) {
                setUserData(data.user);
                setCartItems(data.user.cartItems || {});
            } else {
                console.log('User data fetch failed:', data.message);
                setCartItems({});
            }
        } catch (error) {
            console.log('User data fetch error:', error.message);
            setCartItems({});
        }
    };



    const addToCart = async (itemId) => {

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);

        if (user) {
            try {
                const token = await getToken();

                await axios.post("/api/cart/update", { cartData }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                }

                );
                toast.success("Item added to cart")



            } catch (error) {
                toast.error(error.message)
            }

        }

    }



    const updateCartQuantity = async (itemId, quantity) => {

        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData)

        if (user) {
            try {
                const token = await getToken();

                await axios.post("/api/cart/update", { cartData }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                }

                );
                toast.success("Cart Updated")



            } catch (error) {
                toast.error(error.message)
            }

        }

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    // Wishlist Functions
    const addToWishlist = (product) => {
        const newWishlistItems = [...wishlistItems, { id: product._id, product }];
        setWishlistItems(newWishlistItems);
        localStorage.setItem('wishlistItems', JSON.stringify(newWishlistItems));
        toast.success(`${product.name} added to wishlist!`);
    };

    const removeFromWishlist = (productId) => {
        const newWishlistItems = wishlistItems.filter(item => item.id !== productId);
        setWishlistItems(newWishlistItems);
        localStorage.setItem('wishlistItems', JSON.stringify(newWishlistItems));
        const product = products.find(p => p._id === productId);
        toast.success(`${product?.name || 'Item'} removed from wishlist!`);
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some(item => item.id === productId);
    };

    const getWishlistCount = () => {
        return wishlistItems.length;
    };

    const toggleWishlist = (product) => {
        if (isInWishlist(product._id)) {
            removeFromWishlist(product._id);
        } else {
            addToWishlist(product);
        }
    };

    useEffect(() => {
        fetchProductData();
        fetchCategoriesData();
        
        // Load wishlist from localStorage
        const savedWishlist = localStorage.getItem('wishlistItems');
        if (savedWishlist) {
            try {
                setWishlistItems(JSON.parse(savedWishlist));
            } catch (error) {
                console.error('Error parsing wishlist from localStorage:', error);
                setWishlistItems([]);
            }
        }
    }, [])

    useEffect(() => {
        if (user) {
            fetchUserData()
        }
    }, [user])

    const value = {
        user, getToken,
        currency, router,
        isSeller, setIsSeller,
        userData, fetchUserData,
        products, fetchProductData,
        categories, fetchCategoriesData,
        cartItems, setCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount,
        wishlistItems, setWishlistItems,
        addToWishlist, removeFromWishlist,
        isInWishlist, getWishlistCount, toggleWishlist
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}