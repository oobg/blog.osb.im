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
]