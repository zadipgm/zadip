import ArrowDown from "public/icons/arrowDownSvg";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useTheme } from "styled-components";
import {
  ArrowWrapper,
  Container,
  IconWrapper,
  LangButton,
  Langwrapper,
  ProfileImageContainer,
  ProfileList,
  ProfileListItems,
} from "./styled.components";
import UsersSvg from "public/icons/usersSvg";
import Link from "next/link";
import LogoutSvg from "public/icons/logoutSvg";
import { useRouter } from "next/router";
import LangSvg from "public/icons/langsvg";
import axios from "axios";
import Cookies from "js-cookie";

const Header = () => {
  const router = useRouter();

  const { colors, isLTR, locale, translations } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
      // window.location.reload();
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Container>
        <ProfileImageContainer>
          <div onClick={(e) => handleClick(e)}>
            <img
              src="/images/avatar.png"
              alt="profile iamge"
              width={100}
              height={"auto"}
            />{" "}
            <ArrowWrapper>
              <ArrowDown fill={colors.black1} />
              <span>Muhammad Zeshan Aslam</span>
            </ArrowWrapper>
          </div>
          <Popover
            className={isLTR ? "active" : ""}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography>
              <ProfileList>
                <Link href={`/${locale}/profile`}>
                  <IconWrapper>
                    <UsersSvg width={"25px"} height={"25px"} />
                  </IconWrapper>
                  <ProfileListItems>{translations.myProfile}</ProfileListItems>
                </Link>
                <Link href={``} onClick={handleLogout}>
                  <IconWrapper>
                    <LogoutSvg
                      fill={colors.darkBlue}
                      width={"25px"}
                      height={"25px"}
                    />
                  </IconWrapper>
                  <ProfileListItems>{translations.logout}</ProfileListItems>
                </Link>
                {locale === "ar" ? (
                  <Langwrapper>
                    <IconWrapper>
                      <LangSvg
                        width="25px"
                        height="25px"
                        fill={colors.darkBlue}
                      />
                    </IconWrapper>
                    <LangButton
                      href={`/en${router.asPath}`}
                      onClick={() => changeLocale()}
                    >
                      English
                    </LangButton>
                  </Langwrapper>
                ) : (
                  <Langwrapper>
                    <IconWrapper>
                      <LangSvg
                        width="25px"
                        height="25px"
                        fill={colors.darkBlue}
                      />
                    </IconWrapper>
                    <LangButton
                      href={`/ar${router.asPath}`}
                      onClick={() => changeLocale()}
                    >
                      العربية
                    </LangButton>
                  </Langwrapper>
                )}
              </ProfileList>
            </Typography>
          </Popover>
        </ProfileImageContainer>
      </Container>
    </>
  );
};
export default Header;
