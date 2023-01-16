import * as React from "react";
import {
  HighLightProductSectionContainer,
  HighLightProductWrapper,
  HighLightProductContent,
  Title,
  SUbTitle,
  Description,
  Eservices,
  Elogos,
} from "./styled.components";
import { useTranslation } from "react-i18next";
const HighLightProductSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <HighLightProductSectionContainer>
        <HighLightProductWrapper>
          <HighLightProductContent>
            <Title>{t("egoveservices")}</Title>
            <SUbTitle>{t("certifiedPartner")}</SUbTitle>
            <Description
              dangerouslySetInnerHTML={{
                __html: t("elmpartner"),
              }}
            ></Description>
          </HighLightProductContent>
          <Eservices>
            <img src="/images/eGov.png" alt="" width={400} height={400} />
          </Eservices>
        </HighLightProductWrapper>
        <Elogos>
          <img
            src="/images/emasarat.png"
            alt="masarat"
            width={150}
            height={100}
          />
          <img src="/images/esmart.png" alt="smart" width={150} height={100} />
          <img src="/images/etam.png" alt="tam" width={150} height={100} />
          <img
            src="/images/emuqeem.png"
            alt="muqeem"
            width={150}
            height={100}
          />
        </Elogos>
      </HighLightProductSectionContainer>
    </>
  );
};
export default HighLightProductSection;
