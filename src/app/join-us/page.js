import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";
import { getSheetData } from "@/lib/googleSheet";
import BookingForm from "../../components/BookingForm";

export const metadata = {
  title: "Contact Us - Wild flowers Community",
  description:
    "Get in touch with Wild flowers community. Whether you have questions about our early years sessions or want to join, we're here to help. We are located at the Scout Hut, at the end of Meads Lane, Wheathampstead",
};

export default async function JoinUsPage() {
  const sheetData = await getSheetData();
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <div style={{ maxWidth: "566px" }}>
          <h1 className={styles.heading}>
            Join <span style={{ color: "#D9932C" }}>Us</span>
          </h1>
          <p className={styles.text}>
            Book sessions for your child and become part of the Wild flowers
            community using the form below.
          </p>
        </div>
      </div>
      <BookingForm sheetData={sheetData} />
      <Footer />
    </main>
  );
}
