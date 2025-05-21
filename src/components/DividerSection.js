"use client";

import styled from "styled-components";
import Image from "next/image";

const DividerContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-left: -16px;
  margin-top: 60px;

  @media (min-width: 640px) {
    margin-left: -32px;
    margin-top: 80px;
  }

  @media (min-width: 768px) {
    margin-left: -48px;
    margin-top: 100px;
  }

  @media (min-width: 1024px) {
    margin-left: calc(-168px);
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 733px;
  padding: 0 20px;
  z-index: 1;

  @media (max-width: 1023px) {
    position: relative;
    z-index: 2;
    background-color: #9cb7d4;
    padding: 20px;
    margin: 20px auto;
    border-radius: 40px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    transform: translate(-40%, -50%);
    top: 50%;
    left: 60%;
    background-color: transparent;
    padding: 0 20px;
    margin: 0;
  }
`;

const StyledDivider = styled(Image)`
  width: 100%;
  height: auto;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const FlowerGroup = styled(Image)`
  display: none;
  position: absolute;
  /* width: 500px; */
  height: auto;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const DividerHeading = styled.h1`
  font-size: 28px;
  color: white;

  @media (min-width: 640px) {
    font-size: 36px;
  }

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 1024px) {
    font-size: 47.78px;
    text-align: left;
  }

  span {
    color: #92262a;
  }
`;

const DividerParagraph = styled.p`
  margin-top: 16px;
  color: white;
  font-size: 16px;

  @media (min-width: 640px) {
    font-size: 18px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 23.05px;
    margin-top: 24px;
    text-align: left;
  }
`;

const DividerSection = () => {
  return (
    <DividerContainer>
      <FlowerGroup
        src="/Group-flowers.svg"
        alt="Decorative flowers"
        width={500}
        height={300}
        priority
      />
      <ContentContainer>
        <DividerHeading>
          We believe that children thrive when given the freedom to{" "}
          <span>explore</span>, <span>create</span>, and <span>connect</span>.
        </DividerHeading>
        <DividerParagraph>
          Inspired by the pioneering works of Froebel and Montessori, our warm
          and welcoming early years community provides a space where curiosity
          blossoms and learning feels like a natural adventure.
        </DividerParagraph>
        <DividerParagraph>
          Our sessions are designed for children aged 0-5, offering a nurturing
          space where they can explore, play, and grow alongside their parents
          and carers. We believe that learning is a shared journey, and our
          welcoming environment encourages both children and their grown-ups to
          connect, discover, and experience the joy of learning together.
        </DividerParagraph>
      </ContentContainer>
      <StyledDivider
        src="/BlueDivider.svg"
        alt="Divider"
        width={1920}
        height={200}
        priority
      />
    </DividerContainer>
  );
};

export default DividerSection;
