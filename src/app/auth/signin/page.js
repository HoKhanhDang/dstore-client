"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Spinner from "@/components/shared/Spinner";
import Link from "next/link";
import { useSignInMutation } from "@/services/auth/authApi";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Signin = () => {
    const router = useRouter();
    const [signin, { isLoading, data, error }] = useSignInMutation();
    const [user, setUser] = useState({
        email: "client@gmail.com",
        password: "123123aA@",
    });

    useEffect(() => {
        if (isLoading) {
            toast.loading("Signing in...", { id: "signin" });
        }

        if (data) {
            toast.success(data?.description, { id: "signin" });
            localStorage.setItem("accessToken", data?.accessToken);

            // open new tab
            setTimeout(() => {
                window.open("/", "_self");
            }, 1000);
        }
        if (error?.data) {
            toast.error(error?.data?.description, { id: "signin" });
        }
    }, [isLoading, data, error]);

    const handleSignin = async (e) => {
        e.preventDefault();

        signin({
            email: user.email,
            password: user.password,
        });
        e.target.reset();
    };

    return (
        <section className="w-screen h-screen flex justify-center items-center px-4">
            <div className="max-w-md w-full flex flex-col gap-y-4 border p-8 rounded-primary">
                <div className="flex flex-row items-center gap-x-2">
                    <hr className="w-full" />
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={141}
                        height={40}
                        className="max-w-full cursor-pointer"
                        onClick={() => router.push("/")}
                    />
                    <hr className="w-full" />
                </div>
                <form
                    action=""
                    className="w-full flex flex-col gap-y-4"
                    onSubmit={handleSignin}
                >
                    <label htmlFor="email" className="flex flex-col gap-y-1">
                        <span className="text-sm">Enter Your Email</span>
                        <input
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                            type="email"
                            name="email"
                            id="email"
                            placeholder="i.e. example@gmail.com"
                            className=""
                            required
                        />
                    </label>
                    <label htmlFor="password" className="flex flex-col gap-y-1">
                        <span className="text-sm">Enter Your Password</span>
                        <input
                            value={user.password}
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                            type="password"
                            name="password"
                            id="password"
                            placeholder="i.e. Admin@123"
                            className=""
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="py-2 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow disabled:bg-gray-200 disabled:border-gray-200 disabled:text-black/50 disabled:cursor-not-allowed flex flex-row justify-center items-center text-sm"
                    >
                        {isLoading ? <Spinner /> : "Sign In"}
                    </button>
                </form>
                <div className="flex flex-row justify-center items-center gap-x-2 text-xs">
                    <Link href="/auth/signup" className="">
                        Sign Up
                    </Link>
                    <span className="h-4 border-l" />
                    <Link href="/auth/forgot-password" className="">
                        Forgot Password
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Signin;
