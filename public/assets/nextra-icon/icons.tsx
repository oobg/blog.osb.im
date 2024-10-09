import Image from "next/image";

interface ImageComponentProps {
	name: string;
}

const srcPrefix = "/assets/nextra-icon/";

const ImageComponent = ({ name }: ImageComponentProps) => {
	return (
		<Image src={srcPrefix + name + ".png"} alt={name + " icon"} width={24} height={24} />
	);
}

const IconNodeJS = () => {
	return <ImageComponent name="nodejs" />;
};

const IconProgrammers = () => {
	return <ImageComponent name="programmers" />;
}

export {
	IconNodeJS,
	IconProgrammers,
};