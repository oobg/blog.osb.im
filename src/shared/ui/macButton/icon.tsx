import React from 'react';

interface IconProps {
	color: string;
}

const Icon: React.FC<IconProps> = ({ color }) => (
	<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
		<circle cx="6" cy="6" r="6" fill={color} />
	</svg>
);

export default Icon;