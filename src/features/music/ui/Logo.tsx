import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	const src = "/assets/img/logo-transparent.png";
	return (
		<Link href="/music" className="flex">
			<Image
				src={src}
				alt="logo"
				width={30}
				height={1}
				className="w-auto h-auto"
			/>
			<span className="text-white text-2xl font-bold">Music</span>
		</Link>
	);
}

export default Logo;