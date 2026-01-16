import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";

// Force static generation for better caching
export const dynamic = "force-static";

export const metadata = {
  title: "Contact Us - Wild flowers Community",
  description:
    "Get in touch with Wild flowers community. Whether you have questions about our early years sessions or want to join, we're here to help. We are located at the Scout Hut, at the end of Meads Lane, Wheathampstead",
};

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />
      <div className={styles.container}>
        <div style={{ maxWidth: "566px" }}>
          <h1 className={styles.heading}>
            Contact <span style={{ color: "#D9932C" }}>Us</span>
          </h1>
          <p className={styles.text}>
            Interested in booking with Wild flowers? Whether you have a
            question, would like to learn more about our talks and workshops, or
            wish to book a free consultation to explore what would best suit
            your setting, we&apos;d love to hear from you.
          </p>
        </div>
      </div>
      <ContactForm />
      <div className={styles.container}></div>
      <Footer />
    </main>
  );
}
