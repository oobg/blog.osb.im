import IconItem from "./icon";

const icons = [
	{ imageSrc: "/assets/img/kakaotalk.png", label: "카카오톡" },
	{ imageSrc: "/assets/img/obsidian.png", label: "옵시디언" },
	// 필요한 만큼 더 추가하세요
];

const Footer: React.FC = () => {
	return (
		<footer className="min-w-16 h-16 flex justify-between mb-3 px-1 items-center bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600">
			{icons.map((icon, index) => (
				<IconItem key={index} imageSrc={icon.imageSrc} label={icon.label} />
			))}
		</footer>
	);
};

export default Footer;