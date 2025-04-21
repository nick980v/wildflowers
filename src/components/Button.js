"use client";

import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  display: flex;
  width: 187px;
  height: 53px;
  padding: 6px 41px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  ${(props) =>
    props.$transparent
      ? `
    background: transparent;
    border: 1px solid ${props.$bgColor};
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `
      : `
    background: ${props.$bgColor || "#D9932C"};
    border: none;
    color: white;
    &:hover {
      opacity: 0.9;
    }
  `}
`;

const Button = ({ children, transparent = false, bgColor, onClick, href }) => {
  const isExternal = href?.startsWith("http");

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <StyledButton as="span" $transparent={transparent} $bgColor={bgColor}>
            {children}
          </StyledButton>
        </a>
      );
    } else {
      return (
        <Link href={href}>
          <StyledButton as="span" $transparent={transparent} $bgColor={bgColor}>
            {children}
          </StyledButton>
        </Link>
      );
    }
  }

  return (
    <StyledButton
      $transparent={transparent}
      $bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
