import * as React from "react";
import { useTheme } from "styled-components";
import {
  AllServices,
  AllServicesImageWrapper,
  BreadCrumbWrapper,
  Container,
  Heading,
  List,
  ListItem,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";
import ListComponent from "../ReuseAbleComponents/ListComponent";
import list from "../../DataLayer/list.json";
import _data from "../../DataLayer/professional_services.json";
const ProfessionalServices = () => {
  const { isLTR, translations, colors, locale, device } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#0196e3" href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      {translations?.proservicesTitle}
    </Typography>,
  ];
  return (
    <Container>
      <BreadCrumbWrapper>
        <Heading>{translations?.proservicesTitle}</Heading>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={translations?.projects_it}
        description={translations?.proServicesDescription as string}
        headingColor={colors.lightBlue}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
      />
      <ListComponent list={list.professional_list} />
      <AllServices>
        {_data.professional_services.map((item, index) => {
          return (
            <>
              <AnimationBar
                title={isLTR ? item.title_en : item.title_ar}
                description={""}
                headingColor={colors.lightBlue}
                descriptionColor={""}
                fontSize={"14px"}
              />
              <List key={index}>
                <ListItem>
                  {item.images.map((path, key) => {
                    return (
                      <AllServicesImageWrapper key={key}>
                        <img src={path} alt="" width={"auto"} height={"auto"} />
                      </AllServicesImageWrapper>
                    );
                  })}
                </ListItem>
              </List>
            </>
          );
        })}
      </AllServices>
      <OrderNowForm
        title={translations?.contactsalesnow as string}
        buttonTitle={translations?.contactsalesnow as string}
        icon={"salesSvg"}
        page={"Professional Services"}
        language={locale}
        device={device}
        eventType="userClick"
        eventAction="onSubmit"
        screenName={"Professional Services"}
        eventLabel={translations?.requestService as string}
      />
    </Container>
  );
};
export default ProfessionalServices;
