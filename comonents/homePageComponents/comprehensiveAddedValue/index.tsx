import * as React from "react";
import {
  ComprehensiveContainer,
  Description,
  DescriptionVision,
  Title,
  ImageWrapper,
  Wrapper,
  VisionImage,
} from "./styled.components";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

const ComprehensiveAddedValue = () => {
  const { t } = useTranslation();
  const { translations } = useTheme();
  return (
    <ComprehensiveContainer>
      <Wrapper>
        <ImageWrapper>
          <img
            src={"https://www.zadip.com/en/images/vision2030.png"}
            alt={"2030"}
            width={""}
            height={""}
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
