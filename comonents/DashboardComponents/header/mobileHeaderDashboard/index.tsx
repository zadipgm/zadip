import * as React from "react";

import { useTheme } from "styled-components";
import {
  ArrowWrapper,
  BurgerMenuDash,
  LangButton,
  LogoutContainerMobile,
  MobileContainer,
  SideContainerMobileDash,
  WrapperMobileDash,
} from "../styled.components";

import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

import BurgerSvg from "public/icons/burgerSvg";
import CloseSvg from "public/icons/closeSvg";

import { SideIconWrapper } from "comonents/DashboardComponents/SideNavBar/styled.components";
import DashboardSvg from "public/icons/dashboard";
import SideBarAccordions from "comonents/DashboardComponents/SideNavBar/sidebaraccordion";
import { Logout } from "@mui/icons-material";
import MobileDashboardModal from "comonents/DashboardComponents/MobileDashboardModal";

const MobileHeaderDashboard = () => {
  const router = useRouter();
  const { colors, isLTR, locale, translations } = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const changeLocale = React.useCallback(() => {
    if (locale === "en-US" || locale === "en") {
      router.push(`${router.asPath}`, `${router.asPath}`, {
        locale: "en",
      });
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
    }
  }, [locale]);
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  const handleLogout = async () => {
    try {
      await axios.delete(`${APP_URL}/logout`);
      router.push(`/${locale}/login`);
      Cookies.remove("isLogedIn");
      Cookies.remove("token");
      // window.location.reload();
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
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
          icon: "certificateSvg",
        },
      ],
      panel: "panel3",
    },
  ];
  return (
    <>
      <MobileContainer>
        <>
          <BurgerMenuDash onClick={handleOpen}>
            <BurgerSvg fill="#044783" width="30px" height="30px" />
          </BurgerMenuDash>
          <ArrowWrapper>
            <span>Muhammad</span>
          </ArrowWrapper>
          <MobileDashboardModal open={open} handleClose={handleClose}>
            <div>
              <WrapperMobileDash>
                <>
                  {locale === "ar" ? (
                    <LangButton
                      href={`/en${router.asPath}`}
                      onClick={() => changeLocale()}
                      className={"mobile-lang-dash"}
                    >
                      English
                    </LangButton>
                  ) : (
                    <LangButton
                      href={`/ar${router.asPath}`}
                      onClick={() => changeLocale()}
                      className={"mobile-lang-dash"}
                    >
                      العربية
                    </LangButton>
                  )}
                  <div onClick={handleClose}>
                    <CloseSvg width="40px" height="40px" fill="#fff" />
                  </div>
                </>
              </WrapperMobileDash>
              <SideContainerMobileDash>
                <SideIconWrapper>
                  <DashboardSvg
                    fill={colors.white}
                    width="30px"
                    height="30px"
                  />
                  <a
                    href="/dashboard"
                    // className={width ? "active" : "In-active"}
                  >
                    {"Dashboard"}
                  </a>
                </SideIconWrapper>
                <SideBarAccordions
                  sideBarMenuData={sideBarMenuData}
                  handleClose={handleClose}
                />
              </SideContainerMobileDash>
              <LogoutContainerMobile onClick={handleLogout}>
                <Logout fontSize="large" color="error" />
              </LogoutContainerMobile>
            </div>
          </MobileDashboardModal>
        </>
      </MobileContainer>
    </>
  );
};
export default MobileHeaderDashboard;
