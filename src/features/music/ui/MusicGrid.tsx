import React from "react";

interface MusicGridProps {
	children: React.ReactNode;
}

const MusicGrid = ({ children }: MusicGridProps) => {
	return (
		<div className="
			grid gap-5
			grid-cols-2
			sm:grid-cols-2
			md:grid-cols-3
			lg:grid-cols-4
			xl:grid-cols-5
			2xl:grid-cols-7
			place-items-stretch
		">
			{children}
		</div>
	)
}

export default MusicGrid;