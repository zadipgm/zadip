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
      <Wrapper className="zadip">
        <ImageWrapper>
          <Image src={visiionIMage2030} alt={"2030"} width={526} height={442} />
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
      <Wrapper>
        <Description>
          <Title>{t("zadipGroups")}</Title>
          <DescriptionVision
            dangerouslySetInnerHTML={{
              __html: `${t("zadip")}`,
            }}
          ></DescriptionVision>
        </Description>
        <ImageWrapper>
          <VisionImage
            src="https://www.zadip.com/en/images/logo-full-color.png"
            width={"100%"}
            height={"auto"}
          />
        </ImageWrapper>
      </Wrapper>
    </ComprehensiveContainer>
  );
};
export default ComprehensiveAddedValue;
