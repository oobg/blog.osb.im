import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SNBItemProps {
	href: string;
	activeHexColor?: string;
	imageName?: string;
	imageHexColor?: string;
	children: React.ReactNode;
}

const SNBItem = ({
	href,
	activeHexColor = "3F3F3F",
	imageName = "home",
	imageHexColor = "F94E5F",
	children,
}: SNBItemProps) => {
	const pathname = usePathname();
	return (
		<Link href={href}
      className={`
        w-full h-8 min-w-0
        rounded-lg focus:bg-[#${activeHexColor}] hover:bg-[#${activeHexColor}]
        flex items-center justify-start gap-2
        text-left text-white text-sm px-2 whitespace-nowrap
        ${pathname === href ? `bg-[#${activeHexColor}]` : ""}
      `}
		>
			<Image
				src={`https://img.icons8.com/ios/100/${imageHexColor}/${imageName}.png`}
				alt={imageName + " icon"}
				width={10}
				height={10}
				className="w-auto h-auto text-red"
			/>
			<span className={"flex gap-2 overflow-hidden text-ellipsis"}>
				{children}
			</span>
		</Link>
	);
}

export default SNBItem;