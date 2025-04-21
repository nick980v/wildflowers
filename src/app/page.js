import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DividerSection from "@/components/DividerSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-[70px]">
      <Header />
      <Hero />
      <DividerSection />
    </main>
  );
}
