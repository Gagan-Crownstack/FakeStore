"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
} from "@/lib/features/cartSlice";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-500">
          Add some items to your cart to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border"
            >
              {/* Product Image */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <img src={item.image} alt={item.title} className="fill" />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Remove item"
                  >
                    delete
                  </button>
                </div>

                <p className="text-gray-500 text-sm mb-2">{item.category}</p>

                <div className="flex justify-between items-end">
                  <div className="text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="p-1 rounded-md hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>

                    <span className="w-8 text-center">{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="p-1 rounded-md hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                         hover:bg-blue-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
