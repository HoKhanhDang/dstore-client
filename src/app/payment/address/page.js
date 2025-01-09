"use client";
import React from "react";
import CartSummary from "@/components/payment/CartSummary";
import CheckoutForm from "@/components/payment/InformationForm";
import Main from "@/components/shared/layouts/Main";
import Container from "@/components/shared/Container";
import { IoIosArrowBack } from "react-icons/io";
import useNavigate from "@/libs/useNavigate";

const Address = () => {
    const { goBack } = useNavigate();
    return (
        <Main>
            <Container className="flex flex-col gap-y-12 py-8">
                <div className="max-w-6xl mx-auto p-4 space-y-6">
                    <div
                        onClick={() => goBack()}
                        className="flex items-center gap-2"
                    >
                        <IoIosArrowBack /> Back
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <CheckoutForm />
                        <CartSummary />
                    </div>
                </div>
            </Container>
        </Main>
    );
};

export default Address;
