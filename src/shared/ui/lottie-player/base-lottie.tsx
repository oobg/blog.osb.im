"use client";

import React from "react"
import Lottie from "react-lottie-player"

interface BaseLottieProps {
	animationData: JSON;
	width?: number | string;
	height?: number | string;
	className?: string;
}

const baseLottie: React.FC<BaseLottieProps> = ({
	animationData,
	width = "100%",
	height = "100%",
	className = "",
}) => {
	return (
		<Lottie
			loop
			animationData={animationData}
			play
			style={{ width, height }}
			className={className}
		/>
	)
}

export default baseLottie;