import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "img.icons8.com",
			},
		],
	},
};

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./nextra.config.tsx",
});

export default withNextra(nextConfig);