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
            At Wild flowers, we offer gentle, alternative educational sessions
            for children aged 0-8 and their parents and carers, creating space
            for connection, learning and community. Inspired by nature and the
            environment, our sessions offer a hands-on, exploratory experience
            that goes beyond mainstream approaches. They are rooted in the early
            years and national curriculum, while also nurturing essential life
            skills such as emotional awareness, communication, creativity and
            independence.
          </p>
          <p className={styles.text}>
            Our sessions are particularly well suited to home-educating families
            seeking a thoughtful, child-centred approach.
          </p>
          <h1 className={styles.heading}>Our Fees</h1>
          <p className={styles.text}>
            Wild flowers runs every Friday, offering a single, gentle,
            nature-inspired session from 10:00am to 1:00pm.
          </p>
          <p className={styles.text}>
            Wild flowers sessions are £15 per child for each 3-hour session,
            payable half-termly or termly in advance. This includes all learning
            materials and resources, so families can simply arrive and enjoy the
            session.
          </p>
          <p className={styles.text}>
            Please{" "}
            <Link href="/contact">
              <span style={{ color: "#D9932C", textDecoration: "underline" }}>
                contact us
              </span>
            </Link>{" "}
            to explore our sibling discounts, available for families attending
            together.
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
                Our 12-Week Seasonal Journey
              </h1>

              <p className={styles.text}>
                Each Wild flowers term follows a thoughtfully designed 12-week
                programme, rooted in the Early Years Foundation Stage (EYFS) and
                the National Curriculum, and inspired by the natural world,
                play-based learning, and meaningful connections.
              </p>
              <p className={styles.text}>
                Throughout the term, children and their grown-ups explore themes
                such as:
              </p>
              <ul className={styles.text}>
                <li>Community & Connection</li>

                <li>Nature Exploration & Seasonal Changes</li>

                <li>Movement, Music & Storytelling</li>

                <li>Gardening, Growing & the Natural World</li>

                <li>Creative Construction & Hands-on Making</li>
                <li>Light, Shadow & Sensory Play</li>
                <li>Kindness, Pattern & Playful Discover</li>
              </ul>
              <p className={styles.text}>
                We end each term with a gentle celebration and reflection,
                honouring the children’s experiences and the magic of learning
                through nature.
              </p>
              <p className={styles.text}>
                <span style={{ color: "#D9932C" }}>Please note: </span>We take a
                break during the Christmas, Easter, and summer holidays to rest,
                reflect, and prepare for the next chapter of our journey
                together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
