import { AppProps } from "next/app";
import { OsxLayout } from "@/features/layout";
import { TagManager } from "@/features/googleTagManager";
import "@/app/globals.css";
import "@/app/nextra.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<OsxLayout>
				<Component {...pageProps} />
			</OsxLayout>
			<TagManager />
		</>
	);
}

export default MyApp;