import Image from "next/image";

interface IconItemProps {
	imageSrc: string;
	label: string;
}

const IconItem: React.FC<IconItemProps> = ({ imageSrc, label }) => {
	return (
		<div className="group mt-2 w-14 h-full flex flex-col items-center justify-between relative">
			<div className="absolute bottom-[74px] text-xs rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600 after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] after:border-8 after:border-transparent after:border-t-neutral-600">
				{label}
			</div>
			<div className="relative w-14 h-14">
				<Image src={imageSrc} alt={label} className="rounded" layout="fill" objectFit="cover" />
			</div>
			<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="3" fill="white" />
			</svg>
		</div>
	);
};

export default IconItem;