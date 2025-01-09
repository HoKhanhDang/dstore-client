import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import OrderSuccessScreen from "./SuccessfullyScreen";

const QRCodeBill = ({
    qrCodeImage,
    totalAmount,
    description,
    setIsOrderCompleted,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
    const { user } = useSelector((state) => state.auth);

    const handleComfirmPayment = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_WEBHOOK_URL}/orders/check?user_id=${
                    user._id
                }&description=${description}&amount=${2000}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = await response.json();
            if (data.success) {
                setIsPaymentSuccess(true);
            } else {
                toast.error("Payment failed, please check and try again");
            }
            setIsLoading(false);

            //// CREATE ORDER LOGIC
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackToHome = () => {
        setIsOrderCompleted(true);
    };
    return (
        <div className="w-full md:w-1/3 bg-white p-6 shadow-md text-center space-y-4">
            {/* Title */}
            <h2 className="text-xl font-bold">QR Code Bill</h2>

            {/* QR Code Image */}
            <div className="flex justify-center">
                {qrCodeImage ? (
                    <img
                        src={qrCodeImage}
                        alt="QR Code"
                        className="w-auto h-[400px] border-2 border-gray-300"
                    />
                ) : (
                    <div
                        className="w-12 h-12 rounded-full animate-spin
                    border border-solid border-yellow-500 border-t-transparent"
                    ></div>
                )}
            </div>

            {/* Payment Details */}
            <div className="space-y-2">
                <p className="text-gray-700">
                    Scan the QR code with your banking app to make the payment.
                </p>
                <p className="text-lg font-medium">
                    Total Amount:{" "}
                    <span className="text-black font-bold">${totalAmount}</span>
                </p>
            </div>

            {/* Confirm Button */}
            {!isPaymentSuccess && (
                <button
                    onClick={handleComfirmPayment}
                    className="w-full py-3 bg-black text-white font-bold cursor-pointer"
                >
                    {isLoading ? (
                        <div className="w-6 h-6 rounded-full animate-spin border-2 border-solid border-white border-t-transparent mx-auto"></div>
                    ) : (
                        "I have made the payment"
                    )}
                </button>
            )}
            {isPaymentSuccess && (
                <>
                    <div className="group w-full h-full py-3 bg-black text-green-500 font-bold  relative cursor-pointer">
                        Payment success!
                        <div className="absolute inset-0 hidden w-full h-full z-[50] bg-slate-50  items-center justify-center group-hover:block group-hover:animate-fill">
                            <span
                                onClick={handleBackToHome}
                                className="w-full h-full flex items-center justify-center font-bold border border-black"
                            >
                                Go back to the website
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default QRCodeBill;
