import React from "react";
import WindowControls from "@/features/main/ui/WindowControls";

interface WindowControlsProps {
	children?: React.ReactNode;
}

const WindowLayout: React.FC<WindowControlsProps> = ({ children }) => {
	return (
		<div className="flex flex-col flex-grow w-full h-full p-3">
			<div className="bg-neutral-700 w-full h-8 rounded-t-xl flex items-center px-3">
        <span className="flex space-x-2">
					<WindowControls />
        </span>
			</div>
			<main className="flex flex-grow justify-center bg-neutral-600 overflow-auto rounded-b-xl max-h-[calc(100vh-10rem)]">
				<div className="w-[90%] sm:w-[80%] md:w-[75%]">
					{children}
				</div>
			</main>
		</div>
	);
}

export default WindowLayout;