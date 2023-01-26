import * as React from "react";
import AccurateSvg from "../../../public/icons/acurateSvg";
import SecurehSvg from "../../../public/icons/secureSvg";
import TransactionSvg from "../../../public/icons/transactionSvg";
import DownLoadButton from "../DownLoadButton";
import VedioComponent from "../Vedio";
import {
  AdvantageWrapper,
  AdvantageContainer,
  Heading,
  Description,
  Wrapper,
  VedioLinkWrapper,
} from "./styled.components";
import data from "../../../DataLayer/services.json";
import { useTheme } from "styled-components";
import IconComponent from "../IconComponent";
interface IProps {
  id: number;
  title_en: string;
  title_ar: string;
  icon: string;
  description_en: string;
  description_ar: string;
}
interface Idata {
  data?: IProps[];
  poster?: string;
  videoLink?: string;
}
const ServicesAdvantageSection = ({ data, poster, videoLink }: Idata) => {
  const { isLTR } = useTheme();
  return (
    <AdvantageWrapper>
      <AdvantageContainer>
        {data?.map((item) => {
          return (
            <Wrapper key={item.id}>
              <IconComponent
                fill={"#2193b0"}
                width={"25px"}
                height={"25px"}
                icon={item.icon}
              />
              <Heading>{isLTR ? item.title_en : item.title_ar}</Heading>
              <Description>
                {isLTR ? item.description_en : item.description_ar}
              </Description>
            </Wrapper>
          );
        })}
      </AdvantageContainer>
      <VedioComponent poster={poster} videoLink={videoLink} />
    </AdvantageWrapper>
  );
};
export default ServicesAdvantageSection;
