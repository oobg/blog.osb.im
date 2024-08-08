/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		output: "export",
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			}
		],
	}
};

export default nextConfig;
