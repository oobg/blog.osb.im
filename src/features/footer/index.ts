import dynamic from 'next/dynamic';

const Footer = dynamic(() => import("./ui/footer"));

export {
	Footer,
};