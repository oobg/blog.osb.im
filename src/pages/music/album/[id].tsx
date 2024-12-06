import { useRouter } from "next/router";
import { MusicLayout } from "@/features/music";
import { FlexColBox } from "@/shared/ui/common/FlexBox";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import type { AlbumData } from "@/features/music/lib/types";

export default function Page() {
	const router = useRouter();
	const { id } = router.query;

	const title = "앨범정보";

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

	if (loading) {
		return (
			<MusicLayout title={title}>
				<article className="flex flex-col gap-8 justify-start items-center w-full h-full px-5 animate-pulse">
					<FlexColBox className={"md:flex-row gap-5 justify-center items-center"}>
						<div className="w-[270px] h-[270px] bg-gray-700 rounded-lg"></div>
						<FlexColBox className={"justify-center flex-1 gap-1"}>
							<div className="h-8 sm:h-10 md:h-10 w-3/4 bg-gray-500 rounded"></div>
							<div className="h-6 sm:h-8 md:h-8 w-2/3 bg-gray-600 rounded"></div>
							<div className="h-4 sm:h-6 md:h-7 w-1/2 bg-gray-700 rounded"></div>
							<div className="h-4 sm:h-6 md:h-7 w-1/3 bg-gray-700 rounded"></div>
						</FlexColBox>
					</FlexColBox>
					<table className="w-full table-fixed">
						<tbody>
						{Array.from({ length: 5 }).map((_, index) => (
							<tr key={index} className="odd:bg-[rgb(42,42,42)] hover:bg-[rgb(55,55,55)] h-12">
								<td className="relative w-14 rounded-l-md">
									<div className="w-6 h-6 bg-gray-700 rounded translate-x-1/2"></div>
								</td>
								<td className="flex-1 w-full">
									<div className="h-6 w-4/5 bg-gray-700 rounded"></div>
								</td>
								<td className="relative w-20 rounded-r-md">
									<div className="h-6 w-10 bg-gray-700 rounded translate-x-1/2"></div>
								</td>
							</tr>
						))}
						</tbody>
					</table>
				</article>
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
				<FlexColBox className={"md:flex-row gap-5 justify-center items-center"}>
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
						<p className={"sm:text-lg text-gray-400"}>{data.album.date}</p>
					</FlexColBox>
				</FlexColBox>
				<table className={"w-full table-fixed"}>
					<tbody>
					{data.tracks.map((track: { title: string; duration: string }, index: number) => (
						<tr key={index} className={"odd:bg-[rgb(42,42,42)] hover:bg-[rgb(55,55,55)] h-12"}>
							<td className={"text-center w-14 rounded-l-md"}>{index + 1}</td>
							<td className={"text-left flex-1 w-full truncate"}>{track.title}</td>
							<td className={"text-center w-20 rounded-r-md"}>{track.duration}</td>
						</tr>
					))}
					</tbody>
				</table>
			</article>
		</MusicLayout>
	);
}