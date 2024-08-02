import React from 'react';

interface ALinkProps {
	href: string;
	children: React.ReactNode;
}

const ALink: React.FC<ALinkProps> = ({ href, children }) => {
	return (
		<a
			href={href}
			target="_blank"
			className="
				align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-4 rounded-lg bg-neutral-900 text-white shadow-md shadow-neutral-900/10
				hover:shadow-lg hover:shadow-neutral-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none
			"
		>
			{children}
		</a>
	);
};

export default ALink;