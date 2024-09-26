import React from "react";

import { Header } from "@/features/header";
import { MainWindow } from "@/features/main";
import { Footer } from "@/features/footer";

interface WindowControlsProps {
	children?: React.ReactNode;
}

const OsxLayout: React.FC<WindowControlsProps> = ({ children }) => {
	return (
		<div className="absolute overflow-hidden w-dvw h-dvh">
			<div className="flex flex-col items-center justify-between w-full h-full text-white bg-[#2E2E2E]">
				<Header/>
				<MainWindow>
					{children}
				</MainWindow>
				<Footer/>
			</div>
		</div>
	);
}

export default OsxLayout;