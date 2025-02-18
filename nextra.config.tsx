import Image from "next/image";
import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Giscus } from "@/features/giscus";

const src = "/assets/img/logo.png";

const backToTop = () => {
	const contentElement = document.querySelector("article.nextra-content");
	if (contentElement) {
		contentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto",
		});
	}
}

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
	docsRepositoryBase: "https://github.com/oobg/blog.osb.im/src/pages/posts",
	darkMode: false,
	nextThemes: {
		forcedTheme: "dark",
	},
	backgroundColor: {
		dark: "#000000",
	},
	head: () => {
		const { asPath } = useRouter();
		const { frontMatter } = useConfig();

		const url = asPath;
		const title = `[post] ${frontMatter.title} | ${frontMatter.tags[0]}` || "baewoong's blog";
		const description = frontMatter.description || 'baewoong 의 블로그 입니다!';
		const image = frontMatter.image || "/assets/img/logo-3d.png";

		return (
			<>
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta name="description" content={description}/>
				<meta property="og:url" content={url}/>
				<meta property="og:title" content={title}/>
				<meta property="og:description" content={description}/>
				<meta property="og:image" content={image}/>
				<meta property="og:type" content="article"/>
				<meta property="og:site_name" content="baewoong's blog"/>
			</>
		)
	},
	search: {
		placeholder: "검색할 문구를 입력해주세요..."
	},
	editLink: {
		content: "",
		component: null,
	},
	feedback: {
		content: null
	},
	toc: {
		float: true,
		title: props => {
			const { frontMatter } = useConfig();
			return frontMatter.title;
		},
		backToTop: () => {
			return (
				<a href="#" onClick={() => backToTop()}>
					Back to top
				</a>
			);
		}
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
		autoCollapse: true,
	},
	main: ({ children }) => {
		const { asPath } = useRouter();
		const hideGiscus = /^\/posts(\/[^/]+)?$/.test(asPath);

		useEffect(() => backToTop(), [asPath]);

		return (
			<>
				{children}
				{!hideGiscus && <Giscus />}
			</>
		);
	},
}

export default config;
