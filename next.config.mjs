import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
	assetPrefix: ".",
};

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./nextra.config.tsx",
});

export default withNextra(nextConfig);