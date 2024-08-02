import React from 'react';

interface StackProps {
	children: React.ReactNode;
}

const StackTag: React.FC<StackProps> = ({ children }) => {
	return (
		<div className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs p-1 rounded-lg bg-emerald-500 text-black shadow-md">
			{children}
		</div>
	);
};

export default StackTag;