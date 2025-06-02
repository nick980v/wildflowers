import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-[#062F21] text-[#3a3a3a] px-4 sm:px-8 md:px-12 lg:px-[168px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px]">
      <Header />

      <div className={styles.container}>
        <h1 className={styles.heading}>Privacy Policy</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How We Handle Your Information
          </h2>
          <p className={styles.paragraph}>
            When you contact us through our website, we collect your name, email
            address, phone number (if provided), and your message. This
            information is used solely to respond to your enquiry and will not
            be used for marketing purposes or shared with third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Retention</h2>
          <p className={styles.paragraph}>
            We keep your enquiry information only for as long as necessary to
            respond to your request and for a short period afterward in case of
            follow-up questions. We do not maintain a database of enquiries for
            marketing purposes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Rights</h2>
          <p className={styles.paragraph}>
            You have the right to request a copy of any information we hold
            about you, and to ask us to delete that information. To make such a
            request, please contact us at enquiries@wildflowerscommunity.uk
          </p>
        </section>

        {/* <LastUpdated>Last updated: {new Date().toLocaleDateString()}</LastUpdated> */}
      </div>
      <Footer />
    </main>
  );
}
