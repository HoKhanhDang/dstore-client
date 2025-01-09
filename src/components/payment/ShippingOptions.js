"use client";
import React, { useState } from "react";

const ShippingOptions = ({ options, onContinue }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].id);

    const handleOptionChange = (id) => {
        setSelectedOption(id);
    };

    return (
        <div className="space-y-6 w-full">
            <h1 className="text-2xl font-semibold">Shipping</h1>
            <div className="flex items-center space-x-4">
                <span className="text-gray-500">Address</span>
                <span className="text-gray-400">—</span>
                <span className="font-medium text-black">Shipping</span>
                <span className="text-gray-400">—</span>
                <span className="text-gray-500">Payment</span>
            </div>
            <div className="space-y-4">
                {options.map((option) => (
                    <div
                        key={option.id}
                        className={`border p-4 rounded-lg cursor-pointer ${
                            selectedOption === option.id
                                ? "border-black bg-gray-100"
                                : "border-gray-300"
                        }`}
                        onClick={() => handleOptionChange(option.id)}
                    >
                        <div className="flex items-center space-x-2 px-6 gap-4">
                            <input
                                type="radio"
                                checked={selectedOption === option.id}
                                onChange={() => handleOptionChange(option.id)}
                                className="w-5 h-5 cursor-pointer"
                            />
                            <div>
                                <h3 className="text-lg font-medium">
                                    {option.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {option.description}
                                </p>
                                <p className="text-lg font-semibold">
                                    {option.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => onContinue(selectedOption)}
                className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
                Continue to payment
            </button>
        </div>
    );
};

export default ShippingOptions;
