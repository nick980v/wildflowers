import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";
import FroebelTimeline from "@/components/Timeline";

export default function Approach() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>
            The <span style={{ color: "#92262A" }}>Froebelian</span> approach
          </h1>
          <p className={styles.text}>
            Friedrich Froebel (1782–1852), the father of kindergarten, saw
            children as active, creative learners who thrive through play,
            exploration, and connection with nature. He believed that each child
            is like a seed with great potential, and with the right care and
            environment, will grow and bloom.
          </p>
        </div>
        <Image
          src="/Sunset-homepage.png"
          alt="Claudine photo"
          className={styles.imageContainer}
          width={684}
          height={100}
        />
      </div>
      <h1 className={styles.subHeading} style={{ marginBottom: "3rem" }}>
        How we honour Froebel&apos;s legacy
      </h1>
      <FroebelTimeline />
      <Footer />
    </main>
  );
}
