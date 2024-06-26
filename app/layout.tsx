import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import Navbar from "@/components/navbar/Index";
import Navbar from "@/components/navbar/Index";
import Footer from "@/components/footer/Index"

//import StarsCanvas from "@/components/share/StartBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CIMADE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/img/logo/icono_small.png" /> 
      </head>
      <body className={`${inter.className} `}>
        <Navbar />
          {children}
          <Footer/>
      </body>
    </html>
  );
}
