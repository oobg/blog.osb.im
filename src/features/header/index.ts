import dynamic from 'next/dynamic';

const HomeButton = dynamic(() => import("./ui/home"));

export {
	HomeButton,
};