"use client"
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user, getCartCount, getWishlistCount } = useAppContext();

  const { openSignIn } = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1758994664/Asset_1_seeizr.png"
        width={120}
        height={40}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        {/* Wishlist Icon with Badge */}
        <div className="relative cursor-pointer p-1" onClick={() => router.push('/wishlist')}>
          <Image className="w-4 h-4 hover:opacity-70 transition" src={assets.heart_icon} alt="wishlist icon" />
          {getWishlistCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg border border-red-300/30 min-w-[16px]">
              {getWishlistCount() > 9 ? '9+' : getWishlistCount()}
            </span>
          )}
        </div>
        
        {/* Cart Icon with Badge */}
        <div className="relative cursor-pointer p-1" onClick={() => router.push('/cart')}>
          <Image className="w-4 h-4 hover:opacity-70 transition" src={assets.cart_icon} alt="cart icon" />
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg border border-yellow-300/30 min-w-[16px]">
              {getCartCount() > 9 ? '9+' : getCartCount()}
            </span>
          )}
        </div>

        {
          user
            ? <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="cart" labelIcon={<CartIcon />} onClick={() => router.push('/cart')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')} />
              </UserButton.MenuItems>

            </UserButton>
            : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </button>
        }
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {/* Mobile Wishlist Icon */}
        <div className="relative cursor-pointer p-1" onClick={() => router.push('/wishlist')}>
          <Image className="w-4 h-4 hover:opacity-70 transition" src={assets.heart_icon} alt="wishlist icon" />
          {getWishlistCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg border border-red-300/30 min-w-[16px]">
              {getWishlistCount() > 9 ? '9+' : getWishlistCount()}
            </span>
          )}
        </div>
        
        {/* Mobile Cart Icon */}
        <div className="relative cursor-pointer p-1" onClick={() => router.push('/cart')}>
          <Image className="w-4 h-4 hover:opacity-70 transition" src={assets.cart_icon} alt="cart icon" />
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg border border-yellow-300/30 min-w-[16px]">
              {getCartCount() > 9 ? '9+' : getCartCount()}
            </span>
          )}
        </div>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {
          user
            ? <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push('/')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={() => router.push('/all-products')} />
              </UserButton.MenuItems>

              <UserButton.MenuItems>
                <UserButton.Action label="cart" labelIcon={<CartIcon />} onClick={() => router.push('/cart')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')} />
              </UserButton.MenuItems>

            </UserButton>
            : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;