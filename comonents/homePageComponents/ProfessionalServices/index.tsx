import * as React from "react";
import { useTheme } from "styled-components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import { Container } from "./styled.components";
const ProfessionalServices = () => {
  const { isLTR, translations } = useTheme();
  return (
    <Container>
      <AnimationBar
        description={translations?.professionalServices as string}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        title={isLTR ? "Professional Services" : "خدمات احترافية"}
        fontSize={"18px"}
      />
      <>Content goes here.......In progress</>
    </Container>
  );
};
export default ProfessionalServices;
