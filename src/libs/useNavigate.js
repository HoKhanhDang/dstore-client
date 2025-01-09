"use client"; // Ensure this is client-side code

import { useRouter } from "next/navigation";

const useNavigation = () => {
  const router = useRouter();

  const navigate = (path) => {
    console.log("Navigating to:", path);
    router.push(path);
  };

  const goBack = () => {
    console.log("Going back");
    router.back();
  };

  const goForward = () => {
    console.log("Going forward");
    router.forward();
  };

  return {
    navigate,
    goBack,
    goForward,
  };
};

export default useNavigation;
