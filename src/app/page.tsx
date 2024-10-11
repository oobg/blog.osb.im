import React from "react";
import BaseLottie from "@/shared/ui/lottie-player/base-lottie";
import lottieDeveloper from "@/shared/ui/lottie-player/developer.json";
import lottieArrowDown from "@/shared/ui/lottie-player/arrow-down.json";

export default function Home() {
  return (
    <div className="py-5 w-[90%] sm:w-[80%] md:w-[65%] flex flex-col justify-around">
      <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center text-center md:text-left m-0 p-0 mb-5">
        <div className="font-bold flex flex-col gap-3 w-full text-sm sm:text-base md:pl-2">
          <p>안녕하세요, 개발자 <span className="text-blue-400 text-3xl">배윤석</span> 입니다.</p>
          <p>제 <span className="text-blue-400">블로그</span>에 오신 것을 환영합니다! 🚀</p>
          <p>이곳에서는 제가 <span className="text-amber-200">배운 것</span>들을 <span className="text-cyan-400">기록</span>하고
            &nbsp;<span className="text-cyan-400">공유</span>하고 있습니다.</p>
          <p>더 나은 개발자가 되기 위한 <span className="text-emerald-400">여정</span> 속에서 <span
            className="text-emerald-400">배움</span>을 나누고 싶습니다.</p>
          <p>함께 <span className="text-emerald-400">성장하는 공간</span>이 되었으면 좋겠습니다.</p>
          <p>찾아와주셔서 감사합니다. <span className="text-xl text-amber-300">함께 도약해봐요!</span></p>
        </div>
        <div className="aspect-square max-w-[300px]">
          <BaseLottie animationData={lottieDeveloper} className="w-full h-full"/>
        </div>
      </div>
      <div className="text-gray-300 mb-5 sm:m-0">
        <p className="w-full text-center">아래 Doc 바에 있는 아이콘을 눌러보세요.</p>
        <p className="w-full text-center">다른 페이지로 넘어가실 수 있습니다.</p>
        <p className="flex justify-center">
          <BaseLottie animationData={lottieArrowDown} width={50} height={50}/>
        </p>
      </div>
    </div>
  );
}