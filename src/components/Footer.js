"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";

const QuickLinksHeader = styled.h1`
  color: #d9932c;
  font-size: 23.05px;
  margin-bottom: 0.5rem;
`;

const ContactUsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const InterestedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center; /* Center items when stacked */
    gap: 1.5rem; /* Adjust gap for mobile */
  }
`;

const InterestedTextContainer = styled.div`
  text-align: left;
  flex: 1;
  /* Ensure text aligns center on mobile if desired */
  @media (max-width: 767px) {
    text-align: center; /* Center text on mobile */
    flex: none; /* Remove flex-1 on mobile */
    width: 100%; /* Take full width */
  }
`;

const InterestedButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    flex: none; /* Remove flex-1 on mobile */
    width: 100%; /* Take full width */
    justify-content: center; /* Center button on mobile */
  }
`;

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#062F21",
        color: "white",
        padding: "2rem 0 0 0",
        marginTop: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Image
            src="/Footer-logo.svg"
            alt="WildFlowers Logo"
            width={260}
            height={50}
            style={{ marginBottom: "1rem" }}
          />
        </div>

        <div>
          <QuickLinksHeader>Quick Links</QuickLinksHeader>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                href="/approach"
                style={{ color: "white", textDecoration: "none" }}
              >
                Our Approach
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                href="/fees"
                style={{ color: "white", textDecoration: "none" }}
              >
                Services & Fees
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                href="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                href="/gallery"
                style={{ color: "white", textDecoration: "none" }}
              >
                Gallery
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                href="/news"
                style={{ color: "white", textDecoration: "none" }}
              >
                News
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <QuickLinksHeader>Contact Us</QuickLinksHeader>
          <ContactUsContainer>
            <Image src="/Mail.svg" alt="Email" width={20} height={20} />
            <p style={{ color: "white" }}>enquiries@wildflowerscommunity.uk</p>
          </ContactUsContainer>
          <ContactUsContainer>
            <Image src="/Telephone.svg" alt="Phone" width={20} height={20} />
            <a
              href="tel:+447523598830"
              style={{ color: "white", textDecoration: "none" }}
            >
              (+44) 7523598830
            </a>
          </ContactUsContainer>
          <ContactUsContainer>
            <Image src="/FB.svg" alt="Facebook" width={20} height={20} />
            <Link
              href="https://www.facebook.com/profile.php?id=61575026065913"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Wild flowers Community
            </Link>
          </ContactUsContainer>
          <ContactUsContainer>
            <Image src="/Insta.svg" alt="Instagram" width={20} height={20} />
            <Link
              href="https://www.instagram.com/wildflowerscommunity/#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              @wildflowerscommunity
            </Link>
          </ContactUsContainer>
        </div>
      </div>

      <div
        style={{
          margin: "2rem auto 0",
          padding: "1rem",
          borderTop: "1px solid #D9932C",
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        <InterestedContainer>
          <InterestedTextContainer>
            <h1
              style={{ color: "white", marginBottom: "1rem", fontSize: "28px" }}
            >
              Interested in us?
            </h1>
            <p style={{ color: "white", fontSize: "23px" }}>
              Whether you have a question, want to learn more about our
              sessions, or are ready to join the Wild flowers community,
              we&apos;re here and happy to help.
            </p>
          </InterestedTextContainer>
          <InterestedButtonContainer>
            <Button href="/contact" bgColor="#D9932C">
              Contact Us
            </Button>
          </InterestedButtonContainer>
        </InterestedContainer>
        <p>
          &copy; {new Date().getFullYear()} Wild flowers. All rights reserved.
        </p>
      </div>

      <div
        style={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          marginTop: "2rem",
        }}
      >
        <Image
          src="/Grass-footer.svg"
          alt="Grass decoration"
          width={1920}
          height={100}
          style={{ width: "100%", height: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            top: "-19%",
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="/Footer-overlay.svg"
            alt="Footer overlay"
            width={1920}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "-5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "75%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/Footer-flowers.svg"
            alt="Footer flowers"
            width={800}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
