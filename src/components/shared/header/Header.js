"use client";

import React from "react";
import Container from "../Container";
import Image from "next/image";
import Categories from "./Categories";
import Auth from "./Auth";
import SearchFilter from "./SearchFilter";
import MyCart from "./MyCart";

const Header = () => {
    return (
        <Container className="">
            <nav className="rounded-xl p-4 flex flex-row justify-between">
                <div className="flex flex-row gap-x-4 items-center relative">
                    <Image
                        src="/logo copy.png"
                        alt="logo"
                        width={200}
                        height={70}
                        className="h-[70px] object-contain md:block hidden cursor-pointer"
                        onClick={() => window.open("/", "_self")}
                    />

                    <div className="border-l h-7 rounded" />

                    <Categories />
                </div>
                <div className="flex flex-row gap-x-2 relative items-center">
                    {/* {user && Object?.keys(user)?.length > 0 && (
                        <button
                            className="p-2 rounded-secondary hover:bg-slate-100 transition-colors"
                            onClick={() =>
                                navigate(`dashboard/${user.role}/my-profile`)
                            }
                        >
                            <Dashboard className="h-6 w-6" />
                        </button>
                    )} */}
                    <SearchFilter />

                    <MyCart />
                    <Auth />
                </div>
            </nav>
        </Container>
    );
};

export default Header;
