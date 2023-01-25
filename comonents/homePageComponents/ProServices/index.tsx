import * as React from "react";
import { useTheme } from "styled-components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
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
  const { isLTR, translations } = useTheme();
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>{translations?.proservicesTitle}</Title>
          <SubTitle>{translations?.projects_it}</SubTitle>
          <Text>{translations?.professionalServices as string}</Text>
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
