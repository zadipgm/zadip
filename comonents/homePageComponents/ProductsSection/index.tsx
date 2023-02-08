import Link from "next/link";
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
            <Link href={`/${locale}/eGov_services/muqeem`}>
              <img
                src="/images/emuqeem.svg"
                alt="muqeem"
                width={60}
                height={60}
              />
            </Link>
            <Link href={`/${locale}/eGov_services/tam`}>
              <img src="/images/etam.svg" alt="tam" width={60} height={60} />
            </Link>
            <Link href={`/${locale}/eGov_services/masarat`}>
              <img
                src="/images/emasarat.svg"
                alt="masarat"
                width={60}
                height={60}
              />
            </Link>
            <Link href={`/${locale}/eGov_services/smartgate`}>
              <img
                src="/images/esmart.svg"
                alt="smart"
                width={60}
                height={60}
              />
            </Link>
          </OtherLogo>
        </Wrapper>
      </Container>
    </>
  );
};
export default ProductSection;
