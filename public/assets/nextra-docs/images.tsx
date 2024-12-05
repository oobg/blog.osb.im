import Image from "next/image";

interface NextraIconProps {
	name: string;
	extension?: string;
}

const srcPrefix: string = "/assets/nextra-docs/";

const NextraImages = ({ name, extension = "png" }: NextraIconProps) => {
	return (
		<Image
			src={`${srcPrefix}${name}.${extension}`}
			alt={`${name} icon`}
			width={500}
			height={500}
			className={"object-contain"}
		/>
	);
};

export default NextraImages;
