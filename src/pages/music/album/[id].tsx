import { useRouter } from "next/router";
import { MusicLayout } from "@/features/music";
import { FlexColBox } from "@/shared/ui/common/FlexBox";
import Image from "next/image";
import React, { useEffect } from "react";
import useRenderAlbum from "@/features/music/lib/useRenderAlbum";

export default function Page() {
	const router = useRouter();
	const { id } = router.query;
	const { data, loading } = useRenderAlbum(id as string);

	const title = "앨범정보";

	const dtmArray = [
		"20", "01", "00", "20", "20", "29", "15", "17", "1E", "00", "20", "20", "0D", "01", "1D", "25", "01", "07", "00",
		"20", "20", "15", "1D", "00", "20", "20", "32", "01", "0C", "3B", "20", "20", "0F", "17", "11", "0F", "1C", "2B",
		"30", "0E", "08", "2F", "38", "39", "3C", "09", "19", "06", "20", "1C", "1E", "0A", "09", "07", "11", "0E", "00",
		"0F", "17", "15", "27", "0A", "19", "2B", "00", "03", "3D", "3A", "0A", "05", "0A", "20", "13", "2A", "02", "00"
	];

	const wordWrap = (array: string[]) => {
		const maxColSize = 20; // 최대 열 크기

		// 1. "00" 기준으로 데이터 분리
		const splitByZero = (input: string[]): string[] => {
			const currentArray: string[] = [];
			const splitResult: string[] = [];

			input.forEach(value => {
				if (value === "00") {
					splitResult.push(currentArray.length > 0 ? currentArray.join("") : "00");
					currentArray.length = 0;
				} else {
					currentArray.push(value);
				}
			});

			if (currentArray.length > 0) {
				splitResult.push(currentArray.join(""));
			}
			return splitResult;
		};

		// 2. 워드랩 처리
		const processWordWrap = (lines: string[]): string[] => {
			const wrappedResult: string[] = [];
			for (let i = 0; i < lines.length; i++) {
				const currentSize = lines[i].length / 2;
				const nextSize = i + 1 < lines.length ? lines[i + 1].length / 2 : 0;

				if (currentSize + nextSize + 1 <= maxColSize) {
					wrappedResult.push(lines[i] + "00" + lines[i + 1]);
					i++; // 다음 라인 스킵
				} else {
					while (lines[i].length > maxColSize * 2) {
						wrappedResult.push(lines[i].slice(0, maxColSize * 2));
						lines[i] = lines[i].slice(maxColSize * 2);
					}
					wrappedResult.push(lines[i]);
				}
			}
			return wrappedResult;
		};

		// 3. 결과 배열 패딩 처리
		const padLines = (lines: string[]): string[] => {
			return lines.map(line => line.padEnd(maxColSize * 2, "00"));
		};

		// 함수 호출 순서
		const splitResult = splitByZero(array); // "00"으로 나눔
		const wrappedResult = processWordWrap(splitResult); // 워드랩 처리
		const paddedResult = padLines(wrappedResult); // 패딩 처리

		// 최종 결과 출력
		console.log("Result:", paddedResult);
		return paddedResult;
	};

	useEffect(() => {
		wordWrap(dtmArray);
	}, []);

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