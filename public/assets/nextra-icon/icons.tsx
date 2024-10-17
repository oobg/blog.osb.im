import Image from "next/image";

interface ImageComponentProps {
	name: string;
	extension?: string;
}

const srcPrefix = "/assets/nextra-icon/";

const ImageComponent = ({ name, extension = "png" }: ImageComponentProps) => {
	return (
		<Image src={srcPrefix + name + "." + extension} alt={name + " icon"} width={24} height={24} />
	);
}

const IconNodeJS = () => {
	return <ImageComponent name="nodejs" />;
};

const IconDocker = () => {
	return <ImageComponent name="docker" extension="webp" />;
}

const IconProgrammers = () => {
	return <ImageComponent name="programmers" />;
}

const IconText = () => {
	return <ImageComponent name="text" />;
}

const IconCode = () => {
	return <ImageComponent name="code" />;
}

export {
	IconNodeJS,
	IconDocker,
	IconProgrammers,
	IconText,
	IconCode,
};