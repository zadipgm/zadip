import * as React from "react";
import {
  Video,
  VideoWrapper,
  ScrollTopButton,
  IconsWrapper,
  MainHeading,
  Text,
  Container,
  HeaderNavbarWrapper,
  LogoWrapper,
} from "./header.styled.components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useRouter } from "next/router";
import MouseSvg from "../../public/icons/mouseSvg";
import DownArrowSvg from "../../public/icons/downArrowSvg";
import Link from "next/link";
import MobileHeader from "./Mobile";
import DesktopHeader from "./Desktop";
import { useTheme } from "styled-components";

const Header = () => {
  const { translations, device } = useTheme();
  const router = useRouter();
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
  return (
    <>
      {/* ========Main Video======== */}
      <HeaderNavbarWrapper
        className={router.pathname !== "/" ? "other-pages" : ""}
        id="navbar"
      >
        <Container>
          <Link href={"/"}>
            <LogoWrapper>
              <img
                src="/images/zadiplogo.png"
                alt="logo"
                width={150}
                height={"100%"}
              />
            </LogoWrapper>
          </Link>

          {device === "mobile" && <MobileHeader />}
          {device === "tablet" && <MobileHeader />}
          {device === "desktop" && <DesktopHeader />}
        </Container>
      </HeaderNavbarWrapper>

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

      {/* ========Scroll Top Button======== */}

      {show > 1000 && (
        <ScrollTopButton
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <ArrowUpwardIcon color="inherit" />
        </ScrollTopButton>
      )}
    </>
  );
};
export default Header;
