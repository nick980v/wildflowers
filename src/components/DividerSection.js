"use client";

import styled from "styled-components";
import Image from "next/image";

const DividerContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-left: calc(-168px);
  margin-top: 100px;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  z-index: 1;
`;

const StyledDivider = styled(Image)`
  width: 100%;
  height: auto;
`;

const DividerHeading = styled.h1`
  font-size: 47.78px;
  color: white;

  span {
    color: #92262a;
  }
`;

const DividerParagraph = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 23.05px;
`;

const DividerSection = () => {
  return (
    <DividerContainer>
      <ContentContainer>
        <DividerHeading>
          We believe that children thrive when given the freedom to
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
