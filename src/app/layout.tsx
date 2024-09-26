import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/features/header";
import { MainWindow } from "@/features/main";
import { Footer } from "@/features/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BaeWoong's Blog",
  description: "playground for blog.osb.im",
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="kr">
      <body className={`${inter.className} relative overflow-hidden w-dvw h-dvh`}>
        <div className="flex flex-col items-center w-full h-full text-white bg-[#2E2E2E]">
          <Header/>
          <MainWindow>
            {children}
          </MainWindow>
          <Footer/>
        </div>
      </body>
    </html>
  );
}