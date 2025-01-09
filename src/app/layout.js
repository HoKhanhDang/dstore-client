import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
    metadataBase: new URL("https://dstore-csr.vercel.app"),
    title: "Dstore - Shopping Online and Find Happiness",
    description:
        "Explore Dstore - your online shopping destination. Discover joy with Dstore, the ultimate shopping experience built with Next.Js 13 App Directory.",
    openGraph: {
        title: "Dstore - Shopping Online and Find Happiness",
        description:
            "Explore Dstore - your online shopping destination. Discover joy with Dstore, the ultimate shopping experience built with Next.Js 13 App Directory.",
        url: "https://dstore-csr.vercel.app",
        siteName: "Dstore",
        images: "https://github.com/devhasibulislam/canim-ecommerce/blob/master/client/public/og.png?raw=true",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@devhasibulislam",
        title: "Dstore - Shopping Online and Find Happiness",
        description:
            "Explore Dstore - your online shopping destination. Discover joy with Dstore, the ultimate shopping experience built with Next.Js 13 App Directory.",
        image: "https://github.com/devhasibulislam/canim-ecommerce/blob/master/client/public/og.png?raw=true",
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Auth>{children}</Auth>
                    <Toaster />
                </Providers>
            </body>
        </html>
    );
}
