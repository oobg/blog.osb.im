import Image from "next/image";
import DisplayTime from "./DisplayTime";

const Header: React.FC = () => {
	const imageSrc = "/assets/img/logo-transparent.png"; // 이미지 경로 설정
	const altText = "logo";

	return (
		<header className="w-screen h-8 flex justify-between items-center bg-neutral-800 px-2">
      <span>
        <Image src={imageSrc} alt={altText} width={24} height={24} />
      </span>
			<DisplayTime />
		</header>
	);
};

export default Header;