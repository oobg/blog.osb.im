import {
	useRef,
	useImperativeHandle,
	forwardRef,
	MutableRefObject,
	ForwardedRef,
	ForwardRefExoticComponent,
	RefAttributes,
	ReactNode,
} from "react";
import YouTube from "react-youtube";
import {
	YouTubeEvent,
	YouTubePlayer,
	YouTubeProps,
} from "react-youtube";

/** YoutubePlayer 컴포넌트의 Props */
interface YoutubePlayerProps {
	videoId: string;
}

/** YoutubePlayer 컴포넌트에서 제공하는 외부 제어 메서드 타입 */
export interface YoutubePlayerHandle {
	play: () => void; // 재생 메서드
	pause: () => void; // 일시 정지 메서드
	stop: () => void; // 정지 메서드
}

/** ForwardRefExoticComponent 타입 추출 */
export type TYoutubePlayer = ForwardRefExoticComponent<
	YoutubePlayerProps & RefAttributes<YoutubePlayerHandle>
>;

const YoutubePlayer: TYoutubePlayer = forwardRef<YoutubePlayerHandle, YoutubePlayerProps>(
	({ videoId }: YoutubePlayerProps, ref: ForwardedRef<YoutubePlayerHandle>): ReactNode => {
		// YouTube Player 객체 참조
		const playerRef: MutableRefObject<YouTubePlayer | null> = useRef<YouTubePlayer | null>(null);

		// 외부에서 제어할 수 있는 메서드 정의
		useImperativeHandle(ref, (): YoutubePlayerHandle => ({
			play: (): void => {
				playerRef.current?.playVideo();
			},
			pause: (): void => {
				playerRef.current?.pauseVideo();
			},
			stop: (): void => {
				playerRef.current?.stopVideo();
			},
		}));

		// YouTube Player 준비 이벤트 핸들러
		const onPlayerReady: YouTubeProps["onReady"] = (event: YouTubeEvent): void => {
			playerRef.current = event.target; // Player 객체 저장
		};

		// YouTube Player 옵션
		const opts: YouTubeProps["opts"] = {
			height: "0",
			width: "0",
			playerVars: {
				rel: 0, // 관련 동영상 표시 금지
				autoplay: 0, // 자동 재생 금지
				modestbranding: 1, // 로고 표시 금지
			},
		};

		return (
			<YouTube
				videoId={videoId}
				opts={opts}
				onReady={onPlayerReady}
				className="absolute"
			/>
		);
	}
);

YoutubePlayer.displayName = "YoutubePlayer";

export default YoutubePlayer;
