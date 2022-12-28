import * as React from "react";
import _data from "../../../DataLayer/technicalSpecsTable.json";
import Breadcrumb from "../Breadcrumb";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Title,
  TitleWrapper,
  SpecsMainSection,
  SpecsContainer,
  SpecsWrapper,
  SpecsTitle,
  GoBackButton,
  SpecsContainerBGImage,
  SpecsDescription,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { useRouter } from "next/router";
import LocaleContext from "../../../LocaleContext";
import BadgeSvg from "../../../public/icons/badgeSvg";
import IconComponent from "../IconComponent";
interface ISpecsData {
  id: number;
  name?: string;
  description: string;
  icon?: string;
}
interface IProps {
  data: ISpecsData[];
  title: string;
  page: string;
}
const TechnicalSpecsTable: React.FC<IProps> = ({ data, title, page }) => {
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);

  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${page}`}
    >
      {page}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${page}/${router?.query?.sub_category}?type=${router.query.detail}`}
    >
      {router.query.sub_category}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      {page} detail
    </Typography>,
  ];

  return (
    <SpecsContainerBGImage className="ll">
      <GoBackButton onClick={() => router.back()}>
        <KeyboardBackspaceIcon />
        Go Back
      </GoBackButton>
      <SpecsMainSection>
        <TitleWrapper>
          <Title>{title}</Title>
          <Breadcrumb color="#0196e3" breadcrumbs={breadcrumbs} />
        </TitleWrapper>
        <SpecsContainer>
          {data.map((item) => {
            return (
              <SpecsWrapper
                key={item.id}
                className={
                  page === "services" || page === "muaref"
                    ? "services-detail"
                    : ""
                }
              >
                {page === "services" && <BadgeSvg width="25px" height="25px" />}
                {page === "muaref" && (
                  <IconComponent
                    icon={item.icon}
                    fill={""}
                    width={"40px"}
                    height={"40px"}
                  />
                )}
                {item.name && <SpecsTitle>{item.name}</SpecsTitle>}
                <SpecsDescription>{item.description}</SpecsDescription>
              </SpecsWrapper>
            );
          })}
        </SpecsContainer>
      </SpecsMainSection>
    </SpecsContainerBGImage>
  );
};
export default TechnicalSpecsTable;
