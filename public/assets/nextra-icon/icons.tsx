import Image from "next/image";
import { memo, NamedExoticComponent } from "react";

interface NextraIconProps {
	name: string;
	extension?: string;
	width?: number;
	height?: number;
}

const srcPrefix: string = "/assets/nextra-icon/";

const NextraIcon: NamedExoticComponent<NextraIconProps> =
	memo(({
    name,
    extension = "png",
    width = 24,
    height = 24,
  }: NextraIconProps) => {
	return (
		<Image
			src={`${srcPrefix}${name}.${extension}`}
			alt={`${name} icon`}
			width={width}
			height={height}
		/>
	);
});

export default NextraIcon;
