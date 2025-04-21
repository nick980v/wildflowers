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
              <h1>Our Approach</h1>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h1>About</h1>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <h1>Gallery</h1>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h1>Contact</h1>
            </Link>
          </li>
          <li>
            <Link href="/fees">
              <h1>Fees</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default Header;
