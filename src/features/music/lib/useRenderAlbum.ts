import { useCallback, useEffect, useState } from "react";
import type { AlbumData } from "@/features/music/lib/types";
import axios from "axios";

export default function useRenderAlbum(id: string) {
	const [data, setData] = useState<AlbumData | null>(null); // 서버에서 가져온 데이터 저장
	const [loading, setLoading] = useState(true); // 로딩 상태

	const fetchData = useCallback(async () => {
		if (!id) return;

		try {
			const url = `/api/music/album`;
			const config = { params: { id } };
			const response = await axios.get(url, config);
			setData(response.data);
		} catch (error) {
			console.error("Failed to fetch album data:", error);
		} finally {
			setTimeout(() => setLoading(false), 500);
		}
	}, [id]);

	// 데이터 가져오기
	useEffect(() => {
		setLoading(true);
		setData(null);
		fetchData().then();
	}, [fetchData]);

	return { data, loading };
}