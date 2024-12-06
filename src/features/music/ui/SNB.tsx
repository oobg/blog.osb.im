import React from "react";
import { Logo, SNBItem } from "@/features/music";
import { FlexColBox, FlexRowBox } from "@/shared/ui/common/FlexBox";
import Badge from "@/shared/ui/common/Badge";
import useSNBClose from "@/features/music/lib/useSNBClose";
import Image from "next/image";

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
				<button
					onClick={onClose}
					className={`sm:hidden`}
				>
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
			<FlexColBox>
				<div className="text-xs text-gray-400 px-1">정규앨범</div>
				<FlexColBox className="gap-2">
					<SNBItem href="/music/album/growth-theory-repackage" imageName="yacht">
						<Badge color="pink">7th</Badge>
						Growth Theory
						<Badge color="purple">RE</Badge>
					</SNBItem>
					<SNBItem href="/music/album/growth-theory" imageName="yacht">
						<Badge color="pink">7th</Badge>
						Growth Theory
					</SNBItem>
					<SNBItem href="/music/album/end-theory-repackage" imageName="rocket">
						<Badge color="pink">6th</Badge>
						End Theory
						<Badge color="purple">RE</Badge>
					</SNBItem>
					<SNBItem href="/music/album/end-theory" imageName="rocket">
						<Badge color="pink">6th</Badge>
						End Theory
					</SNBItem>
					<SNBItem href="/music/album/rescuE" imageName="mailbox-closed-flag-up">
						<Badge color="pink">5th</Badge>
						RescuE
					</SNBItem>
				</FlexColBox>
			</FlexColBox>
			<FlexColBox>
				<div className="text-xs text-gray-400 px-1">미니앨범</div>
				<FlexColBox className="gap-2">
					<SNBItem href="/music/album/unstable-mindset" imageName="lullaby">
						<Badge color="pink">5th</Badge>
						Unstable Mindset
					</SNBItem>
					<SNBItem href="/music/album/stable-mindset" imageName="lullaby">
						<Badge color="pink">4th</Badge>
						Stable Mindset
					</SNBItem>
				</FlexColBox>
			</FlexColBox>
			<FlexColBox>
				<div className="text-xs text-gray-400 px-1">응원법</div>
				<FlexColBox className="gap-2">
					<SNBItem href="/music/cheer/2024" imageName="chat">2024 연말콘</SNBItem>
				</FlexColBox>
			</FlexColBox>
		</aside>
	);
};

export default SNB;