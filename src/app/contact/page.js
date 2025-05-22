import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Wild flowers",
  description:
    "Get in touch with Wild flowers community. Whether you have questions about our early years sessions or want to join, we're here to help.",
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
            Whether you have a question, want to learn more about our sessions,
            or are ready to join the Wild flowers community, we&apos;re here and
            happy to help.
          </p>
        </div>
      </div>
      <ContactForm />
      {/* Location Section */}
      <div style={{ marginTop: "2rem", maxWidth: 566 }}>
        <h1
          className={styles.heading}
          style={{ fontSize: 40, marginBottom: 8 }}
        >
          Where are we located?
        </h1>
        <p className={styles.text} style={{ marginBottom: 8 }}>
          Scout hut
          <br />
          Meads Lane
          <br />
          Wheathampstead
          <br />
          St Albans
          <br />
          AL4 8BW
        </p>
        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: 16,
          }}
        >
          <iframe
            title="Wild flowers location map"
            width="100%"
            height="300"
            style={{ border: 0, width: "100%", minHeight: 300 }}
            src="https://www.google.com/maps?q=51.813108570558185,-0.2897190754087065&z=16&output=embed"
            allowFullScreen
          ></iframe>
        </div>
        <p className={styles.text} style={{ fontSize: 14, color: "white" }}>
          The Scout Hut is located at the end of Meads Lane, Wheathampstead.
          Parking is available on a nearby lane or up by the car park of the
          Marford Memorial Hall. Please follow signs for the Scout Hut once you
          arrive.
        </p>
      </div>
      <Footer />
    </main>
  );
}
