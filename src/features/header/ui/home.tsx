"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const image = "/logo-transparent.png";
	return (
		<div className="fixed top-3 left-3">
			<Link href="/" className="w-12 h-12 rounded-full">
				<Image src={image} alt="go to home" width={30} height={30} />
			</Link>
		</div>
	);
}
