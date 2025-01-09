"use client";
import React, { useState } from "react";

const OrderInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium">Return Policy</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-black"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <p className="text-sm text-gray-500 mt-2">
          This is our example return policy which is everything you need to know
          about our returns.
        </p>
      )}
    </div>
  );
};

export default OrderInfo;
