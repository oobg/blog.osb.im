import dynamic from 'next/dynamic';

const MainWindow = dynamic(() => import("./ui/WindowLayout"));

export {
	MainWindow,
};