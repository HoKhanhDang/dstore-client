import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useDeleteFromCartMutation } from "@/services/cart/cartApi";
import { useSelector } from "react-redux";

const OrderSuccessScreen = () => {
    const { user } = useSelector((state) => state.auth);
    const [removeFromCart, { isLoading, data, error }] =
        useDeleteFromCartMutation();

    useEffect(() => {
        user.cart &&
            user?.cart.map(async (item) => {
                try {
                    await removeFromCart(item._id);
                } catch (error) {
                    console.error("Failed to remove item with id:", item._id);
                }
            });

        setTimeout(() => {
            window.location.href = "/";
        }, 3000);
    }, []);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center backdrop-blur-sm z-[1000]">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 h-1/2 text-center flex flex-col items-center justify-center">
                <AiOutlineCheckCircle className="text-green-500 text-[100px] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                    Your first order has been placed!
                </h2>
                <p className="mt-2 text-md text-gray-600">
                    You’ll get a confirmation email soon. The rest of your items
                    are now ready to checkout.
                </p>
                <p className="mt-2 text-sm text-gray-400 py-10">
                    You’ll be redirected to the homepage in a few seconds.
                </p>
            </div>
        </div>
    );
};

export default OrderSuccessScreen;
