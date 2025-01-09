"use client";

import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import CartItem from "@/components/payment/CartItem";
import OrderSummary from "@/components/payment/OrderSummary";
import OrderInfo from "@/components/payment/OrderInfo";
import Main from "@/components/shared/layouts/Main";
import Container from "@/components/shared/Container";
import useNavigate from "@/libs/useNavigate";
import { useSelector } from "react-redux";

const Payment = () => {
    const { user } = useSelector((state) => state.auth);
    const { navigate } = useNavigate();

    const handleRemove = async (id) => {
        // try {
        //     await useDeleteFromCartMutation(id);
        // } catch (error) {
        //     console.error("Failed to remove item with id:", id);
        // }
    };

    const handleCheckout = () => {
        navigate("/payment/address");
    };

    const subtotal =
        user?.cart &&
        user?.cart.reduce((acc, item) => acc + item.product.price, 0);

    return (
        <Main>
            <Container className="flex flex-col gap-y-12 py-8">
                <div className="max-w-5xl mx-auto p-4 space-y-6">
                    <h1 className="text-2xl font-semibold">Your cart</h1>
                    <p className="text-sm text-gray-500">
                        Not ready to checkout?{" "}
                        <a href="/" className="text-blue-500 hover:underline">
                            Continue Shopping
                        </a>
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-4">
                            {user.cart &&
                                user.cart.map((item,index) => (
                                    <CartItem
                                        key={index}
                                        name={item.product.title}
                                        size={item.product.variations.sizes[0]}
                                        price={item.product.price}
                                        quantity={item.quantity}
                                        onRemove={() => handleRemove(item._id)}
                                    />
                                ))}
                        </div>
                        <OrderSummary
                            subtotal={subtotal}
                            onCheckout={handleCheckout}
                        />
                    </div>
                    <div className="space-y-4">
                        <OrderInfo />
                        <OrderInfo />
                    </div>
                </div>
            </Container>
        </Main>
    );
};

export default Payment;
