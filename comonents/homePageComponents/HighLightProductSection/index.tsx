import * as React from "react";
import {
  HighLightProductSectionContainer,
  HighLightProductSectionBGImage,
  HighLightProductWrapper,
  HighLightProductContent,
  Title,
  SUbTitle,
  Description,
} from "./styled.components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import ViewMore from "../../ReuseAbleComponents/ViewMoreButton";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import PlaySvg from "../../../public/icons/playSvg";
import ModalComponent from "../../ReuseAbleComponents/Modal";
import VedioComponent from "../../ReuseAbleComponents/Vedio";
import { t } from "i18next";
import { useTheme } from "styled-components";

const HighLightProductSection = () => {
  const { t } = useTranslation();
  const { isLTR } = useTheme();
  return (
    <>
      <HighLightProductSectionContainer>
        <HighLightProductSectionBGImage>
          <HighLightProductWrapper
            backgroundColor={
              isLTR
                ? "linear-gradient(-30deg,rgb(0 0 0 / 39%) 30%,#000000)"
                : "linear-gradient(-30deg,#000000d4 30%,rgb(0 0 0 / 18%))"
            }
          >
            <HighLightProductContent>
              <Title>{t("egoveservices")}</Title>
              <SUbTitle>{t("certifiedPartner")}</SUbTitle>
              <Description
                dangerouslySetInnerHTML={{
                  __html: t("elmpartner"),
                }}
              ></Description>
            </HighLightProductContent>
            <VedioComponent />
          </HighLightProductWrapper>
        </HighLightProductSectionBGImage>
      </HighLightProductSectionContainer>
    </>
  );
};
export default HighLightProductSection;
