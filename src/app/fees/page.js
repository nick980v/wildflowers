import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Image from "next/image";

export default function Fees() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>Service & fees</h1>
          <h1 className={styles.subHeading}>
            Our <span className={styles.headingHighlight}>12-Week</span>{" "}
            seasonal journey
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
            the children’s experiences and the power of learning through nature.
          </p>
          <p className={styles.text}>
            Every session is carefully planned to support all areas of the EYFS,
            with a focus on child-led exploration, emotional wellbeing,
            creativity, and connection with others and the world around us. A
            full breakdown of the 12-week journey will be provided in your
            Welcome Pack upon sign-up, so you know exactly what to expect each
            step of the way.
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
      <div style={{ backgroundColor: "#4C6E3D" }}>
        <h1 className={styles.subHeading}>The schedule</h1>
        <p className={styles.text}>
          Wild flowers runs every Friday, offering two gentle, nature-inspired
          sessions to suit different routines:
        </p>
        <h1 className={styles.sessionText}>
          Morning Session:{" "}
          <span className={styles.timingsText}>9:00am – 11:30am</span>
        </h1>
        <h1 className={styles.sessionText}>
          Afternoon Session:{" "}
          <span className={styles.timingsText}>2:00pm – 4:30pm</span>
        </h1>
        <p className={styles.text}>
          Additionally, Wild flowers welcomes you to join us for a gentle and
          welcoming lunchtime session, where families can come together to share
          food, conversation, and connection. This is more than just a meal,
          it’s a shared social experience, open to all in the local community.
        </p>
        <h1 className={styles.sessionText}>
          Community Lunchtime Session:{" "}
          <span className={styles.timingsText}>12:00pm – 1:30pm</span>
        </h1>

        <p className={styles.text}>
          Join us for our warm and welcoming lunchtime gathering, a relaxed and
          social space for families to come together, share food, and connect.
          This is a time to pause, enjoy one another’s company, and build a
          sense of belonging within the community. We provide wholesome,
          nourishing snacks, and you’re welcome to bring your own lunch to enjoy
          alongside others.
        </p>
        <p className={styles.text}>
          During the lunchtime session, children can enjoy outdoor play, nature
          exploration, child-led play indoors, and a cosy story time, creating a
          gentle rhythm to the day while supporting natural curiosity and
          connection.
        </p>
        <p className={styles.text}>
          You do not need to be enrolled in a Wild flowers session to join us
          for lunch—this is an open invitation to all in the local community.
          Everyone is welcome. Come as you are, bring your lunch, and share in
          the joy of community. Wild flowers is open during school half terms,
          welcoming families to enjoy seasonal learning and play throughout the
          year.
        </p>
        <p className={styles.text}>
          <span style={{ color: "#9CB7D4" }}>Please note: </span>We take a break
          during the Christmas, Easter, and summer holidays to rest, reflect,
          and prepare for the next chapter of our journey together. The Approach
          to Learning
        </p>
      </div>
      <Footer />
    </main>
  );
}
