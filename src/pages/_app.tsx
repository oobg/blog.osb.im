import type { AppProps } from "next/app";
import "@/app/globals.css";
import { HomeButton } from "@/features/header";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<HomeButton />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;