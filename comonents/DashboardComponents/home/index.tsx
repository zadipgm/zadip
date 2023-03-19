import * as React from "react";
import { useTheme } from "styled-components";
import { Container, Title } from "./styled.components";
const Home = () => {
  const { translations } = useTheme();
  return (
    <Container>
      <Title>{translations?.welcometoZadip}</Title>
    </Container>
  );
};
export default Home;
