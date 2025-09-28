'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import toast from "react-hot-toast";
import axios from "axios";

const MyOrders = () => {

    const { currency, getToken, user } = useAppContext();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

   const fetchOrders = async () => {
  try {
    const token = await getToken();
    const { data } = await axios.get('/api/order/list', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (data.success) {
      setOrders(data.orders.reverse()); // newest first
      setLoading(false);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

useEffect(() => {
  if (user) {
    fetchOrders();
  }
}, [user]);


    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-6 min-h-screen">
                <div className="space-y-5">
                    <h2 className="text-lg font-medium mt-6">My Orders</h2>
                    {loading ? <Loading /> : (<div className="max-w-6xl border-t border-gray-300 text-sm">
                        {orders.map((order, index) => (
                            <div key={index} className="flex flex-col gap-5 p-5 border-b border-gray-300 bg-white rounded-lg mb-4">
                                {/* Order Header */}
                                <div className="flex justify-between items-center border-b pb-3">
                                    <h3 className="text-lg font-medium">Order #{order._id.slice(-6)}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                            order.status === 'accepted' ? 'bg-blue-100 text-blue-700' :
                                            order.status === 'out-for-delivery' ? 'bg-orange-100 text-orange-700' :
                                            order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                                            'bg-gray-100 text-gray-700'
                                        }`}>
                                            {order.status === 'out-for-delivery' ? 'Out for Delivery' : 
                                             order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </span>
                                        <span className="font-medium text-lg">{currency}{order.amount}</span>
                                    </div>
                                </div>
                                
                                {/* Order Items */}
                                <div className="space-y-3">
                                    <h4 className="font-medium text-gray-800">Items Ordered:</h4>
                                    {order.items.map((item, itemIndex) => {
                                        // Check if product exists
                                        if (!item.product) {
                                            return (
                                                <div key={itemIndex} className="flex items-center gap-4 p-3 bg-red-50 rounded border border-red-200">
                                                    <div className="w-16 h-16 bg-gray-200 rounded border flex items-center justify-center">
                                                        <span className="text-gray-500 text-xs">N/A</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-medium text-red-600">Product no longer available</p>
                                                        <p className="text-sm text-gray-600">This product may have been removed</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-medium">Qty: {item.quantity}</p>
                                                        <p className="text-sm text-gray-600">Price: N/A</p>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        
                                        return (
                                            <div key={itemIndex} className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                                                <Image
                                                    className="w-16 h-16 object-cover rounded border"
                                                    src={item.product.image?.[0] || assets.box_icon}
                                                    alt={item.product.name || 'Product'}
                                                    width={64}
                                                    height={64}
                                                />
                                                <div className="flex-1">
                                                    <p className="font-medium">{item.product.name}</p>
                                                    <p className="text-sm text-gray-600">Category: {item.product.category}</p>
                                                    <p className="text-sm text-gray-600">Price: {currency}{item.product.offerPrice}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium">Qty: {item.quantity}</p>
                                                    <p className="text-sm text-gray-600">
                                                        Subtotal: {currency}{item.product.offerPrice * item.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                
                                {/* Order Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* Delivery Address */}
                                    <div className="bg-gray-50 p-4 rounded">
                                        <h4 className="font-medium text-gray-800 mb-2">Delivery Address:</h4>
                                        <p>
                                            <span className="font-medium">{order.address.fullName}</span>
                                            <br />
                                            <span>{order.address.area}</span>
                                            <br />
                                            <span>{`${order.address.city}, ${order.address.state}`}</span>
                                            <br />
                                            <span className="text-sm text-gray-600">Phone: {order.address.phoneNumber}</span>
                                        </p>
                                    </div>
                                    
                                    {/* Order Summary */}
                                    <div className="bg-gray-50 p-4 rounded">
                                        <h4 className="font-medium text-gray-800 mb-2">Order Summary:</h4>
                                        <div className="space-y-1">
                                            <div className="flex justify-between">
                                                <span>Items:</span>
                                                <span>{order.items.length}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Payment Method:</span>
                                                <span>COD</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Order Date:</span>
                                                <span>{new Date(order.date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Payment Status:</span>
                                                <span>{order.status === 'delivered' ? 'Completed' : 'Pending'}</span>
                                            </div>
                                            <div className="flex justify-between font-medium border-t pt-2 mt-2">
                                                <span>Total Amount:</span>
                                                <span>{currency}{order.amount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>)}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyOrders;