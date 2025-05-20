"use client";

import styled from "styled-components";
import FAQ from "./FAQ";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  font-size: 47.78px;
  color: white;
  text-align: center;
  margin-bottom: 126px;
`;

const FAQS = () => {
  return (
    <Container>
      <StyledHeading>Frequently asked questions.</StyledHeading>
      <FAQ
        question="What happens if we miss a week?"
        answer="The age range of the children is from 0 to 6 years old."
      />
      <FAQ
        question="What should we wear?"
        answer="The age range of the children is from 0 to 6 years old."
      />
      <FAQ
        question="Is it adaptable for all ages?"
        answer="The age range of the children is from 0 to 6 years old."
      />
    </Container>
  );
};

export default FAQS;
