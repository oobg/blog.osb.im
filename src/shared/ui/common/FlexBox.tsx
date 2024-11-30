import React from "react";

interface FlexColBoxProps {
	children: React.ReactNode;
	className?: string;
}

const FlexColBox = ({ children, className = "" }: FlexColBoxProps) => {
	return (
		<div className={`flex flex-col w-full ${className}`}>
			{children}
		</div>
	);
}

const FlexRowBox = ({ children, className = "" }: FlexColBoxProps) => {
	return (
		<div className={`flex flex-row h-full ${className}`}>
			{children}
		</div>
	);
}

export {
	FlexColBox,
	FlexRowBox,
}