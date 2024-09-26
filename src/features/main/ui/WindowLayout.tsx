import React from "react";
import WindowControls from "@/features/main/ui/WindowControls";

interface WindowControlsProps {
	children?: React.ReactNode;
}

const WindowLayout: React.FC<WindowControlsProps> = ({ children }) => {
	return (
		<div className="flex flex-col flex-grow w-full h-full p-1">
			<div className="bg-neutral-700 w-full h-8 rounded-t-xl flex items-center px-3">
        <span className="flex space-x-2">
					<WindowControls />
        </span>
			</div>
			<main className="flex flex-grow justify-center bg-neutral-600 overflow-auto rounded-b-xl relative max-h-full">
				{children}
			</main>
		</div>
	);
}

export default WindowLayout;