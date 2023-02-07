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
            <img src="/images/eGov.png" alt="" width={"100%"} height={"100%"} />
          </Eservices>
        </HighLightProductWrapper>
        <Elogos>
          <Link href={`/${locale}/eGov_services/muqeem`}>
            <Image
              src="/images/emuqeem.png"
              alt="muqeem"
              width={80}
              height={80}
            />
          </Link>
          <Link href={`/${locale}/eGov_services/tam`}>
            <Image src="/images/etam.png" alt="tam" width={80} height={80} />
          </Link>
          <Link href={`/${locale}/eGov_services/masarat`}>
            <Image
              src="/images/emasarat.png"
              alt="masarat"
              width={80}
              height={80}
            />
          </Link>
          <Link href={`/${locale}/eGov_services/smartgate`}>
            <Image
              src="/images/esmart.png"
              alt="smart"
              width={80}
              height={80}
            />
          </Link>
        </Elogos>
      </HighLightProductSectionContainer>
    </>
  );
};
export default HighLightProductSection;
