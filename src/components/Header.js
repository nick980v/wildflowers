// src/components/Header.js
"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

const Navbar = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavHeading = styled.h1`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #d9932c;
  }
  font-size: 16px;

  @media (min-width: 640px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const NavList = styled.ul`
  display: none;
  gap: 8px;
  color: white;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  color: white;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background: #062f21;
  padding: 20px;
  gap: 16px;
  width: 100%;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

// className="flex justify-between items-center py-4 px-8"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      {/* Logo on the left */}
      <div className="text-2xl font-semibold">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Wildflowers Logo"
            width={279}
            height={37}
            priority
            style={{ width: "auto", height: "auto", maxWidth: "200px" }}
          />
        </Link>
      </div>

      {/* Mobile menu button */}
      <MobileMenuButton onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </MobileMenuButton>

      {/* Navigation links */}
      <NavList>
        <li>
          <Link href="/approach">
            <NavHeading>Our Approach</NavHeading>
          </Link>
        </li>
        <li>
          <Link href="/fees">
            <NavHeading>Service & fees</NavHeading>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <NavHeading>About</NavHeading>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <NavHeading>Gallery</NavHeading>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <NavHeading>Contact</NavHeading>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <NavHeading>News</NavHeading>
          </Link>
        </li>
      </NavList>

      {/* Mobile menu */}
      <MobileMenu $isOpen={isMenuOpen}>
        <Link href="/approach" onClick={() => setIsMenuOpen(false)}>
          <NavHeading>Our Approach</NavHeading>
        </Link>
        <Link href="/fees" onClick={() => setIsMenuOpen(false)}>
          <NavHeading>Service & fees</NavHeading>
        </Link>
        <Link href="/about" onClick={() => setIsMenuOpen(false)}>
          <NavHeading>About</NavHeading>
        </Link>
        <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>
          <NavHeading>Gallery</NavHeading>
        </Link>
        <Link href="/news" onClick={() => setIsMenuOpen(false)}>
          <NavHeading>News</NavHeading>
        </Link>
        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
          <NavHeading>Contact</NavHeading>
        </Link>
      </MobileMenu>
    </Navbar>
  );
};

export default Header;
