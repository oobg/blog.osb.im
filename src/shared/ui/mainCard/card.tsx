import React from "react";

interface CardProps {
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<li className="relative flex flex-col text-gray-300 bg-neutral-700 shadow-md bg-clip-border rounded-xl transition-transform transform hover:scale-105">
			{children}
		</li>
	);
};

export default Card;