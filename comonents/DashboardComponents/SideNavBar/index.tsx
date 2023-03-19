import Link from "next/link";
import { useRouter } from "next/router";
import ArrowDown from "public/icons/arrowDownSvg";
import DashboardSvg from "public/icons/dashboard";
import FormsSvg from "public/icons/formsSvg";
import UsersSvg from "public/icons/usersSvg";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  IconWrapper,
  Langwrapper,
  List,
  ListItems,
  LogoContainer,
  SideIconWrapper,
} from "./styled.components";

const SideNavBar = () => {
  const { translations, colors } = useTheme();
  const [width, setWidth] = React.useState(false);

  const handleWidth = () => {
    setWidth(!width);
  };
  return (
    <Container className={width ? "active" : "In-active"}>
      <LogoContainer>
        <Link href={"/dashboard"}>
          <img
            src="/images/zadiplogo.png"
            alt="logo"
            width={150}
            height={"100%"}
          />
        </Link>
      </LogoContainer>
      <List className={width ? "active" : "In-active"}>
        <Link href="/dashboard" className={width ? "active" : "In-active"}>
          <SideIconWrapper>
            <DashboardSvg fill={colors.gray2} width="35px" height="35px" />
          </SideIconWrapper>
          <ListItems> {translations?.dashboard}</ListItems>
        </Link>
        <Link href="/head_tag" className={width ? "active" : "In-active"}>
          <SideIconWrapper>
            <FormsSvg width="25px" height="25px" fill="#fff" />
          </SideIconWrapper>
          <ListItems> {translations.headTag}</ListItems>
        </Link>
        <Link href="/users" className={width ? "active" : "In-active"}>
          <SideIconWrapper>
            <UsersSvg width="25px" height="25px" fill="#fff" />
          </SideIconWrapper>
          <ListItems> {translations?.createUser}</ListItems>
        </Link>
        <Link href="/all_users" className={width ? "active" : "In-active"}>
          <SideIconWrapper>
            <UsersSvg width="25px" height="25px" fill="#fff" />
          </SideIconWrapper>
          <ListItems> {translations?.allUsers}</ListItems>
        </Link>
      </List>
      <IconWrapper
        onClick={handleWidth}
        className={width ? "active" : "In-active"}
      >
        <ArrowDown fill={"#fff"} width="30px" height="30px" />
      </IconWrapper>
    </Container>
  );
};
export default SideNavBar;
