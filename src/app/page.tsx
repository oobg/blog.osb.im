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
        haha
      </div>
      <footer className="fixed bottom-0 left-50 min-w-16 h-14 flex justify-between pt-1 items-center bg-amber-600">
        <span className="w-16 h-full flex flex-col items-center justify-between">
          <Image src={"/assets/img/kakaotalk.webp"} alt="kakaotalk" width={40} height={40}/>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3" fill="white"/>
          </svg>
        </span>
        <span className="w-16 h-full flex flex-col items-center justify-between">
          <Image src={"/assets/img/obsidian.avif"} alt="obsidian" width={40} height={40}/>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3" fill="white"/>
          </svg>
        </span>
      </footer>
    </main>
  );
}
