import type { NextApiRequest, NextApiResponse } from "next";
import type { AlbumData } from "@/features/music/lib/types";
import albumData from "@/features/music/model/albumData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;
	const result = albumData.find((item: AlbumData) => item.id === id);
	if (result) {
		res.status(200).json(result);
	} else {
		res.status(404).json({ message: "Not Found" });
	}
}