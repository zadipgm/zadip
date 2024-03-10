import ArrowDown from "public/icons/arrowDownSvg";
import DashboardSvg from "public/icons/dashboard";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  IconWrapper,
  LogoContainer,
  SideIconWrapper,
} from "./styled.components";
import SideBarAccordions from "./sidebaraccordion";

const SideNavBar = () => {
  const { translations, colors } = useTheme();
  const [width, setWidth] = React.useState(false);
  const [show, setShow] = React.useState("");
  const handleWidth = () => {
    setWidth(!width);
  };
  const menuHandler = (level: string) => {
    setShow(level);
  };
  const sideBarMenuData = [
    {
      module_name: "User",
      icon: "usersSvg",
      page: [
        {
          page_name: "Create new user",
          page_link: "/dashboard/users",
          icon: "",
        },
        {
          page_name: "All Users",
          page_link: "/dashboard/all_users",
          icon: "",
        },
      ],
      panel: "panel1",
    },
    {
      module_name: "Page SEO",
      icon: "formsSvg",
      page: [
        {
          page_name: "Meta Tags",
          page_link: "/dashboard/head_tag",
          icon: "",
        },
      ],
      panel: "panel2",
    },
    {
      module_name: "Certificate",
      icon: "certificateSvg",
      page: [
        {
          page_name: "Certificate List",
          page_link: "/dashboard/certificate",
          icon: "",
        },
      ],
      panel: "panel3",
    },
  ];
  return (
    <Container className={width ? "In-active" : "active"}>
      <LogoContainer>
        <a href={"/dashboard"}>
          <img
            src="/images/zadiplogo.png"
            alt="logo"
            width={150}
            height={"100%"}
          />
        </a>
      </LogoContainer>
      <SideIconWrapper>
        <DashboardSvg fill={colors.white} width="30px" height="30px" />
        <a href="/dashboard" className={width ? "active" : "In-active"}>
          {"Dashboard"}
        </a>
      </SideIconWrapper>
      <SideBarAccordions sideBarMenuData={sideBarMenuData} />
    </Container>
  );
};
export default SideNavBar;
