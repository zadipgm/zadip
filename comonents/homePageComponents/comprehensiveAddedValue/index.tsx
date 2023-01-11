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
import visiionIMage2030 from "../../../public/images/saudi-vision.jpg";
import { useTranslation } from "react-i18next";

const ComprehensiveAddedValue = () => {
  const { t } = useTranslation();
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
          <Title>{t("valueAddesHeading")}</Title>
          <DescriptionVision
            dangerouslySetInnerHTML={{
              __html: `${t("valueAddesDescription")}`,
            }}
          ></DescriptionVision>
        </Description>
      </Wrapper>
    </ComprehensiveContainer>
  );
};
export default ComprehensiveAddedValue;
