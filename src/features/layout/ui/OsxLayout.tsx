import React from "react";

import { Header } from "@/features/header";
import { MainWindow } from "@/features/main";
import { Footer } from "@/features/footer";

interface WindowControlsProps {
	children?: React.ReactNode;
}

const OsxLayout: React.FC<WindowControlsProps> = ({ children }) => {
	return (
		<div className="flex flex-col items-center justify-between w-dvw h-dvh text-white bg-[#2E2E2E]">
			<Header />
			<MainWindow>
				{children}
			</MainWindow>
			<Footer />
		</div>
	);
}

export default OsxLayout;