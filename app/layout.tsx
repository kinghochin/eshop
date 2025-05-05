import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/section/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/section/Footer";
import StoreProvider from '../StoreProvider/StoreProvider';
import { Toaster } from "@/components/ui/toaster"
import ChatWidget from "@/components/section/ChatWidget";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "eShop | Next JS",
  description: "eShop project using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Nav />
            <Toaster />
            {children}
            <Footer />
            <ChatWidget iframeUrl={`${process.env.NEXT_PUBLIC_AGENT_API_URL}?embed=true`} />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
