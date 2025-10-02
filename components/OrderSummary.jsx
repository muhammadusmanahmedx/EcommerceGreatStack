import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const OrderSummary = () => {
  const { currency, router, getCartCount, getCartAmount, getToken, user, cartItems, setCartItems } =
    useAppContext();

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [userAddresses, setUserAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [newAddress, setNewAddress] = useState({
    fullName: '',
    phoneNumber: '',
    pinCode: '',
    area: '',
    city: '',
    state: '',
  });

  const fetchUserAddresses = async () => {
    try {
      const token = await getToken();
      const res = await fetch("/api/user/get-address", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (data.success) {
        setUserAddresses(data.addresses);
        if (data.addresses.length > 0) {
          setSelectedAddress(data.addresses[0]);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleEditAddress = (address) => {
    setNewAddress({
      fullName: address.fullName,
      phoneNumber: address.phoneNumber,
      pinCode: address.pinCode,
      area: address.area,
      city: address.city,
      state: address.state,
    });
    setEditingAddressId(address._id);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDeleteAddress = async (addressId) => {
    if (!window.confirm('Are you sure you want to delete this address?')) {
      return;
    }

    try {
      const token = await getToken();
      const res = await fetch(`/api/user/delete-address/${addressId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        await fetchUserAddresses();
        if (selectedAddress && selectedAddress._id === addressId) {
          setSelectedAddress(null);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAddNewAddress = async (e) => {
    e.preventDefault();
    
    try {
      const token = await getToken();
      const url = isEditMode ? `/api/user/update-address/${editingAddressId}` : "/api/user/add-address";
      const method = isEditMode ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ address: newAddress }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        setIsModalOpen(false);
        setIsEditMode(false);
        setEditingAddressId(null);
        setNewAddress({
          fullName: '',
          phoneNumber: '',
          pinCode: '',
          area: '',
          city: '',
          state: '',
        });
        // Refresh addresses list
        await fetchUserAddresses();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const createOrder = async () => {
    try {
      if (!selectedAddress) {
        return toast.error("Please add your details before placing the order");
      }

      let cartItemsArray = Object.keys(cartItems).map((key) => ({
        product: key,
        quantity: cartItems[key],
      }));

      cartItemsArray = cartItemsArray.filter((item) => item.quantity > 0);

      if (cartItemsArray.length === 0) {
        return toast.error("Cart is empty");
      }

      const token = await getToken();
      const { data } = await axios.post(
        "/api/order/create",
        {
          address: selectedAddress._id,
          items: cartItemsArray,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        setCartItems({});
        router.push("/order-placed");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserAddresses();
    }
  }, [user]);

  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-5">
      <h2 className="text-xl md:text-2xl font-medium text-gray-700">Order Summary</h2>
      <hr className="border-gray-500/30 my-5" />
      <div className="space-y-6">
        {/* User Details Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="text-base font-medium uppercase text-gray-600">
              Your Details
            </label>
            <button
              onClick={() => {
                setIsEditMode(false);
                setEditingAddressId(null);
                setNewAddress({
                  fullName: '',
                  phoneNumber: '',
                  pinCode: '',
                  area: '',
                  city: '',
                  state: '',
                });
                setIsModalOpen(true);
              }}
              className="text-sm bg-orange-600 text-white px-3 py-1.5 rounded hover:bg-orange-700 transition"
            >
              + Add Details
            </button>
          </div>
          
          {userAddresses.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-gray-500 mb-3">No details added yet</p>
              <button
                onClick={() => {
                  setIsEditMode(false);
                  setEditingAddressId(null);
                  setNewAddress({
                    fullName: '',
                    phoneNumber: '',
                    pinCode: '',
                    area: '',
                    city: '',
                    state: '',
                  });
                  setIsModalOpen(true);
                }}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Add your details to continue
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {userAddresses.map((address, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedAddress && selectedAddress._id === address._id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => handleAddressSelect(address)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{address.fullName}</h4>
                      <p className="text-sm text-gray-600">{address.phoneNumber}</p>
                      <p className="text-sm text-gray-600">{address.area}</p>
                      <p className="text-sm text-gray-600">{address.city}, {address.state} - {address.pinCode}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditAddress(address);
                        }}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteAddress(address._id);
                        }}
                        className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <hr className="border-gray-200 my-5" />

        {/* Order Totals */}
        <div className="space-y-4">
          <div className="flex justify-between text-base font-medium">
            <p className="uppercase text-gray-600">Items {getCartCount()}</p>
            <p className="text-gray-800">
              {currency}
              {getCartAmount()}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping Fee</p>
            <p className="font-medium text-gray-800">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Tax (2%)</p>
            <p className="font-medium text-gray-800">
              {currency}
              {Math.floor(getCartAmount() * 0.02)}
            </p>
          </div>
          <div className="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
            <p>Total</p>
            <p>
              {currency}
              {getCartAmount() + Math.floor(getCartAmount() * 0.02)}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={createOrder}
        className="w-full bg-orange-600 text-white py-3 mt-5 hover:bg-orange-700"
      >
        Place Order
      </button>

      {/* Add Address Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-medium text-gray-700">
                  {isEditMode ? 'Edit Your Details' : 'Add Your Details'}
                </h2>
                <button 
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsEditMode(false);
                    setEditingAddressId(null);
                    setNewAddress({
                      fullName: '',
                      phoneNumber: '',
                      pinCode: '',
                      area: '',
                      city: '',
                      state: '',
                    });
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleAddNewAddress} className="space-y-4">
                <input
                  className="px-3 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-700"
                  type="text"
                  placeholder="Full name"
                  required
                  onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
                  value={newAddress.fullName}
                />
                <input
                  className="px-3 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-700"
                  type="tel"
                  placeholder="Phone number"
                  required
                  onChange={(e) => setNewAddress({ ...newAddress, phoneNumber: e.target.value })}
                  value={newAddress.phoneNumber}
                />
                <input
                  className="px-3 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-700"
                  type="text"
                  placeholder="Pin code"
                  required
                  onChange={(e) => setNewAddress({ ...newAddress, pinCode: e.target.value })}
                  value={newAddress.pinCode}
                />
                <textarea
                  className="px-3 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-700 resize-none"
                  rows={3}
                  placeholder="Address (Area and Street)"
                  required
                  onChange={(e) => setNewAddress({ ...newAddress, area: e.target.value })}
                  value={newAddress.area}
                ></textarea>
                <div className="flex space-x-3">
                  <input
                    className="px-3 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-700"
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                    value={newAddress.city}
                  />
                  <input
                    className="px-3 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-700"
                    type="text"
                    placeholder="State"
                    required
                    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                    value={newAddress.state}
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsEditMode(false);
                      setEditingAddressId(null);
                      setNewAddress({
                        fullName: '',
                        phoneNumber: '',
                        pinCode: '',
                        area: '',
                        city: '',
                        state: '',
                      });
                    }}
                    className="flex-1 bg-gray-200 text-gray-700 py-2.5 rounded hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-orange-600 text-white py-2.5 rounded hover:bg-orange-700 transition"
                  >
                    {isEditMode ? 'Update Details' : 'Save Details'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
