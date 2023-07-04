import * as React from "react";
import { BreadCrumbWrapper, Title } from "../AboutUS/styled.components";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  Container,
  Description,
  Wrapper,
  ButtonWrapper,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { useTheme } from "styled-components";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import Link from "next/link";
const Recruitment = () => {
  const { translations, colors } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color={colors.lightBlue} href="/">
      {translations?.home}
    </Links>,
    <Typography
      key="3"
      color="text.primary"
      style={{ color: colors.lightBlue }}
    >
      {translations?.recruitment}
    </Typography>,
  ];
  return (
    <Container>
      <BreadCrumbWrapper>
        <Title>{translations?.recruitment}</Title>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        headingColor={colors.lightBlue}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
        title={translations?.recruitmentTitle}
        description={""}
      />
      <Wrapper>
        <Description
          dangerouslySetInnerHTML={{
            __html: translations?.recruitmentDescription as string,
          }}
        ></Description>
        <img
          src="/images/recruitment.webp"
          alt="recritment"
          width={100}
          height={100}
        />
      </Wrapper>
      <ButtonWrapper>
        <Link
          href={"https://cadre.sa/"}
          target={"_blank"}
          aria-label={"play store"}
        >
          <img
            src="/images/googlePlay.webp"
            alt="googleapp"
            width={100}
            height={100}
          />
        </Link>
        <Link
          href={"https://cadre.sa/"}
          aria-label={"app store"}
          target={"_blank"}
        >
          <img
            src="/images/appStore.webp"
            alt="appleapp"
            width={100}
            height={100}
          />
        </Link>
      </ButtonWrapper>
    </Container>
  );
};
export default Recruitment;
