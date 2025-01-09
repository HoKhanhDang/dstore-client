'use client';

import React, { useState } from "react";

const PaymentForm = () => {
  const [saveCard, setSaveCard] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Payment</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">Address</span>
        <span className="text-gray-400">—</span>
        <span className="text-gray-500">Shipping</span>
        <span className="text-gray-400">—</span>
        <span className="font-medium text-black">Payment</span>
      </div>
      <div className="flex space-x-4">
        <button className="flex-1 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-6"
          />
          <span>PayPal</span>
        </button>
        <button className="flex-1 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Pay"
            className="h-6"
          />
          <span>Apple Pay</span>
        </button>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-4">Payment Details</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-2 border rounded"
          />
          <div className="grid grid-cols-3 gap-4">
            <select className="p-2 border rounded">
              <option>Month</option>
              {[...Array(12).keys()].map((month) => (
                <option key={month + 1} value={month + 1}>
                  {month + 1}
                </option>
              ))}
            </select>
            <select className="p-2 border rounded">
              <option>Year</option>
              {[...Array(10).keys()].map((year) => (
                <option key={year} value={2024 + year}>
                  {2024 + year}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="CVC"
              className="p-2 border rounded"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              checked={saveCard}
              onChange={() => setSaveCard(!saveCard)}
            />
            <label className="text-sm text-gray-500">
              Save card data for future payments
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Pay with card
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
