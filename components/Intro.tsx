import { ReactElement } from "react";
import styled from "styled-components";

const IntroWrapper = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const IntroHeader = styled.h1`
  font-size: 3.815rem;
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  font-size: 1.25rem;
`;

const Intro = (): ReactElement => {
  return (
    <IntroWrapper>
      <IntroHeader>Sandwich Cemetery</IntroHeader>
      <IntroText>Coming soon</IntroText>
    </IntroWrapper>
  );
};

export default Intro;
