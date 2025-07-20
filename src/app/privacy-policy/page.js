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
            and message. For bookings, we may also collect your child’s name,
            date of birth, home address, medical or allergy information,
            emergency contacts, and your digital signature. This information is
            used solely to process your booking, ensure the safety and wellbeing
            of your child, and to communicate with you about your booking or our
            services. We do not use this information for marketing purposes or
            share it with third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Sensitive Information</h1>
          <p className={styles.paragraph}>
            Some information you provide (such as medical or allergy details, or
            information about your child) may be considered sensitive under data
            protection law. We treat this information with extra care and only
            use it for the purposes described above.
          </p>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>How We Store Your Information</h1>
          <p className={styles.paragraph}>
            Booking and enquiry information is sent securely to our
            administrative email account, which is protected with strong
            passwords and two-factor authentication. We do not maintain a
            marketing database of booking or enquiry information.
          </p>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Data Retention</h1>
          <p className={styles.paragraph}>
            We keep your booking and enquiry information only for as long as
            necessary to process your booking, comply with legal requirements,
            and for a short period afterward in case of follow-up questions.
            After this period, your information will be securely deleted.
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
