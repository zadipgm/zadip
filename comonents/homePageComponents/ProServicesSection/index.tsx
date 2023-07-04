import * as React from "react";
import { useTheme } from "styled-components";
import { Button } from "../../ReuseAbleComponents/ReuseableButton/styled.components";
import {
  Container,
  IamgeWrapper,
  SubTitle,
  Text,
  TextWrapper,
  Title,
  Wrapper,
} from "./styled.components";
import Image from "next/image";
const ProfessionalServices = () => {
  const { device, translations, locale } = useTheme();
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>{translations?.proservicesTitle}</Title>
          <SubTitle>{translations?.projects_it}</SubTitle>
          <Text>{translations?.professionalServices as string}</Text>
          {device === "desktop" && (
            <Button href={`/${locale}/professional_services`}>
              {translations?.viewmore}
            </Button>
          )}
        </TextWrapper>
        <IamgeWrapper>
          <Image
            src="/images/proservice.webp"
            alt="proservice"
            width={300}
            height={300}
          />
          {device === "mobile" && (
            <Button
              className="mobile-button"
              href={`/${locale}/professional_services`}
            >
              {translations?.viewmore}
            </Button>
          )}
          {device === "tablet" && (
            <Button
              className="mobile-button"
              href={`/${locale}/professional_services`}
            >
              {translations?.viewmore}
            </Button>
          )}
        </IamgeWrapper>
      </Wrapper>
    </Container>
  );
};
export default ProfessionalServices;
