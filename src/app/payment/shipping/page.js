"use client";
import React from "react";
import Main from "@/components/shared/layouts/Main";
import Container from "@/components/shared/Container";
import CartSummary from "@/components/payment/CartSummary";
import ShippingOptions from "@/components/payment/ShippingOptions";
import useNavigation from "@/libs/useNavigate";
import { IoIosArrowBack } from "react-icons/io";

const shippingOptions = [
    {
        id: "1",
        name: "Giao Hang Nhanh Shipping",
        description: "4-7 Business Days",
        price: "Free",
    },
    {
        id: "2",
        name: "Giao Hang Tiet Kiem Shipping",
        description: "3-5 Business Days",
        price: "Free",
    },
];

const Shipping = () => {
    const { navigate, goBack } = useNavigation();

    const handleContinue = (selectedOption) => {
        navigate("/payment/checkout");
    };
    return (
        <Main>
            <Container className="flex flex-col gap-y-12 py-8">
                <div className="max-w-6xl mx-auto p-4 space-y-6">
                    <div
                        onClick={() => goBack()}
                        className="w-fit flex items-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    >
                        <IoIosArrowBack /> Back
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ShippingOptions
                            options={shippingOptions}
                            onContinue={handleContinue}
                        />
                        <CartSummary />
                    </div>
                </div>
            </Container>
        </Main>
    );
};

export default Shipping;
