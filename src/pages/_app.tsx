import { AppProps } from "next/app";
import { OsxLayout } from "@/features/layout";
import "@/app/globals.css";
import "@/app/nextra.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<OsxLayout>
			<Component {...pageProps} />
		</OsxLayout>
	);
}

export default MyApp;