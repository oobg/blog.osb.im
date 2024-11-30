import dynamic from "next/dynamic";

const Logo = dynamic(() => import("./ui/Logo"));
const MusicGrid = dynamic(() => import("./ui/MusicGrid"));
const MusicGridCellAlbum = dynamic(() => import("./ui/MusicGridCellAlbum"));
const SNB = dynamic(() => import("./ui/SNB"));
const SNBItem = dynamic(() => import("./ui/SNBItem"));

export {
	Logo,
	MusicGrid,
	MusicGridCellAlbum,
	SNB,
	SNBItem,
};