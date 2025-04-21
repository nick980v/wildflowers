// src/components/Header.js
"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Navbar = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const NavHeading = styled.h1`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #d9932c;
  }
`;

// className="flex justify-between items-center py-4 px-8"

const Header = () => {
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
          />
        </Link>
      </div>

      {/* Navigation links on the right */}
      <nav>
        <ul className="flex gap-8 text-2xl text-white">
          <li>
            <Link href="/approach">
              <NavHeading>Our Approach</NavHeading>
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
            <Link href="/fees">
              <NavHeading>Fees</NavHeading>
            </Link>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default Header;
