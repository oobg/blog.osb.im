import React from "react";
import { SNB } from "@/features/music";

interface MusicLayoutProps {
	title: string;
	children: React.ReactNode;
}

const MusicLayout = ({ title, children }: MusicLayoutProps) => {
	return (
		<div className="flex relative w-full h-full bg-[rgba(31,31,31,1)]">
			<SNB/>
			<div className="flex flex-col flex-1 p-6 gap-4 overflow-y-auto">
				<h1 className="text-white text-3xl font-bold">{title}</h1>
				<hr className="border border-[#2E2E2E]"/>
				{children}
			</div>
		</div>
	);
}

export default MusicLayout;