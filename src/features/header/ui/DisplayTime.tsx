"use client";

import { useState, useEffect } from "react";

const DisplayTime: React.FC = () => {
	const [clientTime, setClientTime] = useState<string | null>(null);

	useEffect(() => {
		const now = new Date().toISOString();
		setClientTime(now);

		const interval = setInterval(() => {
			const newTime = new Date().toISOString();
			setClientTime(newTime);
		}, 60000); // 1분마다 업데이트

		return () => clearInterval(interval); // 클린업 함수
	}, []);

	// 클라이언트에서 시간이 설정되지 않으면 null을 반환하여 초기 렌더링 시 시간 값을 서버와 비교하지 않도록 합니다.
	if (!clientTime) return null;

	const formattedDateTime = new Date(clientTime).toLocaleDateString("ko-KR", {
		month: "long",
		day: "numeric",
		weekday: "short",
		hour: "numeric",
		minute: "2-digit",
	});

	return <time dateTime={clientTime}>{formattedDateTime}</time>;
};

export default DisplayTime;