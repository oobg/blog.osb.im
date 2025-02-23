import { useRef } from "react";
import { YouTubePlayer } from "react-youtube";

const useYoutube = () => {
	const playerRef = useRef<YouTubePlayer | null>(null);

	const handlePlay = () => {
		playerRef.current?.play();
	};

	const handlePause = () => {
		playerRef.current?.pause();
	};

	const handleStop = () => {
		playerRef.current?.stop();
	};

	return {
		playerRef,
		handlePlay,
		handlePause,
		handleStop,
	}
}

export default useYoutube;