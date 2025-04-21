import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
`;

const StyledHeading = styled.h1`
  font-size: 39.87px;
  color: white;
`;

const FAQImage = styled(Image)`
  width: 87.96px;
  height: auto;
  object-fit: contain;
`;

const FAQ = ({ question, answer }) => {
  return (
    <Container>
      <ContentWrapper>
        <FAQImage src="/FAQ.svg" alt="FAQ" width={87.96} height={79.16} />
        <StyledHeading>{question}</StyledHeading>
      </ContentWrapper>
      <Button bgColor={"#9CB7D4"}>Show answer</Button>
    </Container>
  );
};

export default FAQ;
