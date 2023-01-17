import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import {
  HeaderWrapper,
  LangButton,
  Video,
  VideoWrapper,
  ScrollTopButton,
  IconsWrapper,
  HeaderLogo,
  MainHeading,
  Text,
  NavBar,
  NavBarList,
  Container,
  HeaderNavbarWrapper,
  NavbarItems,
  NavbarItemsList,
  NavbarItemsLink,
} from "./header.styled.components";
import i18n from "../../i18n";
import LocaleContext from "../../LocaleContext";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useRouter } from "next/router";
import MouseSvg from "../../public/icons/mouseSvg";
import DownArrowSvg from "../../public/icons/downArrowSvg";
import IconDownArrowHead from "../../public/icons/dropdownArrowSvg";
import SurvillenceSvg from "../../public/icons/survillenceSvg";
import BuildingSvg from "../../public/icons/BuildingSvg";
import FingerPrintSvg from "../../public/icons/fingerprintSvg";
import header_data from "../../DataLayer/header.json";
import { useTheme } from "styled-components";
import ServicesSvg from "../../public/icons/servicesSvg";
import Client_partnerSvg from "../../public/icons/client_partnerSvg";
import IconComponent from "../ReuseAbleComponents/IconComponent";

interface IProps {
  headerImage?: string;
}
const Header: React.FC<IProps> = ({ headerImage }) => {
  const { isLTR } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();
  const { locale, setLocale } = React.useContext(LocaleContext);
  const [show, setShow] = React.useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const onScroll = () => {
    let navbar = document.getElementById("navbar");
    const scroll = document.documentElement.scrollTop;
    if (scroll > 80) {
      navbar?.classList.add("scrolled");
      setShow(scroll);
    } else {
      navbar?.classList.remove("scrolled");
      setShow(0);
    }
  };
  window.addEventListener("scroll", onScroll);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const changeLocale = React.useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);

      if (locale === "en-US" || locale === "en") {
        router.push(`${router.asPath}`, `${router.asPath}`, {
          locale: "en",
        });
        setLocale("en");
      } else {
        router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
        setLocale("ar");
      }
    },
    [locale]
  );
  return (
    <>
      <HeaderWrapper>
        {/* ========Main Video======== */}

        {router.pathname === "/" && (
          <VideoWrapper background={isVideoLoaded ? "rgba(0, 0, 0, 0.5)" : ""}>
            <Video
              poster="/images/thumb.png"
              className="videoTag"
              autoPlay
              loop
              muted
              onLoadedData={onLoadedData}
              style={{ opacity: isVideoLoaded ? 1 : 0 }}
            >
              <source src={"/zadipvideo.mp4"} type="video/mp4" />
            </Video>
          </VideoWrapper>
        )}
        <HeaderNavbarWrapper id="navbar">
          <Container>
            <img src="/images/zadiplogo.png" alt="logo" />
            <NavBar>
              {/* ========Home======== */}

              <NavBarList>{t("home")}</NavBarList>

              {/* ========ProductsList======== */}

              <NavBarList>
                {t("products")} <IconDownArrowHead fill="#fff" />
                <div className="dropdown-content">
                  <NavbarItems>
                    <NavbarItemsLink href="#">
                      <SurvillenceSvg fill="#fff" width="30px" height="30px" />
                      {isLTR ? "Survillence" : "انظمة المراقبة والأمان"}
                    </NavbarItemsLink>
                    {header_data.survillence.map((item) => {
                      return (
                        <NavbarItemsList>
                          <NavbarItemsLink href={item.link}>
                            {isLTR ? item.name_en : item.name_ar}
                          </NavbarItemsLink>
                        </NavbarItemsList>
                      );
                    })}
                  </NavbarItems>
                  <NavbarItems>
                    <NavbarItemsLink href="#">
                      <FingerPrintSvg fill="#fff" width="25px" height="25px" />
                      {isLTR ? " Access Control" : "انظمة التحكم بالدخول"}
                    </NavbarItemsLink>
                    {header_data.access_control.map((item) => {
                      return (
                        <NavbarItemsList>
                          <NavbarItemsLink href={item.link}>
                            {item.name_en}
                          </NavbarItemsLink>
                        </NavbarItemsList>
                      );
                    })}
                  </NavbarItems>
                  <NavbarItems>
                    <NavbarItemsLink href="#">
                      <BuildingSvg fill="#fff" width="25px" height="25px" />
                      {isLTR ? "Building Management" : "إدارة المباني"}
                    </NavbarItemsLink>
                    {header_data.bullding_management.map((item) => {
                      return (
                        <NavbarItemsList>
                          <NavbarItemsLink href={item.link}>
                            {isLTR ? item.name_en : item.name_ar}
                          </NavbarItemsLink>
                        </NavbarItemsList>
                      );
                    })}
                  </NavbarItems>
                </div>
              </NavBarList>

              {/* ========ServicesList======== */}

              <NavBarList>
                {t("services")} <IconDownArrowHead fill="#fff" />
                <div className="dropdown-content services">
                  <NavbarItems>
                    <NavbarItemsLink href="#">
                      <ServicesSvg fill="#fff" width="30px" height="30px" />
                      {isLTR ? "Professional Services" : "خدمات احترافية"}
                    </NavbarItemsLink>
                    {header_data.survillence.map((item) => {
                      return (
                        <NavbarItemsList>
                          <NavbarItemsLink href={item.link}>
                            {isLTR ? item.name_en : item.name_ar}
                          </NavbarItemsLink>
                        </NavbarItemsList>
                      );
                    })}
                  </NavbarItems>
                </div>
              </NavBarList>
              <NavBarList>
                {t("aboutUs")} <IconDownArrowHead fill="#fff" />
                <div className="dropdown-content about-us">
                  <NavbarItems>
                    {header_data.about_us.map((item) => {
                      return (
                        <NavbarItemsList>
                          <NavbarItemsLink href={item.link}>
                            <IconComponent
                              icon={item.icon}
                              fill={"#fff"}
                              width="20px"
                              height="20px"
                            />{" "}
                            {isLTR ? item.name_en : item.name_ar}
                          </NavbarItemsLink>
                        </NavbarItemsList>
                      );
                    })}
                  </NavbarItems>
                </div>
              </NavBarList>
              <NavBarList>{t("contactUs")}</NavBarList>

              {/* ========Lang Button======== */}

              <div>
                {locale === "ar" ? (
                  <LangButton
                    href={`/en${router.asPath}`}
                    onClick={() => changeLocale("en")}
                  >
                    English
                  </LangButton>
                ) : (
                  <LangButton
                    href={`/ar${router.asPath}`}
                    onClick={() => changeLocale("ar")}
                  >
                    العربية
                  </LangButton>
                )}
              </div>
            </NavBar>
          </Container>
        </HeaderNavbarWrapper>

        {/* ========DownIndicator======== */}

        {router.pathname === "/" && (
          <IconsWrapper>
            <MouseSvg className="mouse" />
            <DownArrowSvg className="down-arrow" />
          </IconsWrapper>
        )}

        {/* ========Main Heading======== */}

        {router.pathname === "/" && (
          <MainHeading>
            <Text lineHeight={"88px"}>{t("wehelp")}</Text>
            <Text lineHeight={"88px"}>{t("toreachGoals")}</Text>
          </MainHeading>
        )}
      </HeaderWrapper>

      {/* ========Scroll Top Button======== */}

      {show > 500 && (
        <ScrollTopButton
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <ArrowUpwardIcon color="info" />
        </ScrollTopButton>
      )}
    </>
  );
};
export default Header;
