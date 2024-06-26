import * as React from "react";
import { useTheme } from "styled-components";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  BreadCrumbWrapper,
  Container,
  Heading,
  List,
  ListItems,
  Title,
  Description,
  ImageWrapper,
  ImageContainer,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";
import Image from "next/image";
const MuarefPage = () => {
  const { translations, colors, locale, device } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color={`${colors.lightBlue}`} href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="inherit" style={{ color: colors.lightBlue }}>
      {translations?.featureTitleMuaref}
    </Typography>,
  ];
  return (
    <Container>
      <BreadCrumbWrapper>
        <Heading>{translations?.featureTitleMuaref}</Heading>

        <Image src="/images/pro3.webp" alt="muaref" width={100} height={60} />

        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        description={translations?.muarefDes as string}
        headingColor={colors.lightBlue}
        descriptionColor={"#737c85;"}
        title={translations?.featureTitleMuaref}
      />
      <List>
        <ListItems>
          <ImageContainer>
            <ImageWrapper>
              <div></div>
              <img src="/images/qr.svg" alt="muaref QR" />
            </ImageWrapper>
            <Title>{translations?.muarefQR}</Title>
          </ImageContainer>
          <Description>{translations?.murarefQrdescription}</Description>
        </ListItems>
        <ListItems>
          <ImageContainer>
            <ImageWrapper>
              <div></div>
              <img src="/images/device.svg" alt="muaref device" />
            </ImageWrapper>
            <Title>{translations?.muarefDevice}</Title>
          </ImageContainer>
          <Description>{translations?.muarefDeviceDescription}</Description>
        </ListItems>
        <ListItems>
          <ImageContainer>
            <ImageWrapper>
              <div></div>
              <img src="/images/location.svg" alt="muaref location" />
            </ImageWrapper>
            <Title>{translations?.muarefLocation}</Title>
          </ImageContainer>
          <Description>{translations?.muarefLocationDescription}</Description>
        </ListItems>
        <ListItems>
          <ImageContainer>
            <ImageWrapper>
              <div></div>
              <img src="/images/mubashir.svg" alt="muaref mubashir" />
            </ImageWrapper>
            <Title>{translations?.muarefIdentifier}</Title>
          </ImageContainer>
          <Description>{translations?.muarefIdentifierDescription}</Description>
        </ListItems>
      </List>
      <OrderNowForm
        title={translations?.requestService as string}
        buttonTitle={translations?.requestService as string}
        icon={"salesSvg"}
        page={"Muaref"}
        language={locale}
        device={device}
        eventType="userClick"
        eventAction="onSubmit"
        screenName={"Muaref"}
        eventLabel={translations?.requestService as string}
      />
    </Container>
  );
};
export default MuarefPage;
