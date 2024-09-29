"use client";

import { useState, useEffect } from "react";

const DisplayTime: React.FC = () => {
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const updateDateTime = () => setDateTime(new Date());

		const now = new Date();
		const seconds = now.getSeconds();
		const delay = (60 - seconds) * 1000;

		const initialTimeout = setTimeout(() => {
			updateDateTime(); // 초기 업데이트
			const interval = setInterval(updateDateTime, 60000); // 1분마다 업데이트

			return () => clearInterval(interval); // 클린업 함수
		}, delay);

		return () => clearTimeout(initialTimeout); // 클린업 함수
	}, []);

	const formattedDateTime = dateTime.toLocaleDateString("ko-KR", {
		month: "long",
		day: "numeric",
		weekday: "short",
		hour: "numeric",
		minute: "2-digit",
	});

	return <time dateTime={dateTime.toISOString()}>{formattedDateTime}</time>;
};

export default DisplayTime;