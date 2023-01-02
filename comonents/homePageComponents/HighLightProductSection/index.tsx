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
// import { useTranslation } from "react-i18next";
import Link from "next/link";
import PlaySvg from "../../../public/icons/playSvg";
import ModalComponent from "../../ReuseAbleComponents/Modal";
import VedioComponent from "../../ReuseAbleComponents/Vedio";

const HighLightProductSection = () => {
  // const { t } = useTranslation();

  return (
    <>
      <HighLightProductSectionContainer>
        <HighLightProductSectionBGImage>
          <HighLightProductWrapper>
            <HighLightProductContent>
              <Title>{"Human Resourse Management System"}</Title>
              <SUbTitle>{"Why Ektefa"}</SUbTitle>
              <Description
                dangerouslySetInnerHTML={{
                  __html:
                    "Ektefa is a completely flexible and environement independent human resource management system. The objective behind the development of Ektefa as a complete enterprise level HRMS solution was to encourage a user-friendly, simple yet robust system which not only answers to the routine HR department issues but also provides intelligent analytics and new-age technological implementations.  <a href={https://ektefa.net/}>read more...</a>",
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
