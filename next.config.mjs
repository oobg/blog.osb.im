/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// remotePatterns: [
		// 	{
		// 		protocol: "https",
		// 		hostname: "images.unsplash.com",
		// 	}
		// ],
		loader: "imgix",
		path: "https://images.unsplash.com/photo-"
	}
};

export default nextConfig;
