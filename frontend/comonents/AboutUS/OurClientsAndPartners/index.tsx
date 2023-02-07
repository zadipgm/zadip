import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import {
  Container,
  Heading,
  Wrapper,
  ClientWrapper,
  ClientList,
  ClientListItems,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { useTheme } from "styled-components";
import Image from "next/image";
import _data from "../../../DataLayer/client.json";
const OurClientsAndPartners = () => {
  const { translations, colors } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {translations?.home}
    </Links>,
    <Typography
      key="3"
      color="text.primary"
      style={{ color: colors.lightBlue }}
    >
      {translations?.ourClientsandPartners}
    </Typography>,
  ];
  return (
    <Container>
      <Wrapper>
        <Heading>{translations?.client}</Heading>
        <Breadcrumb color={colors.lightBlue} breadcrumbs={breadcrumbs} />
      </Wrapper>
      <AnimationBar
        description={translations?.partnerHeadingDes as string}
        headingColor={colors.lightBlue}
        descriptionColor={"#737c85"}
        title={translations?.ourClientsandPartners}
      />
      <ClientWrapper>
        <ClientList>
          {_data.our_clients.map((item) => {
            return (
              <ClientListItems key={item.id}>
                <Image
                  src={item.image}
                  alt={"client"}
                  width={130}
                  height={130}
                />
              </ClientListItems>
            );
          })}
        </ClientList>
      </ClientWrapper>
    </Container>
  );
};
export default OurClientsAndPartners;
