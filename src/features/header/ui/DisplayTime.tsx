"use client";

import { useState, useEffect } from "react";

const DisplayTime: React.FC = () => {
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const now = new Date();
		const seconds = now.getSeconds();
		const delay = (60 - seconds) * 1000;

		const initialTimeout = setTimeout(() => {
			setDateTime(new Date());
			const interval = setInterval(() => {
				setDateTime(new Date());
			}, 60000);

			return () => clearInterval(interval);
		}, delay);

		return () => clearTimeout(initialTimeout);
	}, []);

	const formattedDateTime = dateTime.toLocaleDateString("ko-KR", {
		month: "long",
		day: "numeric",
		weekday: "short",
		hour: "numeric",
		minute: "2-digit",
	});

	return <span>{formattedDateTime}</span>;
};

export default DisplayTime;