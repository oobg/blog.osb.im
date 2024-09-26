import dynamic from 'next/dynamic';

const OsxLayout = dynamic(() => import("./ui/OsxLayout"));

export {
	OsxLayout,
};