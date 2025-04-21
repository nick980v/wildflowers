import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-[168px] pt-[70px]">
      <Header />
      <Hero />
    </main>
  );
}
