import React from 'react';

interface CardProps {
	imageSrc: string;
	imageAlt?: string;
	title: string;
	description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt = "card-image", title, description }) => {
	return (
		<li className="relative flex flex-col text-gray-300 bg-neutral-700 shadow-md bg-clip-border rounded-xl transition-transform transform hover:-translate-y-2">
			<div className="relative m-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-neutral-800 shadow-neutral-800/40">
				<img
					src={imageSrc}
					alt={imageAlt}
					className="rounded-xl object-cover h-full w-full"
				/>
			</div>
			<div className="p-4">
				<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
					{title}
				</h5>
				<pre className="block font-sans text-base antialiased font-light leading-relaxed text-gray-400 text-wrap">
          {description}
        </pre>
			</div>
			<div className="p-6 pt-2">
				<button
					className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-neutral-900 text-white shadow-md shadow-neutral-900/10 hover:shadow-lg hover:shadow-neutral-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
					type="button">
					Read More
				</button>
			</div>
		</li>
	);
};

export default Card;