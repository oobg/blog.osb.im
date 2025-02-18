import React from "react";
import Image from "next/image";

interface ButtonProps {
	normalSrc: string;
	hoverSrc: string;
	alt: string;
	ariaLabel: string;
	isHovered: boolean;
	onHover: () => void;
	onLeave: () => void;
}

const MacButton: React.FC<ButtonProps> = ({
  normalSrc,
  hoverSrc,
  alt,
  ariaLabel,
  isHovered,
  onHover,
  onLeave,
}) => {
	return (
		<button
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
			aria-label={ariaLabel}
		>
			<Image
				src={isHovered ? hoverSrc : normalSrc}
				alt={alt}
				className={isHovered ? "iconData.ts" : "normal"}
				width={12}
				height={12}
			/>
		</button>
	);
};

export default MacButton;