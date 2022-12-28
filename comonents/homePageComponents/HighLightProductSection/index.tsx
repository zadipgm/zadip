import * as React from "react";
import {
  HighLightProductSectionContainer,
  HighLightProductSectionBGImage,
  HighLightProductWrapper,
  HighLightProductContent,
  Title,
  SUbTitle,
  Description,
  ProductVedio,
  VedioWrapper,
} from "./styled.components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import ViewMore from "../../ReuseAbleComponents/ViewMoreButton";
import { useTranslation } from "react-i18next";
const HighLightProductSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <AnimationBar
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        title={"HIGHLIGHT PRODUCT"}
        description={t("featureDescription")}
      />
      <HighLightProductSectionContainer>
        <HighLightProductSectionBGImage>
          <HighLightProductWrapper>
            <HighLightProductContent>
              <Title>{t("hrm")}</Title>
              <SUbTitle>{t("Ektefa")}</SUbTitle>
              <Description>{t("description")}</Description>
              <ViewMore color={"#fff"} />
            </HighLightProductContent>
            <ProductVedio>
              <VedioWrapper>
                <iframe
                  width="100%"
                  height="260"
                  src="https://www.youtube.com/embed/zkTYTA9cx6k?rel=0&amp;controls=0&amp;showinfo=0"
                  frameBorder="0"
                  allowFullScreen={true}
                ></iframe>
              </VedioWrapper>
            </ProductVedio>
          </HighLightProductWrapper>
        </HighLightProductSectionBGImage>
      </HighLightProductSectionContainer>
    </>
  );
};
export default HighLightProductSection;
