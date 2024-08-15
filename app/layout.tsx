import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollTotopButton from "@/components/ScrollTotopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chini Foods",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <ScrollTotopButton />
        <Footer />
      </body>
    </html>
  );
}
