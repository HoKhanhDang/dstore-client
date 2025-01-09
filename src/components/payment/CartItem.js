"use client";
import React from "react";

const CartItem = ({ name, size, price, quantity, onRemove }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-gray-500">Size: {size}</p>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
        <p className="text-lg font-semibold">${price}</p>
      </div>
      <button
        onClick={onRemove}
        className="text-red-500 hover:underline text-sm"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
