const cursorDefault = (children: React.ReactNode) => {
  return <span className="cursor-default">{children}</span>;
}

export default {
  "*": {
    theme: {
      pagination: false,
      toc: true,
    }
  },
  index: {
    title: "시작하기",
    type: "page",
  },
  separator1: {
    title: cursorDefault("웹 개발"),
    type: "separator",
  },
  nodejs: "Node.js",
  css: "CSS",
  separator2: {
    title: cursorDefault("서버"),
    type: "separator",
  },
  docker: "Docker",
  separator3: {
    title: cursorDefault("알고리즘"),
    type: "separator",
  },
  programmers: "프로그래머스",
  separator4: {
    title: cursorDefault("기타"),
    type: "separator",
  },
  interview: "기술 면접",
  exception: "예외 처리",
  "yh-2024": "윤하 2024",
}