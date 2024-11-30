import React from "react";
import { Logo, SNBItem } from "@/features/music";
import { FlexColBox } from "@/shared/ui/common/FlexBox";
import Badge from "@/shared/ui/common/Badge";

const SNB = () => {
	return (
		<aside
			className="
        w-0 sm:w-48 md:w-52 lg:w-72 h-full bg-[rgba(35,35,36,1)]
        transform -translate-x-full sm:translate-x-0
        transition-all duration-500 ease-in-out
        hidden sm:flex flex-col items-start gap-5
        p-4 overflow-x-hidden overflow-y-auto
      "
		>
			<Logo/>
			<input
				name="query"
				type="text"
				placeholder="Search"
				className="w-full h-8 bg-[#3F3F3F] text-white border border-[#8F8F8F] rounded-lg px-2"
			/>
			<FlexColBox className="gap-2">
				<SNBItem href="/music" imageName="home">홈</SNBItem>
			</FlexColBox>
			<FlexColBox>
				<div className="text-xs text-gray-400 px-1">앨범</div>
				<FlexColBox className="gap-2">
					<SNBItem href="/music/album/growth-theory-re" imageName="lullaby">
						<Badge color="pink">7th</Badge>
						Growth Theory
						<Badge color="purple">RE</Badge>
					</SNBItem>
					<SNBItem href="/music/album/growth-theory" imageName="lullaby">
						<Badge color="pink">7th</Badge>
						Growth Theory
					</SNBItem>
					<SNBItem href="/music/album/end-theory-re" imageName="lullaby">
						<Badge color="pink">6th</Badge>
						End Theory
						<Badge color="purple">RE</Badge>
					</SNBItem>
					<SNBItem href="/music/album/end-theory" imageName="lullaby">
						<Badge color="pink">6th</Badge>
						End Theory
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
	)
}

export default SNB;