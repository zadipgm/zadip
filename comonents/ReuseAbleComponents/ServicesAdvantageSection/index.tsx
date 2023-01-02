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
const ServicesAdvantageSection = () => {
  return (
    <AdvantageWrapper>
      <AdvantageContainer>
        <div>
          <Wrapper>
            <TransactionSvg />
            <Heading>Efficient</Heading>
            <Description>
              Raise the efficiency of transactions finalization.
            </Description>
          </Wrapper>
          <Wrapper>
            <SecurehSvg />
            <Heading>Secure</Heading>
            <Description>Offer quick and secure procedure.</Description>
          </Wrapper>
          <Wrapper>
            <AccurateSvg />
            <Heading>Accurate</Heading>
            <Description>Acquire accurate information.</Description>
          </Wrapper>
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
