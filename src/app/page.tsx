import { Header } from "@/features/header";
import { Footer } from "@/features/footer";
import Image from "next/image";

export default function Home() {
  const image = "/assets/img/logo-transparent.png";
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Header />
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
      <Footer />
    </main>
  );
}
