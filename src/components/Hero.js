"use client";

import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";

const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    margin-top: 60px;
  }

  @media (min-width: 768px) {
    margin-top: 80px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 590px;

  @media (min-width: 640px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: auto;
    flex: 1;
    max-width: 600px;
  }
`;

const StyledHeading = styled.h1`
  color: white;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 110%;
  height: auto;

  @media (min-width: 640px) {
    font-size: 42px;
  }

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }

  span {
    color: #d9932c;
  }
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  color: white;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 23.05px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  aspect-ratio: 684/763;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (min-width: 640px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 0;
    width: auto;
    flex: 1;
    max-width: 500px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  position: relative;
`;

const WhiteFlower = styled(Image)`
  position: absolute;
  width: 158px;
  height: auto;
  top: -10px;
  left: -90px;
  z-index: 2;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const BlueFlower = styled(Image)`
  position: absolute;
  width: 325px;
  height: auto;
  bottom: -40px;
  right: -110px;
  z-index: 2;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Hero = () => {
  return (
    <>
      <Container>
        <ContentContainer>
          <StyledHeading>
            &apos;Nature is the infinite sphere of the child&apos;s
            development&apos;
            <br />
            <span style={{ fontSize: "30px" }}> - Friedrich Froebel</span>
          </StyledHeading>
          <StyledParagraph>
            At Wild flowers, we believe that children thrive when given the
            freedom to explore, create and connect with the world around them.
            We see children as naturally curious individuals who, like wild
            flowers, are not meant to grow under the same conditions.
          </StyledParagraph>
          <StyledParagraph>
            Through carefully planned, play-based learning sessions, we support
            children aged 0-8 to develop, learn and thrive as individuals.
          </StyledParagraph>
          <ButtonContainer>
            <Button bgColor="#D9932C" href="/approach">
              Learn More
            </Button>
            <Button bgColor="#D9932C" transparent href="/contact">
              Contact Us
            </Button>
          </ButtonContainer>
        </ContentContainer>
        <ImageContainer>
          <WhiteFlower
            src="/White_flower.svg"
            alt=""
            width={158}
            height={158}
            priority
          />
          <BlueFlower
            src="/Blue_flower.svg"
            alt=""
            width={325}
            height={325}
            priority
          />
          <StyledImage
            src="/riv.jpeg"
            alt="Forest Play"
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            style={{}}
            priority
          />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Hero;
