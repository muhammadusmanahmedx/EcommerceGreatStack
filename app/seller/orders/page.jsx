'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const Orders = () => {

    const { currency, getToken, user } = useAppContext();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingStatus, setUpdatingStatus] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');

    const statusFilters = [
        { key: 'all', label: 'All Orders', color: 'text-gray-600' },
        { key: 'pending', label: 'Pending', color: 'text-yellow-600' },
        { key: 'accepted', label: 'Accepted', color: 'text-blue-600' },
        { key: 'out-for-delivery', label: 'Out for Delivery', color: 'text-orange-600' },
        { key: 'delivered', label: 'Delivered', color: 'text-green-600' }
    ];

    const filteredOrders = activeFilter === 'all' 
        ? orders 
        : orders.filter(order => order.status === activeFilter);

    const getOrderCount = (status) => {
        if (status === 'all') return orders.length;
        return orders.filter(order => order.status === status).length;
    };

    const fetchSellerOrders = async () => {
        const token = await getToken();
        try {
            const { data } = await axios.get('/api/order/seller-order', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (data.success) {
                setOrders(data.orders.reverse());
                setLoading(false);
            } else {
                toast.error(data.message);
            }
        }
        catch (error) {
          toast.error(error.message);
        }
    }

    const updateOrderStatus = async (orderId, newStatus) => {
        setUpdatingStatus(prev => ({ ...prev, [orderId]: true }));
        const token = await getToken();
        try {
            const { data } = await axios.patch('/api/order/update-status', {
                orderId,
                status: newStatus
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            if (data.success) {
                // Update the order status in the local state
                setOrders(prevOrders => 
                    prevOrders.map(order => 
                        order._id === orderId ? { ...order, status: newStatus } : order
                    )
                );
                toast.success('Order status updated successfully');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to update status');
        } finally {
            setUpdatingStatus(prev => ({ ...prev, [orderId]: false }));
        }
    }

    useEffect(() => {
        if (user){
            fetchSellerOrders();
        }
    }, [user]);

    return (
        <div className="flex-1 h-screen overflow-scroll flex flex-col justify-between text-sm">
            {loading ? <Loading /> : <div className="md:p-10 p-4 space-y-5">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Orders Management</h2>
                    <div className="text-sm text-gray-500">
                        Total: {orders.length} orders
                    </div>
                </div>
                
                {/* Filter Tabs */}
                <div className="bg-white rounded-lg p-1 shadow-sm border">
                    <div className="flex flex-wrap gap-2">
                        {statusFilters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                                    activeFilter === filter.key
                                        ? 'bg-orange-100 text-orange-700 shadow-sm border border-orange-200'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                <span>{filter.label}</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                    activeFilter === filter.key
                                        ? 'bg-orange-200 text-orange-800'
                                        : 'bg-gray-200 text-gray-600'
                                }`}>
                                    {getOrderCount(filter.key)}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Orders Display */}
                <div className="max-w-6xl">
                    {filteredOrders.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg border">
                            <div className="text-gray-400 text-lg mb-2">📦</div>
                            <p className="text-gray-500 font-medium">
                                {activeFilter === 'all' ? 'No orders found' : `No ${activeFilter} orders`}
                            </p>
                        </div>
                    ) : (
                        filteredOrders.map((order, index) => (
                            <div key={index} className={`flex flex-col gap-5 p-6 mb-6 rounded-xl shadow-sm border-l-4 transition-all duration-200 hover:shadow-md ${
                                order.status === 'pending' ? 'bg-yellow-50 border-yellow-400' :
                                order.status === 'accepted' ? 'bg-blue-50 border-blue-400' :
                                order.status === 'out-for-delivery' ? 'bg-orange-50 border-orange-400' :
                                order.status === 'delivered' ? 'bg-green-50 border-green-400' :
                                'bg-white border-gray-300'
                            }`}>
                                {/* Order Header */}
                                <div className="flex justify-between items-center border-b pb-4">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-xl font-bold text-gray-800">Order #{order._id.slice(-6)}</h3>
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide ${
                                            order.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                                            order.status === 'accepted' ? 'bg-blue-200 text-blue-800' :
                                            order.status === 'out-for-delivery' ? 'bg-orange-200 text-orange-800' :
                                            order.status === 'delivered' ? 'bg-green-200 text-green-800' :
                                            'bg-gray-200 text-gray-800'
                                        }`}>
                                            {order.status === 'out-for-delivery' ? 'Out for Delivery' : order.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-right">
                                        <div>
                                            <p className="text-sm text-gray-500">Order Date</p>
                                            <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Total Amount</p>
                                            <p className="text-2xl font-bold text-gray-800">{currency}{order.amount}</p>
                                        </div>
                                    </div>
                                </div>                            {/* Order Items */}
                            <div className="space-y-3">
                                <h4 className="font-medium text-gray-800">Order Items:</h4>
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
                                                    Total: {currency}{item.product.offerPrice * item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            {/* Customer Details and Status */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {/* Customer Address */}
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
                                
                                {/* Order Info */}
                                <div className="bg-gray-50 p-4 rounded">
                                    <h4 className="font-medium text-gray-800 mb-2">Order Info:</h4>
                                    <p className="space-y-1">
                                        <span className="block">Items: {order.items.length}</span>
                                        <span className="block">Method: COD</span>
                                        <span className="block">Payment: {order.status === 'pending' ? 'Pending' : 'Confirmed'}</span>
                                    </p>
                                </div>
                                
                                {/* Status Management */}
                                <div className="bg-gray-50 p-4 rounded">
                                    <h4 className="font-medium text-gray-800 mb-2">Order Status:</h4>
                                    <select
                                        value={order.status}
                                        onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                        disabled={updatingStatus[order._id]}
                                        className={`w-full p-2 border rounded text-sm font-medium ${
                                            order.status === 'pending' ? 'text-yellow-600 bg-yellow-50 border-yellow-200' :
                                            order.status === 'accepted' ? 'text-blue-600 bg-blue-50 border-blue-200' :
                                            order.status === 'out-for-delivery' ? 'text-orange-600 bg-orange-50 border-orange-200' :
                                            'text-green-600 bg-green-50 border-green-200'
                                        } disabled:opacity-50`}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="accepted">Accepted</option>
                                        <option value="out-for-delivery">Out for Delivery</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                    {updatingStatus[order._id] && (
                                        <p className="text-xs text-gray-500 mt-1">Updating...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        ))
                    )}
                </div>
            </div>}
            {/* <Footer /> */}
        </div>
    );
};

export default Orders;