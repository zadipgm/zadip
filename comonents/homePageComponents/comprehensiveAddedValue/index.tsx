import * as React from "react";
import {
  ComprehensiveContainer,
  Description,
  DescriptionVision,
  Title,
  ImageWrapper,
  Wrapper,
} from "./styled.components";
import { useTheme } from "styled-components";

const ComprehensiveAddedValue = () => {
  const { translations } = useTheme();
  return (
    <ComprehensiveContainer>
      <Wrapper>
        <ImageWrapper>
          <img
            src={"https://www.zadip.com/en/images/vision2030.png"}
            alt={"2030"}
            width={"100%"}
            height={"100%"}
          />
        </ImageWrapper>
        <Description>
          <Title>{translations?.valueAddesHeading}</Title>
          <DescriptionVision
            dangerouslySetInnerHTML={{
              __html: translations?.valueAddesDescription as string,
            }}
          ></DescriptionVision>
        </Description>
      </Wrapper>
    </ComprehensiveContainer>
  );
};
export default ComprehensiveAddedValue;
