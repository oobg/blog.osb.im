import React from "react";
import WindowControls from "@/features/main/ui/WindowControls";

interface WindowControlsProps {
	children?: React.ReactNode;
}

const WindowLayout: React.FC<WindowControlsProps> = ({ children }) => {
	return (
		<div className="flex flex-col p-1 relative w-full h-full">
			<div className="bg-neutral-700 w-full h-8 rounded-t-xl flex items-center px-3">
        <span className="flex space-x-2">
					<WindowControls />
        </span>
			</div>
			<main className="flex flex-grow justify-center bg-neutral-600 overflow-auto rounded-b-xl relative h-[calc(100dvh-10rem)]">
				{children}
			</main>
		</div>
	);
}

export default WindowLayout;