import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "About Us - Wild flowers",
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
            About <span style={{ color: "#D9932C" }}>us</span>
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
          />
          <Image
            src="/Petal.svg"
            alt="Decorative white flower"
            width={158}
            height={158}
            className={styles.whiteFlower}
          />
          <Image
            src="/Lavender.svg"
            alt="Decorative blue flower"
            width={325}
            height={325}
            className={styles.blueFlower}
          />
        </div>
      </div>
      <h1 className={styles.subHeading}>
        Keeping <span style={{ color: "#D9932C" }}>connected</span>
      </h1>
      <div className={styles.twoColumnContainer}>
        <div className={styles.column}>
          <p className={styles.text}>
            At Wild flowers, we believe in nurturing strong connections with our
            families beyond the weekly sessions. To support this, we offer
            ongoing communication through a friendly group chat forum, where
            parents and carers can ask questions, stay informed, and feel part
            of the community throughout the week. Details of upcoming sessions
            will be shared in advance, so families can feel prepared for the
            weather and activities.
          </p>
        </div>
        <div className={styles.column}>
          <p className={styles.text}>
            Any exciting Wild flowers news or announcements will also be shared
            here first, giving our families early access to updates. Parents are
            warmly encouraged to share photos (with consent) and special moments
            from home, helping to extend the sense of connection and community
            that lies at the heart of Wildflowers.
          </p>
          <Image
            src="/RedFlowers.svg"
            alt="Red flowers decoration"
            width={63}
            height={100}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
