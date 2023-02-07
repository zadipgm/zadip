import DashboardSvg from "@/public/icons/dashboard";
import FormsSvg from "@/public/icons/formsSvg";
import * as React from "react";
import { Container, List, ListItems, LogoContainer } from "./styled.components";
const SideNavBar = () => {
  return (
    <Container>
      <LogoContainer>
        <img
          src="/images/zadiplogo.png"
          alt="logo"
          width={150}
          height={"100%"}
        />
      </LogoContainer>
      <List>
        <ListItems>
          <DashboardSvg width="25px" height="25px" fill="#fff" /> Dashboard
        </ListItems>
        <ListItems>
          <FormsSvg width="25px" height="25px" fill="#fff" /> Forms Data
        </ListItems>
      </List>
    </Container>
  );
};
export default SideNavBar;
