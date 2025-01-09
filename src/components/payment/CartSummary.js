"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useDeleteFromCartMutation } from "@/services/cart/cartApi";

const CartSummary = ({}) => {
    const { user } = useSelector((state) => state.auth);
    const [removeFromCart, { isLoading, data, error }] =
        useDeleteFromCartMutation();

    const subtotal =
        user?.cart &&
        user?.cart.reduce((acc, item) => acc + item.product.price, 0);

    const handleRemove = async (id) => {
        try {
            window.alert("Item removed from cart");
            await removeFromCart(id);
        } catch (error) {
            console.error("Failed to remove item with id:", id);
        }
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg font-medium">Your cart</h2>
            <div className="space-y-4">
                {user.cart &&
                    user.cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b pb-4"
                        >
                            <div>
                                <h3 className="text-lg font-medium">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-500 uppercase">
                                    Size: {item.product.variations.sizes[0]}
                                </p>
                                <p className="text-lg font-semibold">
                                    ${item.product.price}
                                </p>
                            </div>
                            <button
                                onClick={() => handleRemove(item._id)}
                                className="text-red-500 hover:underline text-sm"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
            </div>
            <div className="border-t pt-4">
                {/* <input
                    type="text"
                    placeholder="Enter coupon code here"
                    className="w-full p-2 border rounded mb-4"
                /> */}
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
            </div>
        </div>
    );
};

export default CartSummary;
