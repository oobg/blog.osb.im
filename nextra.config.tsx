import Image from "next/image";
import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

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
	docsRepositoryBase: "https://github.com/oobg/blog.osb.im/blob/main/src/pages/posts",
	useNextSeoProps() {
		return {
			titleTemplate: "[post] %s"
		}
	},
	head: () => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();
		const url =
			`${process.env.NEXT_PUBLIC_URL}${(defaultLocale === locale ? asPath : `/${locale}${asPath}`)}`;
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
	},
	feedback: {
		content: null
	},
}

export default config;
