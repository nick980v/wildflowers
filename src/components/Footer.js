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
            <p style={{ color: "white" }}>(555) 123-4567</p>
          </ContactUsContainer>
          <ContactUsContainer>
            <Image src="/FB.svg" alt="Facebook" width={20} height={20} />
            <p style={{ color: "white" }}>Wild flowers Community</p>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <div style={{ textAlign: "left", flex: 1 }}>
            <h1
              style={{ color: "white", marginBottom: "1rem", fontSize: "28px" }}
            >
              Interested in us?
            </h1>
            <p style={{ color: "white", fontSize: "23px" }}>
              Whether you have a question, want to learn more about our
              sessions, or are ready to join the Wild flowers community, we’re
              here and happy to help.
            </p>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button href="/contact" bgColor="#D9932C">
              Contact Us
            </Button>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} WildFlowers. All rights reserved.
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
      </div>
    </footer>
  );
};

export default Footer;
