import React from 'react';
import Image from 'next/image';

interface CardImageProps {
	imageSrc: string;
	imageAlt: string;
}

const CardImage: React.FC<CardImageProps> = ({ imageSrc, imageAlt }) => {
	return (
		<div className="relative m-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-neutral-800 shadow-neutral-800/40">
			<Image
				src={imageSrc}
				alt={imageAlt}
				width={300}
				height={144}
				className="rounded-xl object-cover h-36 w-full"
			/>
		</div>
	);
};

export default CardImage;