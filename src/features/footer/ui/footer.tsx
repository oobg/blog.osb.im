import IconItem from "./icon";
import Link from "next/link";

const icons = [
	{ imageSrc: "/assets/img/osx-finder.png", label: "Home", href: "/" },
	{ imageSrc: "/assets/img/osx-memo.png", label: "Post", href: "/posts" },
	{ imageSrc: "/assets/img/github.png", label: "Project", href: "/project" },
];

const Footer: React.FC = () => {
	return (
		<footer className="min-w-16 h-16 flex justify-between mb-2 px-1 items-center bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600">
			{icons.map(({href, imageSrc, label}, index) => (
				<Link href={href} key={index}>
					<IconItem key={index} imageSrc={imageSrc} label={label} />
				</Link>
			))}
		</footer>
	);
};

export default Footer;