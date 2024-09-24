"use client";

import React, { useState } from "react";
import MacButton from "@/shared/ui/macButton/icon";
import HoverIcons from "@/shared/ui/macButton/iconData";

interface WindowControlsProps {
	children?: React.ReactNode;
}

const WindowControls: React.FC<WindowControlsProps> = ({ children }) => {
	// 각 버튼의 호버 상태를 관리하는 state
	const [isHovered, setHovered] = useState<boolean>(false);

	return (
		<>
			{HoverIcons.map((icon, index) => (
				<MacButton
					key={index}
					normalSrc={icon.normalSrc}
					hoverSrc={icon.hoverSrc}
					alt={icon.alt}
					ariaLabel={icon.ariaLabel}
					isHovered={isHovered}
					onHover={() => setHovered(true)}
					onLeave={() => setHovered(false)}
				/>
			))}
		</>
	);
}

export default WindowControls;