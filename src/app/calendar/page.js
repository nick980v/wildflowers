// Use ISR to cache the page and revalidate daily
export const revalidate = 86400; // 24 hours

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "./page.module.css";
import Calendar from "@/components/Calendar";
import { getSheetData } from "@/lib/googleSheet";

export default async function OurCalendar() {
  const sheetData = await getSheetData();

  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Our <span style={{ color: "#D9932C" }}>Calendar</span>
        </h1>
        <div className={styles.contentContainer}>
          <p className={styles.text}>
            Our Wild flowers calendar shares upcoming talks, workshops, and
            events, as well as current availability for bookings. Sessions take
            place throughout the year and gently evolve with the seasons, the
            settings, and the communities we work alongside.
          </p>
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
              <Calendar sheetData={sheetData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
