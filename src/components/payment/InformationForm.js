import React from "react";
import useNavigation from "@/libs/useNavigate";

const CheckoutForm = () => {
    const { navigate } = useNavigation();
    const handleGoNext = (e) => {
        e.preventDefault();
        navigate("/payment/shipping");
    };


    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Address</h1>
            <div className="flex items-center space-x-4">
                <span className="font-medium text-black">Address</span>
                <span className="text-gray-400">—</span>
                <span className="text-gray-500">Shipping</span>
                <span className="text-gray-400">—</span>
                <span className="text-gray-500">Payment</span>
            </div>
            <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="p-2 border rounded"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Apartment, suite, etc (optional)"
                    className="w-full p-2 border rounded"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="City"
                        className="p-2 border rounded"
                    />
                    <select className="p-2 border rounded">
                        <option>Country</option>
                        <option>USA</option>
                        <option>Canada</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Zipcode"
                        className="p-2 border rounded"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Optional"
                    className="w-full p-2 border rounded"
                />
                <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-500">
                        Save contact information
                    </label>
                </div>
                <button
                    type="submit"
                    onClick={handleGoNext}
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                >
                    Continue to shipping
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
