import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const AnalyticsManager: React.FC = () => {
	return (
		<>
			{process.env.NODE_ENV === "production" && (
				<GoogleAnalytics gaId="G-395PD77KT6" />
			)}
		</>
	);
}

export default AnalyticsManager;