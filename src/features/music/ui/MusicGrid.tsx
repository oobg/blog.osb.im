import React from "react";

interface MusicGridProps {
	children: React.ReactNode;
}

const MusicGrid = ({ children }: MusicGridProps) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
			{children}
		</div>
	)
}

export default MusicGrid;