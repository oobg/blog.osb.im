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
    <body className={`${inter.className} flex flex-col items-center overflow-hidden h-screen`}>
      <Header />
      <MainWindow>
        {children}
      </MainWindow>
      <Footer />
    </body>
    </html>
  );
}