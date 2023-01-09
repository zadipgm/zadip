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
  ImageThumb,
} from "./header.styled.components";
import i18n from "../../i18n";
import LocaleContext from "../../LocaleContext";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
import { useRouter } from "next/router";
import MouseSvg from "../../public/icons/mouseSvg";
import DownArrowSvg from "../../public/icons/downArrowSvg";
import { useTheme } from "styled-components";
const drawerWidth = 240;

interface IProps {
  headerImage?: string;
}
const Header: React.FC<IProps> = ({ headerImage }) => {
  const { t } = useTranslation();
  const { locale, setLocale } = React.useContext(LocaleContext);
  const [show, setShow] = React.useState(0);
  const { isLTR } = useTheme();
  const changeLocale = (lang: string) => {
    if (locale !== lang) {
      i18n.changeLanguage(lang);
    }
    if (locale === "en-US") {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "en-US" });
      setLocale("en-US");
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
      setLocale("ar");
    }
  };
  const navItems = [
    { name: "home", link: "/" },
    { name: "products", link: `/products` },
    { name: "services", link: `/services` },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const router = useRouter();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.link}>
                <ListItemText primary={t(item.name)} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
  return (
    <>
      <HeaderWrapper
        headerBgColor={
          router.pathname === "/"
            ? "rgba(13, 74, 118, 0.15)"
            : "linear-gradient(-30deg,#0576bc 30%,#38b7ae)"
        }
      >
        <Box sx={{ display: "flex" }}>
          <AppBar component="nav" id="navbar">
            <Toolbar>
              <IconButton
                color="default"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { sm: "block" } }}
              >
                <Link href={"/"}>
                  <HeaderLogo
                    src="https://www.zadip.com/en/images/logo-full.png"
                    width={"auto"}
                    height={"auto"}
                  />
                </Link>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item.name} sx={{ color: "#fff" }}>
                    <Link href={item.link} className="nav-items">
                      {" "}
                      {t(item.name)}
                    </Link>
                  </Button>
                ))}
              </Box>
              {locale === "ar" ? (
                <LangButton
                  href={`/en-US${router.asPath}`}
                  onClick={() => changeLocale("en-US")}
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
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
        {router.pathname === "/" && (
          <IconsWrapper>
            <MouseSvg className="mouse" />
            <DownArrowSvg className="down-arrow" />
          </IconsWrapper>
        )}
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
        {router.pathname === "/" && (
          <MainHeading>
            <Text lineHeight={"79px"}>{t("wehelp")}</Text>
            <Text lineHeight={"79px"}>{t("toreachGoals")}</Text>
          </MainHeading>
        )}
      </HeaderWrapper>
      {show > 500 && (
        <ScrollTopButton
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <ArrowUpwardIcon />
        </ScrollTopButton>
      )}
    </>
  );
};
export default Header;
