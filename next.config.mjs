import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
		// remotePatterns: [
		// 	{
		// 		protocol: "https",
		// 		hostname: "images.unsplash.com",
		// 	},
		// ],
	},
};

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./nextra.config.tsx",
});

export default withNextra(nextConfig);