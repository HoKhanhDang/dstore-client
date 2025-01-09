"use client";

import React from "react";

const PaymentDetails = ({ paymentMethod }) => {
    return (
        <div className="mt-4">
            {paymentMethod === "QR" && (
                <>
                    <h2 className="text-lg font-medium mb-2">
                        Scan the QR Code
                    </h2>
                    <div className="bg-gray-300 w-40 h-40 flex items-center justify-center">
                        <span className="text-gray-500">QR Code</span>
                    </div>
                </>
            )}
            {paymentMethod === "COD" && (
                <p className="text-gray-700">
                    You will pay with cash upon delivery.
                </p>
            )}
        </div>
    );
};

export default PaymentDetails;
