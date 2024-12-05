import { useEffect } from "react";
import { useRouter } from "next/router";

interface UseSNBCloseProps {
	open: boolean; // 사이드바 열림 여부
	onClose: () => void; // 닫기 콜백
}

const useSNBClose = ({ open, onClose }: UseSNBCloseProps) => {
	const router = useRouter();

	useEffect(() => {
		// 1. 중단점 감지 (sm 이하에서 onClose 호출)
		const mediaQuery = window.matchMedia("(min-width: 640px)");

		const handleBreakpointChange = (e: MediaQueryListEvent) => {
			if (e.matches && open) {
				onClose(); // sm 이상으로 진입 시 닫기 처리
			}
		};

		mediaQuery.addEventListener("change", handleBreakpointChange);

		// 2. 라우터 이동 감지
		const handleRouteChange = () => {
			if (open) {
				setTimeout(() => onClose(), 100); // 페이지 이동 시 닫기 처리
			}
		};

		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			// 이벤트 리스너 정리
			mediaQuery.removeEventListener("change", handleBreakpointChange);
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [open, onClose, router.events]);
};

export default useSNBClose;