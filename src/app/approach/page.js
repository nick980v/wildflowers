import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Timeline from "@/components/Timeline";

export const metadata = {
  title: "Our Approach - Wild flowers",
  description:
    "Discover the unique blend of Froebelian and Montessori approaches at Wild flowers community. Learn how we foster child-led, nature-based learning through play, exploration, and purposeful activity.",
};

const froebelTimelineItems = [
  {
    text: "Encouraging free play and self-expression through song storytelling, movement, and natural materials.",
  },
  {
    text: "Creating rhythmic routines that give children a sense of security and belonging.",
  },
  {
    text: 'Offering "gifts" and simple tools that inspire creativity, pattern making, and problem-solving.',
  },
  {
    text: "Embracing the outdoors as a living classroom, where children develop deep relationships with the natural world.",
  },
  {
    text: "Valuing community and relationships, where adults gently guide, observe, and support learning.",
  },
  {
    text: "Supporting children\'s spiritual and emotional development through wonder, beauty, and meaningful experiences.",
  },
];

const montessoriTimelineItems = [
  {
    text: "Set up our indoor and outdoor spaces to promote independence and choice.",
  },
  {
    text: "Use real-life tools and materials that are hands-on, beautiful, and purposeful.",
  },
  {
    text: "Encourage care of self, others, and the environment from pouring water to tidying up to looking after plants.",
  },
  {
    text: "Observe rather than instruct, allowing children to lead their learning.",
  },
  {
    text: "Foster deep focus and satisfaction through meaningful, repeatable tasks.",
  },
  {
    text: "Respect the child as a whole person, capable, curious, and full of potential.",
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
          src="/Sunset-homepage.png"
          alt="Claudine photo"
          className={styles.imageContainer}
          width={684}
          height={100}
          priority
        />
      </div>
      <h1 className={styles.subHeading} style={{ marginBottom: "3rem" }}>
        How We Honour Froebel&apos;s Legacy
      </h1>
      <Timeline timelineItems={froebelTimelineItems} dotColor={"#92262A"} />
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
          src="/Sunset-homepage.png"
          alt="Claudine photo"
          className={styles.imageContainer}
          width={684}
          height={100}
        />
      </div>
      <h1 className={styles.subHeading} style={{ marginBottom: "3rem" }}>
        How We Reflect Montessori&apos;s Principles
      </h1>
      <Timeline timelineItems={montessoriTimelineItems} dotColor={"#D9932C"} />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.subHeading}>
            A Harmonious Blend At Wild Flowers
          </h1>
          <p className={styles.text}>
            By combining these two inspiring approaches, Wild flowers offers
            something truly special. From Froebel, we bring warmth, rhythm,
            song, storytelling, nature, and play. From Montessori, we offer
            structure, calm independence, purposeful activity, and respect for
            the child&apos;s inner drive. Together, they create a rich, balanced
            environment where children can:
          </p>
          <ul className={styles.text}>
            <li>Explore at their own pace</li>
            <li>
              Build strong relationships with their peers and trusted adults
            </li>
            <li>Engage deeply with nature, materials, and community</li>
            <li>
              Grow holistically, physically, emotionally, socially, and
              intellectually
            </li>
          </ul>
          <p className={styles.text}>
            At Wild flowers, we don&apos;t rush childhood. We create a gentle
            space where learning unfolds naturally and joyfully, just as it
            should.
          </p>
        </div>
        <Image
          src="/ApproachFlowers.svg"
          alt="Approach Flowers"
          // className={styles.imageContainer}
          width={537}
          height={100}
        />
      </div>
      <Footer />
    </main>
  );
}
