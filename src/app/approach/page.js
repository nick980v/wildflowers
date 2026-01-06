import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Our Approach - Wild flowers Community",
  description:
    "Discover the unique blend of Froebelian and Montessori approaches at Wild flowers community. Learn how we foster child-led, nature-based learning through play, exploration, and purposeful activity.",
};

export default function Approach() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>
            The <span style={{ color: "#92262A" }}>Froebelian</span> Approach
          </h1>
          <p className={styles.text}>
            Friedrich Froebel (1782-1852), the creator of the kindergarten,
            celebrated the joy of learning through play, creative activity and
            nature. At Wild flowers, our talks and workshops explore how
            children can grow through curiosity, imagination, and connection
            with the natural world, helping adults create environments where
            wonder and exploration are nurtured.
          </p>
        </div>
        <Image
          src="/Froebel.jpg"
          alt="Claudine photo"
          className={styles.imageContainer}
          width={684}
          height={100}
          priority
        />
      </div>

      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>
            The <span style={{ color: "#D9932C" }}>Montessori</span> Approach
          </h1>
          <p className={styles.text}>
            Maria Montessori (1870-1952) believed children flourish when given
            the freedom to follow their own curiosity. At Wild flowers, we share
            how fostering independence, purposeful activity and thoughtfully
            prepared environments can support each child&apos;s natural growth,
            offering guidance for parents, educators, and anyone who cares for
            children.
          </p>
        </div>
        <Image
          src="/Montesorry.jpg"
          alt="Montesorri photo"
          className={styles.imageContainer}
          width={684}
          height={100}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>
            The <span style={{ color: "#9cb7d4" }}>Reggio Emilia</span> Approach
          </h1>
          <p className={styles.text}>
            The Reggio Emilia approach, developed in post-war Italy, values
            children as capable, curious and expressive individuals. In our
            talks and workshops, Wild flowers shows how to honour
            children&apos;s voices, encourage collaboration and create rich,
            engaging environments that inspire learning, creativity and
            connection.
          </p>
        </div>
        <Image
          src="/Montesorry.jpg"
          alt="Montesorri photo"
          className={styles.imageContainer}
          width={684}
          height={100}
        />
      </div>

      <Footer />
    </main>
  );
}
