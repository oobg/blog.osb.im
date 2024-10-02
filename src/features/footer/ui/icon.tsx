import React from "react";
import Image from "next/image";

interface IconItemProps {
	imageSrc: string;
	label: string;
}

const IconItem: React.FC<IconItemProps> = ({ imageSrc, label }) => {
	return (
		<div className="group mt-2 w-14 h-full flex flex-col items-center justify-between relative">
			<div
				className="absolute bottom-[74px] text-xs py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300
        whitespace-nowrap rounded-lg bg-[rgba(51,51,51,0.85)] border border-[#565656] text-[#ddd] shadow-[0_0_0_1px_#3f3f3f]"
			>
				{label}
			</div>
			<div className="relative w-14 h-14 -mt-1 -mb-2">
				<Image src={imageSrc} alt={label} width={56} height={56} className="rounded object-contain" />
			</div>
			<svg width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="3" fill="white" />
			</svg>
		</div>
	);
};

export default IconItem;