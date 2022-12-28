import { Divider } from "@mui/material";
import * as React from "react";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import {
  ProductTopBannerContainer,
  BreadCrumbWrapper,
  BannerHeaderWrapper,
  TopTitle,
  BannerBottomSection,
  BottomTitile,
  BottomDescription,
} from "./styled.components";

const ProductTopBannerSection = () => {
  return (
    <ProductTopBannerContainer>
      <BannerHeaderWrapper>
        <TopTitle>{"CCTV Camera"}</TopTitle>
        <BreadCrumbWrapper>
          <Breadcrumb />
        </BreadCrumbWrapper>
      </BannerHeaderWrapper>
      <Divider />
      <BannerBottomSection>
        <BottomTitile>{"CCTV Camera"}</BottomTitile>
        <BottomDescription>
          {"Hikvision 3 Megapixel high-performance CMOS Analog HD output"}
        </BottomDescription>
      </BannerBottomSection>
    </ProductTopBannerContainer>
  );
};
export default ProductTopBannerSection;
