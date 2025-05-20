import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

const Line = styled.div`
  border-bottom: 1px solid #fffcfa;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column; /* Stack items vertically on mobile */
    align-items: center; /* Align items to the start */
    gap: 8px; /* Reduce gap on mobile */
    padding-bottom: 15px; /* Adjust padding for mobile */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;

  @media (max-width: 767px) {
    width: 100%; /* Allow content wrapper to take full width */
    gap: 16px; /* Adjust gap between image and heading */
  }
`;

const StyledHeading = styled.h1`
  font-size: 39.87px;
  color: white;

  @media (max-width: 767px) {
    font-size: 24px; /* Reduce font size on mobile */
  }
`;

const FAQImage = styled(Image)`
  width: 87.96px;
  height: auto;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 50px; /* Reduce image size on mobile */
    height: auto;
  }
`;

const AnswerContainer = styled.div`
  margin-top: 16px;
  color: white;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: 767px) {
    margin-top: 8px; /* Adjust top margin on mobile */
    padding-left: 0; /* Remove left padding when stacked */
    padding-bottom: 15px; /* Add padding below the answer */
  }
`;

const FAQ = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <Container>
        <ContentWrapper>
          <FAQImage src="/FAQ.svg" alt="FAQ" width={87.96} height={79.16} />
          <StyledHeading>{question}</StyledHeading>
        </ContentWrapper>
        <Button bgColor={"#9CB7D4"} onClick={toggleAnswer}>
          {showAnswer ? "Hide answer" : "Show answer"}
        </Button>
      </Container>
      {showAnswer && <AnswerContainer>{answer}</AnswerContainer>}
      <Line />
    </>
  );
};

export default FAQ;
