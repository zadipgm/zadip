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
import { useTheme } from "styled-components";
import Image from "next/image";
import Link from "next/link";
const HighLightProductSection = () => {
  const { translations, locale } = useTheme();
  return (
    <>
      <HighLightProductSectionContainer>
        <HighLightProductWrapper>
          <HighLightProductContent>
            <Title>{translations?.egovService}</Title>
            <SUbTitle>{translations?.certifiedPartner}</SUbTitle>
            <Description
              dangerouslySetInnerHTML={{
                __html: translations?.elmpartner as string,
              }}
            ></Description>
          </HighLightProductContent>
          <Eservices>
            <Image src="/images/eGov.png" alt="" width={400} height={400} />
          </Eservices>
        </HighLightProductWrapper>
        <Elogos>
          <Link href={`/${locale}/eGov_services/masarat`}>
            <Image
              src="/images/emasarat.png"
              alt="masarat"
              width={150}
              height={100}
            />
          </Link>
          <Link href={`/${locale}/eGov_services/permit`}>
            <Image
              src="/images/esmart.png"
              alt="smart"
              width={150}
              height={100}
            />
          </Link>
          <Link href={`/${locale}/eGov_services/tam`}>
            <Image src="/images/etam.png" alt="tam" width={150} height={100} />
          </Link>
          <Link href={`/${locale}/eGov_services/muqeem`}>
            <Image
              src="/images/emuqeem.png"
              alt="muqeem"
              width={150}
              height={100}
            />
          </Link>
        </Elogos>
      </HighLightProductSectionContainer>
    </>
  );
};
export default HighLightProductSection;
