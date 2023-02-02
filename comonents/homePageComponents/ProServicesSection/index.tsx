import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
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
const ProfessionalServices = () => {
  const { device, translations, locale } = useTheme();
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>{translations?.proservicesTitle}</Title>
          <SubTitle>{translations?.projects_it}</SubTitle>
          <Text>{translations?.professionalServices as string}</Text>
          {device === "desktop" && (
            <Button
              onClick={() => router.push(`/${locale}/professional_services`)}
            >
              {translations?.viewmore}
            </Button>
          )}
        </TextWrapper>
        <IamgeWrapper>
          <img
            src="/images/proservice.jpg"
            alt="proservice"
            width={"100%"}
            height={"auto"}
          />
          {device === "mobile" && (
            <Button
              className="mobile-button"
              onClick={() => router.push(`/${locale}/professional_services`)}
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
