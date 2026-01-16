import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

// Force static generation for better caching
export const dynamic = "force-static";

export const metadata = {
  title: "Service & Fees - Wild flowers",
  description:
    "Explore the Wild flowers community fees and schedule. Learn about our 12-week seasonal journey, session timings, community lunch, and flexible payment options.",
};

export default function Fees() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>Our Offer</h1>
          <p className={styles.text}>
            At Wild flowers, we deliver thoughtful, accessible talks and
            workshops on child development and alternative, compassionate ways
            of raising and educating children. We work with nurseries, schools
            and parents, offering sessions that invite reflection, challenge
            traditional narratives, and deepen understanding of how children
            grow, learn and behave.
          </p>
          <p className={styles.text}>
            Our talks are rooted in well-established approaches to early
            childhood education, including the work of Froebel, Montessori and
            Reggio Emilia, and are shaped by a gentle, child-centred philosophy.
            Through our work, we focus on helping adults understand children as
            curious, capable and unique individuals, and explore ways to create
            environments where both children and the adults around them can
            flourish.
          </p>
        </div>
        <Image
          src="/Lavender.svg"
          alt="Lavender decoration"
          width={289}
          height={100}
          className={styles.lavender}
        />
      </div>
      <div
        style={{
          backgroundColor: "#4C6E3D",
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          padding: "2rem 0",
        }}
      >
        <div className="px-4 sm:px-8 md:px-12 lg:px-[168px]">
          <div className={styles.container}>
            <Image
              src="/GroupOutside.jpg"
              alt="Outside play"
              width={448}
              height={100}
              style={{ borderRadius: "2rem" }}
              className={styles.lavender}
            />

            <div className={styles.contentContainer}>
              <h1 className={styles.subHeading}>
                Themes of our Talks and Workshops
              </h1>

              <p className={styles.text}>
                Our talks explore a range of themes rooted in child development
                and gentle, alternative approaches to learning and raising
                children. Each session invites reflection, discussion and a
                deeper understanding of children&apos;s needs, while remaining
                responsive to the audience and setting.
              </p>
              <ul className={styles.text}>
                <li>Behaviour as Communication</li>
                <span className={styles.textSpan}>
                  Exploring what children’s behaviour may be telling us, and how
                  responding with curiosity and empathy can strengthen
                  connection and understanding
                </span>
                <li>Child-Led Learning</li>
                <span className={styles.textSpan}>
                  Recognising the importance of play, curiosity and exploration
                  in early childhood, and how to support children in their
                  learning journey.
                </span>
                <li>Slowing Down Childhood</li>
                <span className={styles.textSpan}>
                  Gently challenging the pressures placed on children, and
                  considering how a slower, more respectful pace can support
                  wellbeing and development.
                </span>
                <li>Creating Calm, Connected Environments</li>
                <span className={styles.textSpan}>
                  Exploring how relationships, routines, and environments can
                  help children feel safe, regulated, and ready to learn.
                </span>
                <li>Learning Through Nature</li>
                <span className={styles.textSpan}>
                  Exploring the importance of children’s connection with the
                  natural world, and how time outdoors supports wellbeing,
                  curiosity, and holistic development.
                </span>
              </ul>
              <p className={styles.text}>
                To discuss specific themes, talks and/or workshops please{" "}
                <Link
                  href="/contact"
                  style={{ color: "#D9932C", textDecoration: "none" }}
                >
                  Contact Us!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
