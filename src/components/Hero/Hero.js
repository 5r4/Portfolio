import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

function Hero(props) {
  const clickHandler = () => {
    window.location = "https://www.google.com/";
  };

  return (
    <Section raw nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br /> My Personal Portoflio
        </SectionTitle>
        <SectionText>
          Sanctus sanctus sit sit sadipscing eirmod tempor duo amet, sed magna
          kasd at sed et et ut, ipsum diam sed et dolor at nonumy. Duo vero sit
          consetetur ipsum eirmod rebum dolor. Sit ea lorem stet et sea et rebum
          diam ipsum. Accusam invidunt amet tempor et diam ipsum. Et.
        </SectionText>
        <Button onClick={() => clickHandler()}>Learn More</Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
