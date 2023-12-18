import * as React from "react";
import {
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
import MainVedioComponent from "comonents/homePageComponents/vedioComponent";
import Image from "next/image";
interface IProps {
  classname?: string;
}
const Header = ({ classname }: IProps) => {
  const { translations, device } = useTheme();
  const router = useRouter();
  const [show, setShow] = React.useState(0);
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
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ========Main Video======== */}
      <HeaderNavbarWrapper
        className={router.pathname === "/" ? "" : "other-pages"}
        id="navbar"
      >
        <Container className={device === "mobile" ? classname : ""}>
          <Link href={"/"}>
            <LogoWrapper>
              <Image
                src="/images/zadiplogo.png"
                alt="logo"
                width={150}
                height={100}
                loading="eager"
              />
            </LogoWrapper>
          </Link>

          {device === "mobile" && <MobileHeader />}
          {device === "tablet" && <MobileHeader />}
          {device === "desktop" && <DesktopHeader />}
        </Container>
      </HeaderNavbarWrapper>
      {/* ========Main vedio======== */}
      {router.pathname === "/" && <MainVedioComponent />}
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
          <Text lineHeight={"88px"}>
            {translations?.wehelp}
            <br />
            {translations?.toreachGoals}
          </Text>
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
