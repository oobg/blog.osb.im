import React from "react";

interface BadgeProps {
	color?: string;
	children: React.ReactNode;
}

const Badge = ({ color = "purple", children }: BadgeProps) => {
	return (
		<span className={`
			bg-${color}-100 text-${color}-800
			dark:text-${color}-400 border border-${color}-400
			rounded dark:bg-gray-700 text-xs font-medium px-2
		`}>{children}</span>
	);
}

export default Badge;