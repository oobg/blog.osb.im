import Script from "next/script";
import React from "react";

const GoogleAdSense: React.FC = () => {
	const url = "https://pagead2.googlesyndication.com";
	const path = "/pagead/js/adsbygoogle.js";
	const PID = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PID;
	const client = `client=ca-pub-${PID}`;
	const src = `${url}${path}?${client}`;
	return (
		<>
			{process.env.NODE_ENV === "production" && (
				<Script
					async
					src={src}
					crossOrigin="anonymous"
					strategy="lazyOnload"
				/>
			)}
		</>
	);
};

export default GoogleAdSense;