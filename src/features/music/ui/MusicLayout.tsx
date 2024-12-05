import React from "react";
import { SNB } from "@/features/music";
import { FlexRowBox } from "@/shared/ui/common/FlexBox";
import Image from "next/image";
import useSNB from "@/features/music/lib/useSNB";

interface MusicLayoutProps {
	title: string;
	children: React.ReactNode;
}

const MusicLayout = ({ title, children }: MusicLayoutProps) => {
	const imageName = "todo-list";
	const { isOpen, handleOpen, handleClose } = useSNB();

	return (
		<div className="flex relative w-full h-full bg-[rgba(31,31,31,1)]">
			<SNB open={isOpen} onClose={handleClose} />
			<div className="flex flex-col flex-1 py-6 gap-4 overflow-hidden">
				<FlexRowBox className="justify-between items-center pl-3 pr-8">
					<h1 className="text-white text-2xl sm:text-3xl font-bold mx-6">{title}</h1>
					<button
						onClick={handleOpen}
						className={"block sm:hidden"}
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
				<hr className="border border-[#2E2E2E] mx-6"/>
				<div className="flex-1 overflow-y-auto px-6">
					{children}
				</div>
			</div>
		</div>
	);
};

export default MusicLayout;