import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <h1 className={styles.heading}>Our Offer & Fees</h1>
          <h1 className={styles.subHeading}>
            Our <span className={styles.headingHighlight}>12-Week</span>{" "}
            Seasonal Journey
          </h1>
          <p className={styles.text}>
            Each Wild flowers term follows a thoughtfully designed 12-week
            programme, rooted in the Early Years Foundation Stage (EYFS) and
            inspired by the natural world, play-based learning, and meaningful
            connections. Throughout the term, children and their grown-ups will
            explore themes such as:
          </p>
          <ul className={styles.text}>
            <li>Community & Connection </li>
            <li>Nature Exploration & Seasonal Changes</li>
            <li>Movement, Music & Storytelling</li>
            <li>Gardening, Growing & the Natural World</li>
            <li>Creative Construction & Hands-on Making</li>
            <li>Light, Shadow & Sensory Play</li>
            <li>Kindness, Pattern & Playful Discovery</li>
          </ul>
          <p className={styles.text}>
            We end each term with a gentle celebration and reflection, honouring
            the children&apos;s experiences and the power of learning through
            nature.
          </p>
          <p className={styles.text}>
            Every session is carefully planned to support all areas of the EYFS,
            with a focus on child-led exploration, emotional wellbeing,
            creativity, and connection with others and the world around us. A
            full breakdown of the 12-week journey will be provided upon sign-up,
            so you know exactly what to expect each step of the way.
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
              <h1 className={styles.subHeading}>The Schedule</h1>

              <p className={styles.text}>
                Parents are invited to choose one session that best fits their
                schedule. Wild flowers runs every Friday, offering two gentle,
                nature-inspired sessions to suit different routines:
              </p>
              <h1 className={styles.sessionText}>
                Morning Session:{" "}
                <span className={styles.timingsText}>9:00am – 11:30am</span>
              </h1>
              <h1 className={styles.sessionText}>
                Afternoon Session:{" "}
                <span className={styles.timingsText}>2:00pm – 4:30pm</span>
              </h1>

              <h1 className={styles.sessionText}>
                Community Lunchtime Session:{" "}
                <span className={styles.timingsText}>12:00pm – 1:30pm</span>
              </h1>
              <p className={styles.text}>
                Additionally, Wild flowers welcomes you to join us for a gentle
                and welcoming lunchtime session, where families can come
                together to share food, conversation, and connection. This is
                more than just a meal, it&apos;s a shared social experience,
                open to all in the local community. During the lunchtime
                session, children can enjoy outdoor play, nature exploration,
                child-led play indoors, and a cosy story time.
              </p>
              <p className={styles.text}>
                You do not need to be enrolled in a Wild flowers session to join
                us for lunch, this is an open invitation to all in the local
                community. Everyone is welcome. Come as you are, bring your
                lunch, and share in the joy of community.
              </p>
              <p className={styles.text}>
                Wild flowers is open during school half terms, welcoming
                families to enjoy seasonal learning and play throughout the
                year.
              </p>
              <p className={styles.text}>
                <span style={{ color: "#9CB7D4" }}>Please note: </span>We take a
                break during the Christmas, Easter, and summer holidays to rest,
                reflect, and prepare for the next chapter of our journey
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.subHeading}>Fees</h1>
          <p className={styles.text}>
            Each 2.5 hour Wild flowers session is{" "}
            <span style={{ color: "#D9932C" }}>£15</span>, and this fee includes
            all the resources required for an engaging and creative experience.
            Adults attend for free, making it a wonderful opportunity to
            connect, play, and explore alongside your child.
          </p>
          <p className={styles.text}>
            Bringing more than one little explorer? Get in touch to find out
            about our sibling offers!
          </p>
          <p className={styles.text}>
            Parents can choose the plan that works best for them:
            <br />
            <br />
            <span style={{ color: "#D9932C" }}>Full Term Upfront</span> - Pay
            for the full term (12 sessions) in advance and receive a{" "}
            <span style={{ color: "#D9932C" }}>10% discount</span> plus a free
            welcome pack (including a Wild flowers drawstring bag, name tag, and
            Wild flowers t-shirt).
            <br />
            <br />
            <span style={{ color: "#D9932C" }}>Half-Termly Payments</span> - Pay
            in two instalments of 6 sessions each across the term.
          </p>

          <p className={styles.text}>
            Additionally, our lunchtime session is offered at{" "}
            <span style={{ color: "#D9932C" }}>£5</span> per family, providing a
            wonderful opportunity for extra community connection
          </p>
          <p className={styles.text}>
            For queries relating to fees and payment, please get in touch using
            the details provided on our{" "}
            <Link
              href="/contact"
              style={{ color: "#D9932C", textDecoration: "none" }}
            >
              &apos;Contact Us&apos;
            </Link>{" "}
            page.
          </p>
        </div>
        <Image
          src="/Fees-flowers.svg"
          alt="Fees flowers"
          width={400}
          height={100}
          className={styles.lavender}
        />
      </div>
      <Footer />
    </main>
  );
}
