import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency, router, toggleWishlist, isInWishlist } = useAppContext()

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
        >
            <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                    }}
                    className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-all duration-200 ${
                        isInWishlist(product._id) 
                            ? 'bg-red-50 hover:bg-red-100' 
                            : 'bg-white hover:bg-gray-50'
                    }`}
                >
                    {isInWishlist(product._id) ? (
                        <svg 
                            className="h-4 w-4 text-red-500" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    ) : (
                        <svg 
                            className="h-4 w-4 text-gray-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                            />
                        </svg>
                    )}
                </button>
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>
            <div className="flex items-center gap-2">
                <p className="text-xs">{4.9}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            className="h-3 w-3"
                            src={
                                index < Math.floor(5)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <div className="flex flex-col gap-1">
                    <p className="text-base font-medium">{currency}{product.offerPrice}</p>
                    {product.stock !== undefined && (
                        <p className={`text-xs font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </p>
                    )}
                </div>
                <button 
                    disabled={product.stock === 0}
                    className={`max-sm:hidden px-4 py-1.5 border rounded-full text-xs transition ${
                        product.stock > 0 
                            ? 'text-gray-500 border-gray-500/20 hover:bg-slate-50 cursor-pointer' 
                            : 'text-gray-400 border-gray-300 cursor-not-allowed bg-gray-100'
                    }`}
                >
                    {product.stock > 0 ? 'Buy now' : 'Out of stock'}
                </button>
            </div>
        </div>
    )
}

export default ProductCard