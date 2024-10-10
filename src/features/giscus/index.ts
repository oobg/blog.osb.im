import dynamic from 'next/dynamic';

const Giscus = dynamic(() => import("./ui/giscus"));

export {
	Giscus,
};