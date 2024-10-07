import { AppProps } from "next/app";
import { OsxLayout } from "@/features/layout";
import { TagManager, AnalyticsManager } from "../features/googleManager";
import "@/app/globals.css";
import "@/app/nextra.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<TagManager />
			<OsxLayout>
				<Component {...pageProps} />
			</OsxLayout>
			<AnalyticsManager />
		</>
	);
}

export default MyApp;