import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { name } = req.query;
	const result = album.find((item) => item.id === name);
	if (result) {
		res.status(200).json(result);
	} else {
		res.status(404).json({ message: "Not Found" });
	}
}

const album = [
	{
		id: "growth-theory-repackage",
		album: {
			title: "GROWTH THEORY : FINAL EDITION",
			description: "YOUNHA 7th Album",
			kind: "Studio Album Repackage",
		},
		imgSrc: "7th-GROWTH THEORY-Repackage.jpg",
		imgAlt: "GROWTH THEORY : FINAL EDITION Album Cover",
		tracks: [
			{ title: "죽음의 나선", duration: "3:56" },
			{ title: "맹그로브", duration: "2:59" },
			{ title: "은화", duration: "2:44" },
			{ title: "퀘이사", duration: "3:01" },
			{ title: "코리올리 힘", duration: "3:05" },
			{ title: "태양물고기", duration: "3:38" },
			{ title: "로켓방정식의 저주", duration: "2:53" },
			{ title: "포인트 니모", duration: "3:24" },
			{ title: "케이프 혼", duration: "3:29" },
			{ title: "라이프리뷰", duration: "3:10" },
			{ title: "구름의 그림자", duration: "3:27" },
			{ title: "새녘바람", duration: "2:57" },
			{ title: "기특해", duration: "3:49" },
		],
	},
	{
		id: "growth-theory",
		album: {
			title: "GROWTH THEORY",
			description: "YOUNHA 7th Album",
			kind: "Studio Album",
		},
		imgSrc: "7th-GROWTH THEORY.jpg",
		imgAlt: "GROWTH THEORY Album Cover",
		tracks: [
			{ title: "맹그로브", duration: "2:59" },
			{ title: "죽음의 나선", duration: "3:56" },
			{ title: "케이프 혼", duration: "3:29" },
			{ title: "은화", duration: "2:44" },
			{ title: "로켓방정식의 저주", duration: "2:53" },
			{ title: "태양물고기", duration: "3:38" },
			{ title: "코리올리 힘", duration: "3:05" },
			{ title: "라이프리뷰", duration: "3:10" },
			{ title: "구름의 그림자", duration: "3:27" },
			{ title: "새녘바람", duration: "2:57" },
		],
	},
	{
		id: "end-theory-repackage",
		album: {
			title: "END THEORY : FINAL EDITION",
			description: "YOUNHA 6th Album",
			kind: "Studio Album Repackage",
		},
		imgSrc: "6th-END THEORY-Repackage.jpg",
		imgAlt: "END THEORY : FINAL EDITION Album Cover",
		tracks: [
			{ title: "오르트구름", duration: "3:26" },
			{ title: "살별", duration: "3:15" },
			{ title: "물의 여행", duration: "2:54" },
			{ title: "반짝, 빛을 내", duration: "3:29" },
			{ title: "6년 230일", duration: "3:28" },
			{ title: "P.R.R.W.", duration: "3:14" },
			{ title: "나는 계획이 있다", duration: "3:20" },
			{ title: "Truly", duration: "3:35" },
			{ title: "별의 조각", duration: "3:50" },
			{ title: "하나의 달", duration: "4:41" },
			{ title: "사건의 지평선", duration: "5:00" },
			{ title: "Black hole", duration: "3:08" },
			{ title: "Savior", duration: "3:34" },
			{ title: "잘 지내", duration: "4:06" },
		],
	},
	{
		id: "end-theory",
		album: {
			title: "END THEORY",
			description: "YOUNHA 6th Album",
			kind: "Studio Album",
		},
		imgSrc: "6th-END THEORY.jpg",
		imgAlt: "END THEORY Album Cover",
		tracks: [
			{ title: "P.R.R.W.", duration: "3:14" },
			{ title: "나는 계획이 있다", duration: "3:20" },
			{ title: "오르트구름", duration: "3:26" },
			{ title: "물의 여행", duration: "2:54" },
			{ title: "잘 지내", duration: "4:05" },
			{ title: "반짝, 빛을 내", duration: "3:29" },
			{ title: "6년 230일", duration: "3:28" },
			{ title: "Truly", duration: "3:35" },
			{ title: "별의 조각", duration: "3:50" },
			{ title: "하나의 달", duration: "4:41" },
			{ title: "Savior", duration: "3:34" },
		],
	},
	{
		id: "rescuE",
		album: {
			title: "RESCUE",
			description: "YOUNHA 5th Album",
			kind: "Studio Album",
		},
		imgSrc: "5th-RescuE.jpg",
		imgAlt: "RescuE Album Cover",
		tracks: [
			{ title: "RescuE", duration: "3:35" },
			{ title: "종이비행기 (feat. pH-1)", duration: "3:20" },
			{ title: "Parade", duration: "3:13" },
			{ title: "없던 일처럼", duration: "3:55" },
			{ title: "Airplane Mode", duration: "4:33" },
			{ title: "예지몽", duration: "3:33" },
			{ title: "Feel (feat. 챈슬러)", duration: "2:43" },
			{ title: "Drive", duration: "3:13" },
			{ title: "가", duration: "2:40" },
			{ title: "답을 찾지 못한 날", duration: "3:53" },
			{ title: "Propose", duration: "3:36" },
		],
	},
	{
		id: "unstable-mindset",
		album: {
			title: "UNSTABLE MINDSET",
			description: "YOUNHA Mini Album",
			kind: "Mini 5th Album",
		},
		imgSrc: "Mini_5th-UNSTABLE MINDSET.jpg",
		imgAlt: "UNSTABLE MINDSET Album Cover",
		tracks: [
			{ title: "Winter Flower (feat. RM)", duration: "3:41" },
			{ title: "먹구름", duration: "4:00" },
			{ title: "다음에 봐", duration: "3:18" },
			{ title: "스무살 어느 날", duration: "3:26" },
			{ title: "26", duration: "3:19" },
		],
	},
	{
		id: "stable-mindset",
		album: {
			title: "STABLE MINDSET",
			description: "YOUNHA Mini Album",
			kind: "Mini 4th Album",
		},
		imgSrc: "Mini_4th-STABLE MINDSET.jpg",
		imgAlt: "STABLE MINDSET Album Cover",
		tracks: [
			{ title: "사계", duration: "3:12" },
			{ title: "Lonely", duration: "2:53" },
			{ title: "비가 내리는 날에는", duration: "3:32" },
			{ title: "어려운 일", duration: "3:35" },
			{ title: "Rainy Night", duration: "3:56" },
		],
	},
]