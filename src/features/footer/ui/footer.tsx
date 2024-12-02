"use client";

import { usePathname } from "next/navigation";
import IconItem from "./icon";
import Link from "next/link";
import React from "react";

const icons = [
	{ imageSrc: "/assets/img/osx-finder.png", label: "Home", href: "/" },
	{ imageSrc: "/assets/img/osx-memo.png", label: "Post", href: "/posts" },
	{ imageSrc: "/assets/img/osx-music.png", label: "Music", href: "/music" },
	{ imageSrc: "/assets/img/github.png", label: "Project", href: "/project" },
];

const Footer: React.FC = () => {
	const currentPath = usePathname();
	const isActive = (href: string) => {
		if (!currentPath) return false;
		if (href === "/") {
			return currentPath === href;
		}
		return currentPath.startsWith(href);
	};

	return (
		<footer className="min-w-16 h-16 flex justify-between mb-2 px-1 items-center bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600">
			{icons.map(({href, imageSrc, label}, index) => (
				<Link href={href} key={index}>
					<IconItem
						key={index}
						imageSrc={imageSrc}
						label={label}
						isActive={isActive(href)}
					/>
				</Link>
			))}
		</footer>
	);
};

export default Footer;