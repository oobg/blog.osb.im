import React from 'react';

interface cardImageProps {
	imageSrc: string;
	imageAlt: string;
}

const CardImage: React.FC<cardImageProps> = ({ imageSrc, imageAlt }) => {
	return (
		<div
			className="relative m-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-neutral-800 shadow-neutral-800/40">
			<img
				src={imageSrc}
				alt={imageAlt}
				className="rounded-xl object-cover h-36 w-full"
			/>
		</div>
	);
};

export default CardImage;