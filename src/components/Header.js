"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  position: relative;

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

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 20px;
    background-image: ${(props) =>
      props.$isActive ? "url('/Nav_underline.svg')" : "none"};
    background-repeat: no-repeat;
    background-position: ${(props) => (props.$isMobile ? "left" : "center")};
    opacity: ${(props) => (props.$isActive ? 1 : 0)};
    transition: opacity 0.3s ease;
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <div>
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Wild flowers Logo"
            width={279}
            height={37}
            priority
            style={{
              maxWidth: "200px",
              height: "auto",
            }}
          />
          <Image
            src="/Slogan.svg"
            alt="Wild flowers Slogan"
            width={279}
            height={37}
            priority
            style={{ maxWidth: "200px", height: "auto", marginTop: "1rem" }}
          />
        </Link>
      </div>

      <MobileMenuButton onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </MobileMenuButton>

      <NavList>
        <li>
          <NavLink href="/approach" $isActive={pathname === "/approach"}>
            <NavHeading>Our Approach</NavHeading>
          </NavLink>
        </li>
        <li>
          <NavLink href="/offer" $isActive={pathname === "/offer"}>
            <NavHeading>Our Offer & Fees</NavHeading>
          </NavLink>
        </li>
        <li>
          <NavLink href="/about" $isActive={pathname === "/about"}>
            <NavHeading>Meet Us</NavHeading>
          </NavLink>
        </li>

        <li>
          <NavLink href="/calendar" $isActive={pathname === "/calendar"}>
            <NavHeading>Our Calendar</NavHeading>
          </NavLink>
        </li>
        <li>
          <NavLink href="/gallery" $isActive={pathname === "/gallery"}>
            <NavHeading>Gallery</NavHeading>
          </NavLink>
        </li>
        <li>
          <NavLink href="/contact" $isActive={pathname === "/contact"}>
            <NavHeading>Contact</NavHeading>
          </NavLink>
        </li>
      </NavList>

      <MobileMenu $isOpen={isMenuOpen}>
        <NavLink
          href="/approach"
          $isActive={pathname === "/approach"}
          $isMobile={true}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavHeading>Our Approach</NavHeading>
        </NavLink>

        <NavLink
          href="/offer"
          $isActive={pathname === "/offer"}
          $isMobile={true}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavHeading>Our Offer & Fees</NavHeading>
        </NavLink>
        <NavLink
          href="/about"
          $isActive={pathname === "/about"}
          $isMobile={true}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavHeading>Meet Us</NavHeading>
        </NavLink>
        <NavLink
          href="/calendar"
          $isActive={pathname === "/calendar"}
          $isMobile={true}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavHeading>Our Calendar</NavHeading>
        </NavLink>
        <NavLink
          href="/gallery"
          $isActive={pathname === "/gallery"}
          $isMobile={true}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavHeading>Gallery</NavHeading>
        </NavLink>
        <NavLink
          href="/contact"
          $isActive={pathname === "/contact"}
          $isMobile={true}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavHeading>Contact</NavHeading>
        </NavLink>
      </MobileMenu>
    </Navbar>
  );
};

export default Header;
