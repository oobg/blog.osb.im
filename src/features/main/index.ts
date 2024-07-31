import dynamic from 'next/dynamic';

const MainWindow = dynamic(() => import("./ui/WindowControls"));

export {
	MainWindow,
};