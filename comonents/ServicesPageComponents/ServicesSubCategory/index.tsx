import * as React from "react";
import {
  ProductBreadcrumbWrapper,
  ProductSubCategoryWrapper,
} from "../../ProductPageComponents/ProductSubCategory/styled.components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import servicesData from "../../../DataLayer/services.json";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { useRouter } from "next/router";
import SubCategory from "../../ReuseAbleComponents/SubCategories";
import { ServicesSubCategoryContainer } from "./styled.components";
import { useTheme } from "styled-components";
const ServicesSubCategory = () => {
  const { isLTR, locale, translations } = useTheme();
  const router = useRouter();
  const filter_services = servicesData.sub_services.filter(
    (item) => item.type === router.query.type
  );
  const main_category = filter_services[0];
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {translations?.home}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/services`}
    >
      {translations?.services}
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
          description={translations?.featureDescription as string}
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
