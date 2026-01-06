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
          <h1 className={styles.sectionTitle}>
            How We Handle Your Information
          </h1>
          <p className={styles.paragraph}>
            When you contact us or make a booking through our website, we
            collect information such as your name, email address, phone number,
            and message. This information is used solely to communicate with you
            about our services. We do not use this information for marketing
            purposes or share it with third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>How We Store Your Information</h1>
          <p className={styles.paragraph}>
            Enquiry information is sent securely to our administrative email
            account, which is protected with strong passwords and two-factor
            authentication. We do not maintain a marketing database of booking
            or enquiry information.
          </p>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Data Retention</h1>
          <p className={styles.paragraph}>
            We keep your booking and enquiry information only for as long as
            necessary to process your query, comply with legal requirements, and
            for a short period afterward in case of follow-up questions. After
            this period, your information will be securely deleted.
          </p>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Your Rights</h1>
          <p className={styles.paragraph}>
            You have the right to request a copy of any information we hold
            about you, and to ask us to delete that information. To make such a
            request, please contact us at enquiries@wildflowerscommunity.uk
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
