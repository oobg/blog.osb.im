import React from 'react';
import IconSvg from "@/shared/ui/macButton/icon";

interface WindowControlsProps {
	children?: React.ReactNode;
}

const WindowControls: React.FC<WindowControlsProps> = ({ children }) => {
	return (
		<div className="flex flex-col flex-grow h-full p-3 w-full">
			<div className="bg-neutral-700 w-full h-8 rounded-t-xl flex items-center px-3">
        <span className="flex space-x-2">
          <IconSvg color="red" />
          <IconSvg color="yellow" />
          <IconSvg color="green" />
        </span>
			</div>
			<div className="bg-neutral-600 w-full flex-grow rounded-b-xl">
				{children}
			</div>
		</div>
	);
}

export default WindowControls;