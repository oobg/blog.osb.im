import React from "react";
import { Logo, SNBItem } from "@/features/music";
import { FlexColBox, FlexRowBox } from "@/shared/ui/common/FlexBox";
import Badge from "@/shared/ui/common/Badge";
import useSNBClose from "@/features/music/lib/useSNBClose";
import Image from "next/image";
import albumSNB, { AlbumSNB } from "@/features/music/model/albumSNB";

interface SNBProps {
	open: boolean;
	onClose: () => void;
}

const SNB = ({ open, onClose }: SNBProps) => {
	const imageName = "delete-sign";

	useSNBClose({ open, onClose });

	return (
		<aside
			className={`
				sm:w-72 h-full bg-[rgba(35,35,36,1)]
				transform -translate-x-full sm:translate-x-0
				transition-all duration-500 ease-in-out
				flex flex-col items-start gap-5
				overflow-x-hidden overflow-y-auto sm:p-6
				${open ? "w-full" : "w-0 hidden sm:flex"}
				${open ? "translate-x-0" : ""}
				${open ? "p-6" : "p-0"}
			`}
		>
			<FlexRowBox className="relative justify-between w-full items-center h-8 pr-2">
				<Logo />
				<button onClick={onClose} className={`sm:hidden`}>
					<Image
						src={`https://img.icons8.com/ios/150/FFFFFF/${imageName}.png`}
						alt={imageName + " icon"}
						width={20}
						height={20}
						className="w-auto h-auto text-red"
					/>
				</button>
			</FlexRowBox>
			<input
				name="query"
				type="text"
				placeholder="Search"
				className="w-full min-h-8 max-h-8 bg-[#3F3F3F] text-white border border-[#8F8F8F] rounded-lg px-2"
			/>
			<FlexColBox className="gap-2">
				<SNBItem href="/music" imageName="home">홈</SNBItem>
			</FlexColBox>
			{albumSNB.map((album: AlbumSNB) => (
				<FlexColBox key={album.id}>
					<div className="text-xs text-gray-400 px-1 mb-1">{album.id}</div>
					<FlexColBox className="gap-2">
						{album.items.map((item) => (
							<SNBItem key={item.title} href={item.href} imageName={item.imageName}>
								<Badge>{item.badgeFirst}</Badge>
								{item.title}
								{item.badgeSecond && <Badge>{item.badgeSecond}</Badge>}
							</SNBItem>
						))}
					</FlexColBox>
				</FlexColBox>
			))}
			<FlexColBox>
				<div className="text-xs text-gray-400 px-1 mb-1">응원법</div>
				<FlexColBox className="gap-2">
					<SNBItem href="/music/cheer/2024" imageName="chat">2024 연말콘</SNBItem>
				</FlexColBox>
			</FlexColBox>
		</aside>
	);
};

export default SNB;