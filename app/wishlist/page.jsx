'use client'
import React from 'react'
import { useAppContext } from '@/context/AppContext'
import ProductCard from '@/components/ProductCard'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const WishlistPage = () => {
    const { wishlistItems, products } = useAppContext()

    // Get full product details for wishlist items
    const wishlistProducts = wishlistItems.map(wishlistItem => 
        products.find(product => product._id === wishlistItem.id)
    ).filter(Boolean) // Remove any undefined items

    return (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 py-8 min-h-screen bg-white">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6">
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-regular text-gray-900 tracking-tight">
                            My <span className="text-amber-600 font-regular">Wishlist</span>
                        </h1>
                        <div className="mt-2 flex justify-center md:justify-start">
                            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                        </div>
                        <p className="text-gray-600 text-lg mt-3">
                            Your favorite fragrances collection
                        </p>
                    </div>
                    {wishlistProducts.length > 0 && (
                      <div className="flex items-center gap-3">
  <div className="p-2.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
    <Image
      src={assets.heart_icon}
      alt="Heart"
      className="w-4 h-4 brightness-0 invert"
    />
  </div>
  <span className="text-base md:text-lg text-gray-700 font-regular">
    {wishlistProducts.length}{" "}
    {wishlistProducts.length === 1
      ? "Item in your Wishlist"
      : "Items in your Wishlist"}
  </span>
</div>

                    )}
                </div>

                {/* Wishlist Content */}
                {wishlistProducts.length > 0 ? (
                    <>
                        {/* Products Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                            {wishlistProducts.map((product) => (
                                <div key={product._id} className="transform hover:scale-105 transition-transform duration-200">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Empty State */
                    <div className="text-center py-2">
                        <div className="bg-gray-50 rounded-3xl p-12 max-w-md mx-auto border border-gray-200">
                            <div className="mb-6">
                                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <Image
                                        src={assets.heart_icon}
                                        alt="Empty Heart"
                                        className="w-10 h-10 opacity-40"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    Your wishlist is empty
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Start exploring our exquisite perfume collection and add your favorites here
                                </p>
                                <button
                                    onClick={() => window.location.href = '/all-products'}
                                    className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Explore Products
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Continue Shopping Button */}
                {wishlistProducts.length > 0 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => window.location.href = '/all-products'}
                            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default WishlistPage