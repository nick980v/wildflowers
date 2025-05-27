import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "About Us - Wild flowers Community",
  description:
    "Learn about Wild flowers community, led by experienced practitioner Claudine. Discover our child-led, nature-based approach to early years learning in a nurturing and inclusive environment.",
};

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>
            About <span style={{ color: "#D9932C" }}>Us</span>
          </h1>
          <p className={styles.text}>
            Claudine is the heart behind Wild flowers – a passionate and
            experienced practitioner with over eight years of experience working
            with children, including those with Special Educational Needs and
            Disabilities.
          </p>
          <p className={styles.text}>
            She holds a First Class Degree in Applied Education Studies, and is
            trained to Level 3 in Childcare & Early Learning, The Froebelian
            Approach and Language and Understanding, reflecting her deep
            commitment to child-led, play-based learning rooted in nature and
            connection.
          </p>
          <p className={styles.text}>
            Claudine has also completed relevant training in therapeutic
            behaviour approaches, safeguarding and is fully first aid trained,
            ensuring a safe, nurturing, and inclusive environment for every
            child and family. Wild flowers reflects Claudine&apos;s belief in
            the power of community, creativity, and curiosity, where children
            and their grown-ups can grow, explore, and learn together.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Claudine-headshot.jpg"
            alt="Claudine photo"
            className={styles.headshot}
            width={3060}
            height={100}
            priority
          />
          <Image
            src="/Petal.svg"
            alt="Decorative white flower"
            width={158}
            height={158}
            className={styles.whiteFlower}
            priority
          />
          <Image
            src="/Lavender.svg"
            alt="Decorative blue flower"
            width={325}
            height={325}
            className={styles.blueFlower}
            priority
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
