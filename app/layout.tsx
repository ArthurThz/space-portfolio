import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanva from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur Theodoro",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] h-full overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanva />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
