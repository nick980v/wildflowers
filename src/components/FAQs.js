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
  margin-bottom: 100px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
    font-size: 40px;
  }
`;

const FAQS = () => {
  return (
    <Container>
      <StyledHeading id="FAQs">Frequently Asked Questions (FAQs)</StyledHeading>
      <FAQ
        question="What happens if we miss a week?"
        answer="If a family misses a week of Wild flowers, there's no need to worry. We understand that life with little ones can be unpredictable. While we encourage families to attend all 12 sessions to gain the full benefit of the offer, you're always welcome to rejoin when you're ready. For those who've paid in advance, we offer a full refund for any missed session with at least 48 hours' notice, or in cases of extenuating circumstances. Families paying weekly can simply skip that week! We'll also keep you updated through our group chat, so you won't miss important news, reminders, or the opportunity to stay connected with the group during your time away."
      />
      <FAQ
        question="What should we wear?"
        answer="At Wild flowers, we embrace the outdoors in all seasons, rain or shine! Children should come dressed in comfortable, weather-appropriate outdoor clothing and footwear every week. We recommend layers, waterproofs, and wellies when it's wet or muddy, and sun hats in warmer weather. Our sessions involve a lot of movement, exploration, and sometimes a bit of mess! If any additional or specific clothing is needed for a session (like water play or extra warm layers), we'll always let you know in advance so you can feel prepared."
      />
      <FAQ
        question="Are the sessions adaptable for all ages?"
        answer="Absolutely! Wild flowers sessions are thoughtfully designed to suit a wide age range, from babies as young as 6 months up to children aged 5 years. Each activity is flexible and can be adapted to meet your child's individual stage of development and interests. Whether your little one is crawling, toddling, or ready to take on more structured play, there's space for them to engage at their own pace. We believe in child-led learning, so each session naturally accommodates different abilities, making sure every child feels included, supported, and inspired."
      />
      <FAQ
        question="Is Wild flowers open during half term?"
        answer="Yes! Wild flowers is open during school half terms, welcoming families to enjoy seasonal learning and play throughout the year. We take a break during the Christmas, Easter, and summer holidays to rest, reflect, and prepare for the next chapter of our journey together."
      />
    </Container>
  );
};

export default FAQS;
