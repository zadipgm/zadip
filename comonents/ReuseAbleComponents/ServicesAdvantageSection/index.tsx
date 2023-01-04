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
} from "./styled.components";
import data from "../../../DataLayer/services.json";
import { useTheme } from "styled-components";
import IconComponent from "../IconComponent";
const ServicesAdvantageSection = () => {
  const { isLTR } = useTheme();
  return (
    <AdvantageWrapper>
      <AdvantageContainer>
        <div>
          {data.services_advantages.map((item) => {
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
        </div>
        <VedioComponent />
        {/* <VedioLinkWrapper>
          {" "}
          <iframe
            width="100%"
            height="260"
            src="https://www.youtube.com/embed/6NXA0W4lKXw?rel=0&controls=0&showinfo=0"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </VedioLinkWrapper> */}
      </AdvantageContainer>
    </AdvantageWrapper>
  );
};
export default ServicesAdvantageSection;
