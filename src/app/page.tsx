import { MainLogo } from "@/features/main";
import Image from "next/image";

export default function Home() {
  const image = "/assets/img/logo-transparent.png";
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <header className="w-screen h-8 flex justify-between items-center bg-neutral-800 px-2">
        <span>
          <Image src={image} alt="logo" width={24} height={24} />
        </span>
        <span>7월 29일 (월) 오후 11:11</span>
      </header>
      {/*<MainLogo />*/}
      <div className="flex-grow h-full p-3 w-full flex flex-col">
        <div className="bg-neutral-700 w-full h-8 rounded-t-xl">
          <span className="flex">
            <svg width="30" height="30" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="5" fill="red"/>
            </svg>
            <svg width="30" height="30" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="5" fill="yellow"/>
            </svg>
            <svg width="30" height="30" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="5" fill="green"/>
            </svg>
          </span>
        </div>
        <div className="bg-neutral-600 w-full flex-grow rounded-b-xl">
        </div>
      </div>
      <footer
        className="min-w-16 h-16 flex justify-between mb-3 px-1 items-center bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600">
        <div className="group mt-2 w-14 h-full flex flex-col items-center justify-between relative">
          <div
            className="absolute bottom-[74px] text-xs rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600
      after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] after:border-8 after:border-transparent after:border-t-neutral-600">
            카카오톡
          </div>
          <div className="relative w-14 h-14">
            <Image src={"/assets/img/kakaotalk.png"} alt="kakaotalk" className="rounded" layout="fill"
                   objectFit="cover"/>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3" fill="white"/>
          </svg>
        </div>
        <div className="group mt-2 w-14 h-full flex flex-col items-center justify-between relative">
          <div
            className="absolute bottom-[74px] text-xs rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600
      after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] after:border-8 after:border-transparent after:border-t-neutral-600">
            옵시디언
          </div>
          <div className="relative w-14 h-14">
            <Image src={"/assets/img/obsidian.png"} alt="kakaotalk" className="rounded" layout="fill"
                   objectFit="cover"/>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3" fill="white"/>
          </svg>
        </div>
      </footer>
    </main>
  );
}
