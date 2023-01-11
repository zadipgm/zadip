import * as React from "react";
import {
  ProductBreadcrumbWrapper,
  ProductSubCategoryContainer,
  ProductSubCategoryWrapper,
} from "../../ProductPageComponents/ProductSubCategory/styled.components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import servicesData from "../../../DataLayer/services.json";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { useRouter } from "next/router";
import LocaleContext from "../../../LocaleContext";
import SubCategory from "../../ReuseAbleComponents/SubCategories";
import { ServicesSubCategoryContainer } from "./styled.components";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
const ServicesSubCategory = () => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const { t } = useTranslation();
  const { isLTR } = useTheme();
  const filter_services = servicesData.sub_services.filter(
    (item) => item.type === router.query.type
  );
  const main_category = filter_services[0];
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {t("home")}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/services`}
    >
      {t("services")}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      {isLTR
        ? filter_services[0]?.type?.replaceAll("_", " ")
        : filter_services[0]?.type_ar}
    </Typography>,
  ];

  return (
    <ServicesSubCategoryContainer bgimage={main_category?.main_image}>
      <ProductSubCategoryWrapper>
        <ProductBreadcrumbWrapper>
          <Breadcrumb color={"#fff"} breadcrumbs={breadcrumbs} />
        </ProductBreadcrumbWrapper>
        <AnimationBar
          icon={main_category?.icon}
          color={"#fff"}
          title={
            isLTR ? main_category?.main_title_en : main_category?.main_title_ar
          }
          description={t("featureDescription")}
          headingColor={"#fff"}
          descriptionColor={"#fff"}
          fontSize={"22px"}
        />
        <SubCategory sub_categories={filter_services} page={"services"} />
      </ProductSubCategoryWrapper>
    </ServicesSubCategoryContainer>
  );
};
export default ServicesSubCategory;
