import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Timeline from "@/components/Timeline";

export const metadata = {
  title: "Our Approach - Wild flowers Community",
  description:
    "Discover the unique blend of Froebelian and Montessori approaches at Wild flowers community. Learn how we foster child-led, nature-based learning through play, exploration, and purposeful activity.",
};

const froebelTimelineItems = [
  {
    text: "We honour play as the foundation of learning (Froebel), creating space for open-ended exploration, imagination and meaningful hands-on experiences.",
  },
  {
    text: "We nurture a connection with nature (Froebel), using the natural world as a living classroom that inspires curiosity, care and wonder.",
  },
  {
    text: "We encourage independence and real-life skills (Montessori), offering child-sized tools, purposeful activities and freedom within gentle boundaries.",
  },
  {
    text: "We respect each child’s individual pace of development (Montessori), allowing children time to concentrate, repeat and master new skills.",
  },
  {
    text: "We see children as capable, curious learners (Reggio Emilia), valuing their ideas, questions and theories as an important part of the learning process.",
  },
  {
    text: "We create a thoughtful learning environment and strong sense of community (Reggio Emilia), where relationships, collaboration and belonging are central to everything we do.",
  },
];

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
            Friedrich Froebel (1782–1852), the father of kindergarten, saw
            children as active, creative learners who thrive through play,
            exploration, and connection with nature. He believed that each child
            is like a seed with great potential, and with the right care and
            environment, will grow and bloom.
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
            Maria Montessori (1870–1952), an Italian physician and educator,
            believed that children are naturally motivated to learn and flourish
            when given the freedom to follow their own path. Her method focuses
            on independence, concentration, purposeful activity, and creating a
            calm, ordered environment that meets a child&apos;s developmental
            needs.
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
            children as capable, curious, and expressive individuals. In our
            talks and workshops, Wild flowers shows how to honour children’s
            voices, encourage collaboration, and create rich, engaging
            environments that inspire learning, creativity, and connection.
          </p>
        </div>
        <Image
          src="/emilia.jpeg"
          alt="reggio emilia photo"
          className={styles.imageContainer}
          width={684}
          height={100}
        />
      </div>

      <h1 className={styles.subHeading} style={{ marginBottom: "3rem" }}>
        How We Honour <span style={{ color: "#92262A" }}>Froebel&apos;s</span>{" "}
        and <span style={{ color: "#D9932C" }}>Montessori&apos;s</span> Legacy
        and Apply the <span style={{ color: "#9cb7d4" }}>Reggio Emilia</span>{" "}
        Principles
      </h1>
      <Timeline timelineItems={froebelTimelineItems} dotColor={"#92262A"} />
      <Footer />
    </main>
  );
}
