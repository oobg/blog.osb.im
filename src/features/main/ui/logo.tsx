import Image from "next/image";

export default function Logo() {
	const image = "/logo-transparent.png";
	return (
		<div className="flex flex-col items-center justify-center gap-1">
			<Image src={image} alt="logo" width={200} height={200} />
			<span className="text-5xl">𝖔𝖘𝖇.𝖎𝖒</span>
		</div>
	)
}