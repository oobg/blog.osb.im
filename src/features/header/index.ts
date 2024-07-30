import dynamic from 'next/dynamic';

const Header = dynamic(() => import("./ui/header"));
const HomeButton = dynamic(() => import("./ui/home"));

export {
	Header,
	HomeButton,
};