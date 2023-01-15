import * as React from "react";
import {
  HighLightProductSectionContainer,
  HighLightProductWrapper,
  HighLightProductContent,
  Title,
  SUbTitle,
  Description,
  Eservices,
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
      </HighLightProductSectionContainer>
    </>
  );
};
export default HighLightProductSection;
