"use client";
import React, { useRef, useState } from "react";
import PaymentMethodSelector from "@/components/payment/PaymentMethodSelector";
import CartSummary from "@/components/payment/CartSummary";
import Main from "@/components/shared/layouts/Main";
import Container from "@/components/shared/Container";
import Bill from "@/components/payment/QRCodeScreen";
import { generateComplexLargeRandomNumber } from "@/utils/helpers";
import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import useNavigate from "@/libs/useNavigate";
import OrderSuccessScreen from "@/components/payment/SuccessfullyScreen";

const CheckoutPage = () => {
    const { user } = useSelector((state) => state.auth);
    const [isOrderCompleted, setIsOrderCompleted] = useState(false);
    const subtotal =
        user?.cart &&
        user?.cart.reduce((acc, item) => acc + item.product.price, 0);

    const { goBack } = useNavigate();
    const [isShowQR, setIsShowQR] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState("COD");
    const description = useRef(
        "order" + Number(generateComplexLargeRandomNumber())
    ).current;

    const handleCheckout = async () => {
        if (paymentMethod === "COD") {
            //logic to add order to database
            setIsOrderCompleted(true);
        } else {
            const rs = await fetch(
                `${process.env.NEXT_PUBLIC_WEBHOOK_URL}/orders`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_id: user._id,
                        amount: 2000,
                        description: description,
                    }),
                }
            );
            const data = await rs.json();
            setIsShowQR(true);
        }
    };

    return (
        <Main>
            <Container className="flex flex-col gap-y-12 py-8">
                {isOrderCompleted && <OrderSuccessScreen />}
                {isShowQR && (
                    <Bill
                        description={description}
                        total={subtotal}
                        setIsShowQR={setIsShowQR}
                        setIsOrderCompleted={setIsOrderCompleted}
                    />
                )}

                <div className="flex flex-col md:flex-row p-8 space-x-6 bg-gray-100 h-fit">
                    {/* Left Section */}
                    <div className="w-full md:w-2/3 space-y-6">
                        <div
                            onClick={() => goBack()}
                            className="w-fit flex items-center gap-2 hover:cursor-pointer hover:bg-white p-2 rounded-md"
                        >
                            <IoIosArrowBack /> Back
                        </div>
                        <h1 className="text-2xl font-bold">Checkout</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-500">Address</span>
                            <span className="text-gray-400">—</span>
                            <span className="text-gray-500">Shipping</span>
                            <span className="text-gray-400">—</span>
                            <span className=" font-medium text-black">
                                Payment
                            </span>
                        </div>
                        <PaymentMethodSelector
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod}
                        />
                        <button
                            className="w-full py-3 bg-black text-white font-bold mt-6"
                            onClick={handleCheckout}
                        >
                            Place Order
                        </button>
                    </div>

                    {/* Right Section */}
                    <CartSummary />
                </div>
            </Container>
        </Main>
    );
};

export default CheckoutPage;
