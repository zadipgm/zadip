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
          icon: "usersSvg",
        },
        {
          page_name: "All Users",
          page_link: "/dashboard/all_users",
          icon: "alluserSvg",
        },
      ],
      panel: "panel1",
    },
    {
      module_name: "Trainers",
      icon: "trainerSvg",
      page_name: "Trainers",
      page_link: "/dashboard/trainers",
      page: [
        {
          page_name: "Trainers List",
          page_link: "/dashboard/trainers",
          icon: "trainerSvg",
        },
        {
          page_name: "Bookings",
          page_link: "/dashboard/bookings",
          icon: "bookingSvg",
        },
        {
          page_name: "Ratings",
          page_link: "/dashboard/ratings",
          icon: "starsSvg",
        },
        {
          page_name: "Calendar",
          page_link: "/dashboard/calendar",
          icon: "calendarSvg",
        },
      ],
      panel: "panel2",
    },
    {
      module_name: "Head Tag",
      icon: "formsSvg",
      page: [
        {
          page_name: "Head tag",
          page_link: "/dashboard/head_tag",
          icon: "",
        },
      ],
      panel: "panel3",
    },
    {
      module_name: "Certificate",
      icon: "certificateSvg",
      page: [
        {
          page_name: "Certificate List",
          page_link: "/dashboard/certificate",
          icon: "certificateSvg",
        },
      ],
      panel: "panel4",
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
      <IconWrapper
        onClick={handleWidth}
        className={width ? "In-active" : "active"}
      >
        <ArrowDown fill={"#fff"} width="30px" height="30px" />
      </IconWrapper>
    </Container>
  );
};
export default SideNavBar;
