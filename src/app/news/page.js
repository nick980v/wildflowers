import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "./page.module.css";
import Calendar from "@/components/Calendar";
import { getSheetData } from "@/lib/googleSheet";

export default async function News() {
  const sheetData = await getSheetData();

  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Keeping <span style={{ color: "#D9932C" }}>Connected</span>
        </h1>
        <div className={styles.twoColumnContainer}>
          <div className={styles.column}>
            <p className={styles.text}>
              At Wild flowers, we believe in nurturing strong connections with
              our families beyond the weekly sessions. To support this, we offer
              ongoing communication through a friendly group chat forum, where
              parents and carers can ask questions, stay informed, and feel part
              of the community throughout the week. Details of upcoming sessions
              will be shared in advance, so families can feel prepared for the
              weather and activities.
            </p>
          </div>
          <div className={styles.column}>
            <p className={styles.text}>
              Any exciting Wild flowers news or announcements will also be
              shared here first, giving our families early access to updates.
              Parents are warmly encouraged to share photos (with consent) and
              special moments from home, helping to extend the sense of
              connection and community that lies at the heart of Wild flowers.
            </p>
            <Image
              src="/RedFlowers.svg"
              alt="Red flowers decoration"
              width={63}
              height={100}
            />
          </div>
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
            <div className={styles.calendarSection}>
              <h1 className={styles.subHeading}>Upcoming Sessions</h1>
              <p className={styles.text}>
                Browse through our calendar to see the available sessions for
                each Friday. We offer morning and afternoon sessions, along with
                a community lunch.
              </p>
              <Calendar sheetData={sheetData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
