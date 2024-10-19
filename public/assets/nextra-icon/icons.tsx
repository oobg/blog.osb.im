import Image from "next/image";
import { memo, NamedExoticComponent } from "react";

interface NextraIconProps {
	name: string;
	extension?: string;
}

const srcPrefix: string = "/assets/nextra-icon/";

const NextraIcon: NamedExoticComponent<NextraIconProps> =
	memo(({ name, extension = "png" }: NextraIconProps) => {
	return (
		<Image
			src={`${srcPrefix}${name}.${extension}`}
			alt={`${name} icon`}
			width={24}
			height={24}
		/>
	);
});

export default NextraIcon;
