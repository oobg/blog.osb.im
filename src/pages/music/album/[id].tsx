import { useRouter } from "next/router";
import { MusicLayout } from "@/features/music";
import { FlexColBox } from "@/shared/ui/common/FlexBox";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import type { AlbumData } from "@/features/music/lib/types";

export default function Page() {
	const router = useRouter();
	const { id } = router.query;

	const title = "앨범정보";

	const [data, setData] = useState<AlbumData | null>(null); // 서버에서 가져온 데이터 저장
	const [loading, setLoading] = useState(true); // 로딩 상태

	const fetchData = async () => {
		if (!id) return;

		try {
			const url = `/api/music/album`;
			const config = { params: { id } };
			const response = await axios.get(url, config);
			setData(response.data);
		} catch (error) {
			console.error("Failed to fetch album data:", error);
		} finally {
			setLoading(false);
		}
	};

	// 데이터 가져오기
	useEffect(() => {
		setLoading(true);
		setData(null);
		fetchData();
	}, [id]);

	if (loading) {
		return (
			<MusicLayout title={title}>
				<p className="text-white text-center">Loading...</p>
			</MusicLayout>
		);
	}

	if (!data) {
		return (
			<MusicLayout title={title}>
				<p className="text-white text-center">Album not found.</p>
			</MusicLayout>
		);
	}

	return (
		<MusicLayout title={title}>
			<article className="flex flex-col gap-8 justify-start items-center w-full h-full px-5">
				<FlexColBox className={"sm:flex-row gap-5 justify-center items-center"}>
					<Image
						src={"/assets/img/music/" + data.imgSrc}
						alt={data.imgAlt ?? ""}
						width={270}
						height={270}
						className={"rounded-lg object-contain"}
					/>
					<FlexColBox className={"justify-center flex-1 gap-1"}>
						<h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">{data.album.title}</h2>
						<p className={"text-xl sm:text-2xl md:text-3xl"}>{data.album.description}</p>
						<p className={"sm:text-xl text-gray-400"}>{data.album.kind}</p>
					</FlexColBox>
				</FlexColBox>
				<table className={"w-full table-fixed"}>
					<tbody>
					{data.tracks.map((track: { title: string; duration: string }, index: number) => (
						<tr key={index} className={"odd:bg-[rgb(42,42,42)] hover:bg-[rgb(55,55,55)] h-12"}>
							<td className={"text-center w-14 rounded-l-md"}>{index + 1}</td>
							<td className={"text-left flex-1 w-full"}>{track.title}</td>
							<td className={"text-center w-20 rounded-r-md"}>{track.duration}</td>
						</tr>
					))}
					</tbody>
				</table>
			</article>
		</MusicLayout>
	);
}