import Header from "@/components/Header";

export default function Gallery() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        {/* Add your content here */}
      </div>
    </main>
  );
}
