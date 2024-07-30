import Image from "next/image";

const Header: React.FC = () => {
	const imageSrc = "/assets/img/logo-transparent.png"; // 이미지 경로 설정
	const altText = "logo";

	const dateTime = new Date();
	const formattedDateTime = dateTime.toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "short",
	}) + ` (${["일", "월", "화", "수", "목", "금", "토"][dateTime.getDay()]}) ` + dateTime.toLocaleTimeString("ko-KR", {
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<header className="w-screen h-8 flex justify-between items-center bg-neutral-800 px-2">
      <span>
        <Image src={imageSrc} alt={altText} width={24} height={24} />
      </span>
			<span>{formattedDateTime}</span>
		</header>
	);
};

export default Header;