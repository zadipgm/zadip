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

const HighLightProductSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <HighLightProductSectionContainer>
        <HighLightProductSectionBGImage>
          <HighLightProductWrapper>
            <HighLightProductContent>
              <Title>{t("hrm")}</Title>
              <SUbTitle>{t("Ektefa")}</SUbTitle>
              <Description
                dangerouslySetInnerHTML={{ __html: t("description") }}
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
