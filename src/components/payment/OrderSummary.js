"use client";
import React from "react";

const OrderSummary = ({ subtotal, onCheckout }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">Order Summary</h2>
      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between text-sm mb-4">
        <span>Shipping</span>
        <span>Calculated at the next step</span>
      </div>
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>${subtotal}</span>
      </div>
      <button
        onClick={onCheckout}
        className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
      >
        Continue to checkout
      </button>
    </div>
  );
};

export default OrderSummary;
