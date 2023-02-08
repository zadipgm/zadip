import * as React from "react";
import { useTheme } from "styled-components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import { Container, Wrapper, MainLogo, OtherLogo } from "./styled.components";
const ProductSection = () => {
  const { translations, locale } = useTheme();

  return (
    <>
      <AnimationBar
        description={translations?.elmpartner as string}
        headingColor={"#0969a5d6;"}
        descriptionColor={"#737c85"}
        title={translations?.egovService as string}
      />
      <Container>
        <Wrapper>
          <MainLogo>
            <img src="/images/eGov.svg" alt="" width={"100%"} height={"100%"} />
          </MainLogo>
          <OtherLogo>
            <img
              src="/images/emuqeem.svg"
              alt="muqeem"
              width={80}
              height={80}
            />
            <img src="/images/etam.svg" alt="tam" width={80} height={80} />
            <img
              src="/images/emasarat.svg"
              alt="masarat"
              width={80}
              height={80}
            />
            <img src="/images/esmart.svg" alt="smart" width={80} height={80} />
          </OtherLogo>
        </Wrapper>
      </Container>
    </>
  );
};
export default ProductSection;
