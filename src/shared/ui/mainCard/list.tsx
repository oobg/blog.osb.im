import React from "react";

interface CardListProps {
	children: React.ReactNode;
}

const CardList: React.FC<CardListProps> = ({ children }) => {
	return (
		<ul className="grid gap-5 mt-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{children}
		</ul>
	);
};

export default CardList;