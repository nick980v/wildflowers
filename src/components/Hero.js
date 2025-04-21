"use client";

import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  margin-top: 186px;
  width: 590px;
`;

const StyledHeading = styled.h1`
  color: white;
  font-size: 82.56px;
  font-style: normal;
  font-weight: 900;
  line-height: 110%;
  height: 250px;
  span {
    color: #d9932c;
  }
`;

const StyledParagraph = styled.p`
  font-size: 27.65px;
  color: white;
  margin-top: 52px;
`;

const ButtonContainer = styled.div`
  margin-top: 52px;
  display: flex;
  gap: 20px;
`;

const Hero = () => {
  return (
    <Container>
      <StyledHeading>
        Where <span>nature</span> brings <span>learning</span> to life!
      </StyledHeading>
      <StyledParagraph>
        At Wild flowers, we believe that children thrive when given the freedom
        to explore, create, and connect with the world around them.
      </StyledParagraph>
      <ButtonContainer>
        <Button bgColor="#D9932C" href="/approach">
          Learn More
        </Button>
        <Button bgColor="#D9932C" transparent href="/contact">
          Contact Us
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Hero;
