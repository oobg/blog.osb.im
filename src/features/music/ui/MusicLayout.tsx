import React from "react";
import { SNB } from "@/features/music";

interface MusicLayoutProps {
	title: string;
	children: React.ReactNode;
}

const MusicLayout = ({ title, children }: MusicLayoutProps) => {
	return (
		<div className="flex relative w-full h-full bg-[rgba(31,31,31,1)]">
			<SNB />
			<div className="flex flex-col flex-1 py-6 gap-4 overflow-hidden">
				<h1 className="text-white text-3xl font-bold mx-6">{title}</h1>
				<hr className="border border-[#2E2E2E] mx-6" />
				<div className="flex-1 overflow-y-auto px-6">
					{children}
				</div>
			</div>
		</div>
	);
};

export default MusicLayout;