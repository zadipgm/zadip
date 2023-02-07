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
const MuarefPage = () => {
  const { translations, colors } = useTheme();
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

        <img src="/images/pro3.png" alt="muaref" width={100} height={60} />

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
              <img src="/images/qr.png" alt="muaref QR" />
            </ImageWrapper>
            <Title>{translations?.muarefQR}</Title>
          </ImageContainer>
          <Description>{translations?.murarefQrdescription}</Description>
        </ListItems>
        <ListItems>
          <ImageContainer>
            <ImageWrapper>
              <div></div>
              <img src="/images/device.png" alt="muaref device" />
            </ImageWrapper>
            <Title>{translations?.muarefDevice}</Title>
          </ImageContainer>
          <Description>{translations?.muarefDeviceDescription}</Description>
        </ListItems>
        <ListItems>
          <ImageContainer>
            <ImageWrapper>
              <div></div>
              <img src="/images/location.png" alt="muaref location" />
            </ImageWrapper>
            <Title>{translations?.muarefLocation}</Title>
          </ImageContainer>
          <Description>{translations?.muarefLocationDescription}</Description>
        </ListItems>
        <ListItems>
          <ImageContainer>
            <ImageWrapper>
              <div></div>
              <img src="/images/mubashir.png" alt="muaref mubashir" />
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
      />
    </Container>
  );
};
export default MuarefPage;
