import React from 'react';

interface cardContentProps {
	title: string;
	description: string;
}

const CardContent: React.FC<cardContentProps> = ({ title, description }) => {
	return (
		<>
			<h1
				className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100 overflow-hidden text-ellipsis whitespace-nowrap">
				{title}
			</h1>
			<pre
				className="block font-sans text-base antialiased font-light leading-relaxed text-gray-200 overflow-hidden h-20"
				style={{
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					WebkitLineClamp: 3,
					whiteSpace: 'normal'
				}}>
        {description}
      </pre>
		</>
	);
};

export default CardContent;