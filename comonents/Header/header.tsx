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
  MenuListcontainer,
  MenuListWrapper,
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
import Link from "next/link";

interface IProps {
  headerImage?: string;
}
const Header: React.FC<IProps> = ({ headerImage }) => {
  const { isLTR, translations, locale } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();
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
      } else {
        router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
      }
    },
    [locale]
  );
  const navigateToPage = (item: any) => {
    return router.push(`/${locale}${item.link}`);
  };
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
        <HeaderNavbarWrapper
          className={router.pathname !== "/" ? "other-pages" : ""}
          id="navbar"
        >
          <Container>
            <Link href={"/"}>
              <img src="/images/zadiplogo.png" alt="logo" />
            </Link>
            <NavBar>
              {/* ========Home======== */}

              <NavBarList>
                <Link href={"/"}>{translations?.home}</Link>
              </NavBarList>

              {/* ========ProductsList======== */}

              <NavBarList>
                {translations?.products} <IconDownArrowHead fill="#fff" />
                <div className="dropdown-content">
                  <NavbarItems className="survillence">
                    <li>
                      <MenuListcontainer>
                        <MenuListWrapper>
                          <SurvillenceSvg
                            fill="#fff"
                            width="30px"
                            height="30px"
                          />
                          {isLTR ? "Survillence" : "انظمة المراقبة والأمان"}
                        </MenuListWrapper>
                        <IconDownArrowHead
                          fill="#fff"
                          width="20px"
                          height="20px"
                          className="down-arrow-left"
                        />
                      </MenuListcontainer>
                      <ul>
                        {header_data.survillence.map((item, index) => {
                          return (
                            <NavbarItemsList key={index}>
                              <NavbarItemsLink href={item.link}>
                                {isLTR ? item.name_en : item.name_ar}
                              </NavbarItemsLink>
                            </NavbarItemsList>
                          );
                        })}
                      </ul>
                    </li>
                  </NavbarItems>

                  <NavbarItems className="access-control">
                    <li>
                      <MenuListcontainer>
                        <MenuListWrapper>
                          <FingerPrintSvg
                            fill="#fff"
                            width="25px"
                            height="25px"
                          />
                          {isLTR ? " Access Control" : "انظمة التحكم بالدخول"}
                        </MenuListWrapper>
                        <IconDownArrowHead
                          fill="#fff"
                          width="20px"
                          height="20px"
                          className="down-arrow-left"
                        />
                      </MenuListcontainer>
                      <ul>
                        {header_data.access_control.map((item, index) => {
                          return (
                            <NavbarItemsList key={index}>
                              <NavbarItemsLink href={item.link}>
                                {item.name_en}
                              </NavbarItemsLink>
                            </NavbarItemsList>
                          );
                        })}
                      </ul>
                    </li>
                  </NavbarItems>

                  <NavbarItems className="building_management">
                    <li>
                      <MenuListcontainer>
                        <MenuListWrapper>
                          <BuildingSvg fill="#fff" width="25px" height="25px" />
                          {isLTR ? "Building Management" : "إدارة المباني"}
                        </MenuListWrapper>
                        <IconDownArrowHead
                          fill="#fff"
                          width="20px"
                          height="20px"
                          className="down-arrow-left"
                        />
                      </MenuListcontainer>

                      <ul>
                        {header_data.bullding_management.map((item, index) => {
                          return (
                            <NavbarItemsList key={index}>
                              <NavbarItemsLink href={item.link}>
                                {isLTR ? item.name_en : item.name_ar}
                              </NavbarItemsLink>
                            </NavbarItemsList>
                          );
                        })}
                      </ul>
                    </li>
                  </NavbarItems>
                </div>
              </NavBarList>

              {/* ========ServicesList======== */}

              <NavBarList>
                {translations?.services} <IconDownArrowHead fill="#fff" />
                <div className="dropdown-content other-items">
                  <NavbarItems>
                    <NavbarItemsLink>
                      <ServicesSvg fill="#fff" width="30px" height="30px" />
                      {isLTR ? "Professional Services" : "خدمات احترافية"}
                    </NavbarItemsLink>
                    {header_data.survillence.map((item, index) => {
                      return (
                        <NavbarItemsList key={index}>
                          <NavbarItemsLink>
                            {isLTR ? item.name_en : item.name_ar}
                          </NavbarItemsLink>
                        </NavbarItemsList>
                      );
                    })}
                  </NavbarItems>
                </div>
              </NavBarList>
              <NavBarList>
                {translations?.aboutUs} <IconDownArrowHead fill="#fff" />
                <div className="dropdown-content other-items">
                  <NavbarItems>
                    {header_data.about_us.map((item, index) => {
                      return (
                        <NavbarItemsList key={index}>
                          <NavbarItemsLink onClick={() => navigateToPage(item)}>
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
              <NavBarList>{translations?.contactUs}</NavBarList>

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
            <Text lineHeight={"88px"}>{translations?.wehelp}</Text>
            <Text lineHeight={"88px"}>{translations?.toreachGoals}</Text>
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
