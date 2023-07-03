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
import Image from "next/image";

const ComprehensiveAddedValue = () => {
  const { translations } = useTheme();
  return (
    <ComprehensiveContainer>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={"/images/vision2030.png"}
            alt={"2030"}
            width={360}
            height={225}
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
