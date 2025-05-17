import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";

export default function Fees() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>Service & fees</h1>
        <Image
          src="/Lavender.svg"
          alt="Lavender decoration"
          width={289}
          height={100}
          className={styles.lavender}
        />
      </div>
      <Footer />
    </main>
  );
}
