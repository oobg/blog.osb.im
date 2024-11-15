import React from "react";

interface BlueTextProps {
	children: React.ReactNode;
}

const BlueText: React.FC<BlueTextProps> = ({ children }) => {
	return (
		<strong className="text-blue-400 font-bold">
			{children}
		</strong>
	);
};

export default BlueText;