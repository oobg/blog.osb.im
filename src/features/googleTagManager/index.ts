import dynamic from 'next/dynamic';

const TagManager = dynamic(() => import("@/features/googleTagManager/ui/gTagManager"));

export {
	TagManager,
};