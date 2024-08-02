interface CardData {
	imageSrc: string;
	imageAlt: string;
	title: string;
	description: string;
	stack: string[];
	gitLink: string;
	readLink: string;
	goToLink: string;
}

const dataList: CardData[] = [
	{
		imageSrc: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "기술 블로그 개발 배너 이미지",
		title: "기술 블로그",
		description: "기술 블로그를 구축했습니다.",
		stack: ["Next.js", "Tailwind CSS"],
		gitLink: "https://github.com/oobg/blog.osb.im",
		readLink: "#",
		goToLink: "#",
	},
	{
		imageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3346&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "CK Editor 5 성능개선 배너 이미지",
		title: "CK Editor 5 성능개선",
		description: "CK Editor 5 컨텐츠 입력 시, 버벅임이 발생했습니다. 옵저버 패턴을 사용하여 성능을 개선했습니다.",
		stack: ["Vue.js", "CK Editor 5"],
		gitLink: "https://github.com/oobg/editor.osb.im",
		readLink: "#",
		goToLink: "https://editor.osb.im/ckeditor/virtual-scroll",
	},
	{
		imageSrc: "https://images.unsplash.com/photo-1678257355149-6eda1755b1a2?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "개인 사이트 구축 배너 이미지",
		title: "개인 프로젝트 허브",
		description: "개발 실력의 향상을 위해 Playground 사이트를 구축했습니다.",
		stack: ["Next.js", "Tailwind CSS"],
		gitLink: "https://github.com/oobg/osb.im",
		readLink: "#",
		goToLink: "https://osb.im/",
	},
];

export default dataList;