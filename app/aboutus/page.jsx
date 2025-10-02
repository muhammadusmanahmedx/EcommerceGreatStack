'use client';
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assets } from "@/assets/assets";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 py-16 sm:py-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="flex flex-col items-center mb-6">
                                <h1 className="text-4xl md:text-6xl font-regular text-gray-900 tracking-tight mb-4">
                                    About <span className="text-amber-600 font-regular">Salsabeel Scents</span>
                                </h1>
                                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                            </div>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                                Crafting exceptional fragrances that tell your unique story, one scent at a time
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Our Story Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="order-2 lg:order-1">
                            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759317175/27825401580_1_kn2mhu.png"
                                    alt="Salsabeel Scents Story"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                            </div>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p className="text-lg">
                                    Born from a passion for exquisite fragrances, Salsabeel Scents began as a dream to create 
                                    perfumes that capture the essence of elegance and sophistication. Our name, inspired by the 
                                    legendary fountain of paradise, reflects our commitment to pure, divine fragrances.
                                </p>
                                <p>
                                    Founded with the belief that every individual deserves a signature scent that reflects their 
                                    personality, we have dedicated ourselves to sourcing the finest ingredients from around the world. 
                                    From the lavender fields of Provence to the sandalwood forests of India, each fragrance tells a story.
                                </p>
                                <p>
                                    Today, Salsabeel Scents stands as a testament to quality, luxury, and the art of perfumery, 
                                    bringing you closer to the scent of your dreams.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our <span className="text-amber-600">Values</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mb-6"></div>
                            <p className="max-w-2xl mx-auto text-lg text-gray-600">
                                The principles that guide everything we do
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Quality */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We source only the finest ingredients and employ traditional craftsmanship to ensure 
                                    every fragrance meets our exceptional standards.
                                </p>
                            </div>

                            {/* Innovation */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Blending traditional perfumery with modern techniques, we create unique scents that 
                                    capture contemporary elegance while honoring timeless traditions.
                                </p>
                            </div>

                            {/* Sustainability */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Committed to ethical sourcing and sustainable practices, we ensure our fragrances 
                                    are as kind to the planet as they are luxurious to wear.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12 mb-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our <span className="text-amber-600">Mission</span>
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                "To create extraordinary fragrances that inspire confidence, evoke emotions, and become 
                                an integral part of your personal story. We believe that the right scent has the power 
                                to transform moments into memories."
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    Premium Ingredients
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    Artisan Craftsmanship
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    Customer Satisfaction
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    {/* <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Meet Our <span className="text-amber-600">Team</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mb-6"></div>
                            <p className="max-w-2xl mx-auto text-lg text-gray-600">
                                The passionate individuals behind every exquisite fragrance
                            </p>
                        </div> */}

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
                            {/* Team Member 1 */}
                            {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <Image
                                        src={assets.girl_with_earphone_image}
                                        alt="Master Perfumer"
                                        fill
                                        className="object-cover rounded-full border-4 border-amber-100"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                                <p className="text-amber-600 font-semibold mb-3">Master Perfumer</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    With over 15 years of experience in luxury perfumery, Sarah crafts our signature scents 
                                    with unmatched expertise and passion.
                                </p>
                            </div> */}

                            {/* Team Member 2 */}
                            {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <Image
                                        src={assets.boy_with_laptop_image}
                                        alt="Creative Director"
                                        fill
                                        className="object-cover rounded-full border-4 border-amber-100"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                                <p className="text-amber-600 font-semibold mb-3">Creative Director</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Michael leads our creative vision, ensuring every fragrance embodies the perfect balance 
                                    of innovation and timeless elegance.
                                </p>
                            </div> */}

                            {/* Team Member 3 */}
                            {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <Image
                                        src={assets.girl_with_headphone_image}
                                        alt="Quality Specialist"
                                        fill
                                        className="object-cover rounded-full border-4 border-amber-100"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Emily Rodriguez</h3>
                                <p className="text-amber-600 font-semibold mb-3">Quality Specialist</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Emily ensures every bottle meets our exceptional standards, from ingredient sourcing 
                                    to final quality control.
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Contact CTA Section */}
                    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 text-center text-white">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Find Your <span className="text-amber-400">Signature Scent?</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Discover our exquisite collection and let us help you find the perfect fragrance 
                                that tells your unique story.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => window.location.href = '/all-products'}
                                    className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    Shop Our Collection
                                </button>
                                <button 
                                    onClick={() => window.location.href = '/'}
                                    className="border-2 border-amber-400 text-amber-400 font-semibold px-8 py-4 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
