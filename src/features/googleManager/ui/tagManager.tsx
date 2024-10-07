import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const TagManager: React.FC = () => {
	return (
		<>
			{process.env.NODE_ENV === "production" && (
				<GoogleTagManager gtmId="GTM-WGCKQW9C" />
			)}
		</>
	);
}

export default TagManager;