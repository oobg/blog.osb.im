
export default {
	searchImage,
}

function searchImage(query: string): URL {
	const url = new URL("https://www.google.com/search");
	const params = new URLSearchParams();
	params.append("q", query);
	params.append("tbm", "isch"); // 검색 결과 이미지로 제한
	params.append("tbs", "isz:i,ic:trans"); // 이미지 크기는 아이콘, 투명 배경
	url.search = params.toString();
	return url;
}