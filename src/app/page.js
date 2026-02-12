import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DividerSection from "@/components/DividerSection";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

// Force static generation for better caching
export const dynamic = "force-static";

export const metadata = {
  title: "Wild flowers Community",
  description: "Wild flowers Community.",
  icons: {
    icon: "/White_flower.svg",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <Hero />
      <DividerSection />
      {/* FAQs hidden */}
      {/* <FAQs /> */}
      <Footer />
    </main>
  );
}
