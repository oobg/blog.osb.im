import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();
	const { name } = router.query;

	return (
		<div>
			<h1>Album: {name}</h1>
		</div>
	);
}