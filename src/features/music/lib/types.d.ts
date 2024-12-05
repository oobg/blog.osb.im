interface AlbumData {
	id: string;
	album: { title: string; description: string; kind: string };
	imgSrc: string;
	imgAlt: string;
	tracks: { title: string; duration: string }[];
}

export {
	AlbumData
};