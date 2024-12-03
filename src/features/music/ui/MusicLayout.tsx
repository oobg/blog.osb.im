import React from "react";
import { SNB } from "@/features/music";

interface MusicLayoutProps {
	children: React.ReactNode;
}

const MusicLayout = ({ children }: MusicLayoutProps) => {
	return (
		<div className="flex relative w-full h-full bg-[rgba(31,31,31,1)]">
			<SNB />
			{children}
		</div>
	);
}

export default MusicLayout;