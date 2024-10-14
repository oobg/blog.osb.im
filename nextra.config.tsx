import Image from "next/image";
import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Giscus } from "@/features/giscus";

const src = "/assets/img/logo.png";

const config: DocsThemeConfig = {
	logo: (
		<>
			<Image src={src} alt={'logo'} width={24} height={24} />
			<span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        baewoong
      </span>
		</>
	),
	logoLink: "/posts",
	project: {
		link: "https://github.com/oobg/blog.osb.im",
	},
	darkMode: false,
	docsRepositoryBase: "https://github.com/oobg/blog.osb.im/src/pages/posts",
	useNextSeoProps() {
		return {
			titleTemplate: "[post] %s"
		}
	},
	nextThemes: {
		forcedTheme: "dark",
	},
	head: () => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();
		const formattedPath = asPath.replace("/posts", "");
		const url =
			`${process.env.NEXT_PUBLIC_URL}${(defaultLocale === locale ? formattedPath : `/${locale}${formattedPath}`)}`;
		return (
			<>
				<meta property="og:url" content={url} />
				<meta property="og:title" content={frontMatter.title || "baewoong's blog"} />
				<meta
					property="og:description"
					content={frontMatter.description || 'The next site builder'}
				/>
			</>
		)
	},
	search: {
		placeholder: "검색할 문구를 입력해주세요..."
	},
	editLink: {
		text: "",
		component: null,
	},
	feedback: {
		content: null
	},
	toc: {
		float: true,
		backToTop: true,
		extraContent: () => {
			return <div className="nextra-toc-hidden"></div>;
		},
		title: props => {
			const { frontMatter } = useConfig();
			return frontMatter.title;
		}
	},
	sidebar: {
		titleComponent({ title, type }) {
			if (type === "separator") {
				if (title !== "---") {
					return <span className="cursor-default">{title}</span>
				} else {
					return <hr />
				}
			}

			if (title === "programmers") {
				return <>프로그래머스</>
			}
			return <>{title}</>
		}
	},
	main: ({ children }) => {
		const { asPath } = useRouter();
		const isSegmentFirst = asPath.split("/").length === 2;

		useEffect(() => {
			const contentElement = document.querySelector("article.nextra-content");
			if (contentElement) {
				contentElement.scrollTo({
					top: 0,
					left: 0,
					behavior: "auto",
				});
			}
		}, [asPath]);

		return (
			<>
				{children}
				{!isSegmentFirst && <Giscus />}
			</>
		)
	}
}

export default config;
