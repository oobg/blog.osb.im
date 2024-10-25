import dynamic from 'next/dynamic';

const GoogleAdSense = dynamic(() => import("@/features/googleManager/ui/ADSense"));
const TagManager = dynamic(() => import("@/features/googleManager/ui/tagManager"));
const AnalyticsManager = dynamic(() => import("@/features/googleManager/ui/analyticsManager"));

export {
	GoogleAdSense,
	TagManager,
	AnalyticsManager,
};