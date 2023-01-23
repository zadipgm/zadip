import * as React from "react";
import TechnicalSpecsTable from "../../ReuseAbleComponents/TechnicalSpecifications";
import _data from "../../../DataLayer/technicalSpecsTable.json";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import detailsPageData from "../../../DataLayer/product.json";
import services from "../../../DataLayer/services.json";
import { useRouter } from "next/router";
import OverView from "../../ReuseAbleComponents/OverView";
import Links from "@mui/material/Link";
import LocaleContext from "../../../LocaleContext";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import {
  GoBackButton,
  PageBreadCrumbWrapper,
  DetailsWrapper,
} from "./styled.components";
import RelatedProducts from "../RelatedSection";
import { Typography } from "@mui/material";
import { useTheme } from "styled-components";
interface IRelated {
  id?: number;
  title_en?: string;
  title_ar?: string;
  icon?: string;
  description?: string;
  link?: string;
  type?: string;
  specs?: boolean;
  image?: string;
}
interface ITechnical_specs {
  id?: number;
  name_en?: string;
  name_ar?: string;
  icon?: string;
  description?: string;
}
interface IProps {
  title: string | undefined;
  page: string;
  image: string;
  filterRelatedData: IRelated[];
  description?: string;
  technical_specs?: ITechnical_specs[] | undefined;
}
const DetailsComponent: React.FC<IProps> = ({
  title,
  page,
  image,
  filterRelatedData,
  description,
  technical_specs,
}) => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const { isLTR, translations } = useTheme();
  const query = router?.query?.sub_category;
  const filterProducts = detailsPageData.all.filter(
    (item) => item.link === query
  );
  const filterServices = services.sub_services.filter(
    (item) => item.link === query
  );
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {translations?.home}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${page}`}
    >
      {page === "products" ? `${translations?.products}` : page}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${page}/${router?.query?.sub_category}?type=${router.query.detail}`}
    >
      {page === "services"
        ? `${
            isLTR
              ? filterServices[0]?.type?.replaceAll("_", " ")
              : filterServices[0]?.type_ar
          }`
        : `${
            isLTR
              ? filterProducts[0]?.type?.replaceAll("_", " ")
              : filterProducts[0]?.type_ar
          }`}
    </Links>,
    <Typography>
      {page === "services"
        ? `${isLTR ? filterServices[0]?.title_en : filterServices[0]?.title_ar}`
        : `${
            isLTR ? filterProducts[0]?.title_en : filterProducts[0]?.title_ar
          }`}
    </Typography>,
  ];

  return (
    <DetailsWrapper>
      <PageBreadCrumbWrapper>
        <GoBackButton onClick={() => router.back()}>
          <KeyboardBackspaceIcon />
          {translations?.goBack}
        </GoBackButton>
        <Breadcrumb color="#0196e3" breadcrumbs={breadcrumbs} />
      </PageBreadCrumbWrapper>
      <OverView text={description} image={image} title={title} />
      <TechnicalSpecsTable
        data={technical_specs}
        title={"Technical Specifications"}
        page={page}
      />
      <RelatedProducts relatedData={filterRelatedData} page={page} />
    </DetailsWrapper>
  );
};
export default DetailsComponent;
