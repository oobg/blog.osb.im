import type { AlbumSNB } from "@/features/music/lib/types";

const result: AlbumSNB[] = [
	{
		id: "정규앨범",
		items: [
			{
				href: "/music/album/growth-theory-repackage",
				imageName: "yacht",
				title: "Growth Theory",
				badgeFirst: "7th",
				badgeSecond: "RE",
			},
			{
				href: "/music/album/growth-theory",
				imageName: "yacht",
				title: "Growth Theory",
				badgeFirst: "7th",
				badgeSecond: null,
			},
			{
				href: "/music/album/end-theory-repackage",
				imageName: "rocket",
				title: "End Theory",
				badgeFirst: "6th",
				badgeSecond: "RE",
			},
			{
				href: "/music/album/end-theory",
				imageName: "rocket",
				title: "End Theory",
				badgeFirst: "6th",
				badgeSecond: null,
			},
			{
				href: "/music/album/rescuE",
				imageName: "mailbox-closed-flag-up",
				title: "RescuE",
				badgeFirst: "5th",
				badgeSecond: null,
			}
		],
	},
	{
		id: "미니앨범",
		items: [
			{
				href: "/music/album/unstable-mindset",
				imageName: "lullaby",
				title: "Unstable Mindset",
				badgeFirst: "5th",
				badgeSecond: null,
			},
			{
				href: "/music/album/stable-mindset",
				imageName: "lullaby",
				title: "Stable Mindset",
				badgeFirst: "4th",
				badgeSecond: null,
			},
		],
	}
];

export default result;

export type { AlbumSNB };