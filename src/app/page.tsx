import { Header } from "@/features/header";
import { MainWindow } from "@/features/main";
import { Footer } from "@/features/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Header />
      <MainWindow />
      <Footer />
    </main>
  );
}