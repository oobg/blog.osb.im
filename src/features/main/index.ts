import dynamic from 'next/dynamic';

const MainLogo = dynamic(() => import("./ui/logo"));

export {
	MainLogo,
};