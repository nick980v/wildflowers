import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Gallery() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className="mt-8">
        <h1 className={styles.heading}>
          Coming <span style={{ color: "#D9932C" }}>Soon!</span>
        </h1>
        {/* Add your content here */}
      </div>
      <Footer />
    </main>
  );
}
