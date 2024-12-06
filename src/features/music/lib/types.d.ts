interface AlbumList {
	title: string;
	description: string;
	kind: string;
	imgSrc: string;
	imgAlt: string;
}

interface AlbumData {
	id: string;
	album: { title: string; description: string; kind: string, date: string };
	imgSrc: string;
	imgAlt: string;
	tracks: { title: string; duration: string }[];
}

export {
	AlbumList,
	AlbumData,
};