import React from "react";
import type { Metadata } from "next";
import "./globals.css";

import { OsxLayout } from "@/features/layout";


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
      <body>
        <div id="__next">
          <OsxLayout>
            {children}
          </OsxLayout>
        </div>
      </body>
    </html>
  );
}