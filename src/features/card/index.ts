import dynamic from 'next/dynamic';

const CardList = dynamic(() => import("@/features/card/ui/list"));

export {
	CardList,
};