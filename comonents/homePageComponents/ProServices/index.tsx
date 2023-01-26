import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import { Button } from "../../ReuseAbleComponents/DownLoadButton/styled.components";
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
  const { isLTR, translations, locale } = useTheme();
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>{translations?.proservicesTitle}</Title>
          <SubTitle>{translations?.projects_it}</SubTitle>
          <Text>{translations?.professionalServices as string}</Text>
          <Button
            onClick={() => router.push(`/${locale}/professional_services`)}
          >
            {translations?.viewmore}
          </Button>
        </TextWrapper>
        <IamgeWrapper>
          <img
            src="/images/proservice.jpg"
            alt="proservice"
            width={"100%"}
            height={"auto"}
          />
        </IamgeWrapper>
      </Wrapper>
    </Container>
  );
};
export default ProfessionalServices;
