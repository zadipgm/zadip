import * as React from "react";
import CustomizedAccordion from "../Accordion";
import {
  FaqContainer,
  ImageWrapper,
  Wrapper,
  Container,
} from "./styled.components";
const FaqSection = () => {
  return (
    <Container>
      <Wrapper>
        <FaqContainer>
          <CustomizedAccordion />
        </FaqContainer>
        <ImageWrapper>
          <img src="https://zadip.com/images/egov/F09.jpg" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};
export default FaqSection;
