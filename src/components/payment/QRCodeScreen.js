"use client";
import { FaRegTimesCircle } from "react-icons/fa";
import QRCodeBill from "./QRCodeBill";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Bill = ({ total, setIsShowQR, description,setIsOrderCompleted }) => {
    const [qrCodeImage, setQrCodeImage] = useState(null);

    const handleClickExit = () => {
        Swal.fire({
            title: "Do you want to discard this?",
            text: "You won't be able to revert this!, if you have made the payment, please click 'I have made the payment' button",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, close it!",
        }).then((result) => {
            if (result.isConfirmed) {
                setIsShowQR(false);
            }
        });
    };
    useEffect(() => {
        // Fetch the QR code
        const fetchQRCode = async () => {
            try {
                const response = await fetch(
                    "https://api.vietqr.io/v2/generate",
                    {
                        method: "POST",
                        headers: {
                            "x-client-id": `${process.env.NEXT_PUBLIC_VIETQR_CLIENT_ID}`,
                            "x-api-key": `${process.env.NEXT_PUBLIC_VIETQR_API_KEY}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            accountNo: Number(
                                `${process.env.NEXT_PUBLIC_BANK_ACCOUNT_NO}`
                            ),
                            accountName: `${process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME}`,
                            acqId: Number(
                                `${process.env.NEXT_PUBLIC_BANK_ACQ_ID}`
                            ),
                            amount:
                                total *
                                Number(
                                    `${process.env.NEXT_PUBLIC_EXCHANGE_RATE}`
                                ),
                            addInfo: description,
                            format: "text",
                            template: "compact2",
                        }),
                    }
                );
                await response.json().then((data) => {
                    setQrCodeImage(data.data.qrDataURL);
                });

                // Uncomment when QR code URL is provided by the API
                // setQrCodeImage(response.data.qrDataURL);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQRCode();

        // Handle Escape key
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsShowQR(false); // Close the modal on Escape key press
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [setIsShowQR]);

    return (
        <div className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-black/50">
            <div className="fixed top-5 right-5">
                <FaRegTimesCircle
                    onClick={handleClickExit}
                    className="text-red-400 text-4xl cursor-pointer"
                />
            </div>
            <QRCodeBill
                qrCodeImage={qrCodeImage}
                totalAmount={total}
                description={description}
                setIsOrderCompleted={setIsOrderCompleted}
            />
        </div>
    );
};

export default Bill;
