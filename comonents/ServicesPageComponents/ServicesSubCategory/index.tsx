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
const ServicesSubCategory = () => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/services`}
    >
      Services
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      {router.query.sub_category}
    </Typography>,
  ];
  const filter_services = servicesData.sub_services.filter(
    (item) => item.type === router.query.type
  );
  return (
    <ServicesSubCategoryContainer>
      <ProductSubCategoryWrapper>
        <ProductBreadcrumbWrapper>
          <Breadcrumb color={"#fff"} breadcrumbs={breadcrumbs} />
        </ProductBreadcrumbWrapper>
        <AnimationBar
          title="Web Development"
          icon={"websiteSvg"}
          color={"#fff"}
          description="We have successfully tied partnerships with global leaders in technology, advertising and building frameworks harnessing best practices to enhance the dependability of our solutions and offerings."
          headingColor={"#fff"}
          descriptionColor={"#fff"}
        />
        <SubCategory sub_categories={filter_services} page={"services"} />
      </ProductSubCategoryWrapper>
    </ServicesSubCategoryContainer>
  );
};
export default ServicesSubCategory;
