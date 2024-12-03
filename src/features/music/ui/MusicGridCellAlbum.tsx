import React from "react";
import Image from "next/image";

interface MusicGridCellAlbumProps {
	imageSrc: string;
	imageAlt: string;
	children: React.ReactNode;
}

const MusicGridCellAlbum = ({ imageSrc, imageAlt, children }: MusicGridCellAlbumProps) => {
	return (
		<figure className="flex flex-col items-start justify-start gap-3 rounded h-60">
			<Image
				src={"/assets/img/music/" + imageSrc}
				alt={imageAlt}
				width={180}
				height={180}
				className={"rounded-lg"}
			/>
			<div className="text-left text-xs pl-1">
				{children}
			</div>
		</figure>
	)
}

export default MusicGridCellAlbum;