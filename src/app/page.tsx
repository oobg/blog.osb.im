import { MainLogo } from "@/features/main";
import Image from "next/image";

export default function Home() {
  const image = "/assets/img/logo-transparent.png";
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <header className="fixed top-0 left-0 w-screen h-8 flex justify-between items-center bg-neutral-800 px-2">
        <Image src={image} alt="main logo" width={28} height={28} />
        <span>7월 29일 (월) 오후 11:11</span>
      </header>
      {/*<MainLogo />*/}
      <div>
        welcome!
      </div>
      <footer className="fixed bottom-2 left-50 min-w-16 h-16 flex justify-between pt-2 px-1 items-center bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600">
        <div className="group w-14 h-full flex flex-col items-center justify-between relative">
          <div
            className="absolute bottom-[74px] text-xs rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600
              after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] after:border-8 after:border-transparent after:border-t-neutral-600">
            카카오톡
          </div>
          <Image src={"/assets/img/kakaotalk.webp"} alt="kakaotalk" className="rounded" width={40} height={40}/>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3" fill="white"/>
          </svg>
        </div>
        <div className="group w-14 h-full flex flex-col items-center justify-between relative">
          <div
            className="absolute bottom-[74px] text-xs rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-neutral-600 bg-opacity-30 rounded-xl border border-neutral-600
              after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] after:border-8 after:border-transparent after:border-t-neutral-600">
            옵시디언
          </div>
          <Image src={"/assets/img/obsidian.avif"} alt="obsidian" className="rounded" width={40} height={40}/>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3" fill="white"/>
          </svg>
        </div>
      </footer>
    </main>
  );
}
