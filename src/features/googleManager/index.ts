import dynamic from 'next/dynamic';

const TagManager = dynamic(() => import("@/features/googleManager/ui/tagManager"));
const AnalyticsManager = dynamic(() => import("@/features/googleManager/ui/analyticsManager"));


export {
	TagManager,
	AnalyticsManager,
};