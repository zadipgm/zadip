import EmailSvg from "public/icons/emailSvg";
import PassWordSvg from "public/icons/passwordSvg";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import Cookies from "js-cookie";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  Container,
  Wrapper,
  Input,
  Form,
  Logo,
  LogoWrapper,
  ContentWrapper,
  Hr,
  SvgWrapper,
  SpinnerWrapper,
  EyesWrapper,
} from "./styled.components";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";
const LoginScreen = () => {
  const router = useRouter();
  const { locale, colors, translations, isLTR } = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [passwordShown, setPasswordShown] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      await axios
        .post(`${APP_URL}/login`, {
          Email: email,
          Password: password,
        })
        .then(
          (res) =>
            Cookies.set("isLogedIn", res.data.isLogin) &&
            Cookies.set("email", res.data.email)
        );
      setEmail("");
      setPassword("");
      handleClick();
      setMessage(
        isLTR ? "User LoggedIn successfully!" : "تم تسجيل المستخدم بنجاح!"
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        router.push(`/dashboard`);
      }, 3000);
      setColor("success");
    } catch (error) {
      handleClick();
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
      }, 3000);
      setColor("error");
      console.log(error);
      setMessage(
        isLTR
          ? error.response?.data?.message_en
          : error.response?.data?.message_ar
      );
    }
  };
  return (
    <>
      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        message={message}
        color={color}
      />
      <Container>
        <ContentWrapper>
          <LogoWrapper>
            <Logo
              src="/images/zadiplogo.png"
              alt="logo"
              width={200}
              height={"100%"}
            />
          </LogoWrapper>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Wrapper>
              <SvgWrapper>
                <EmailSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="email"
                placeholder={translations?.enterEmail}
                required
                onChange={(e) => handleEmail(e)}
              />
            </Wrapper>
            <Wrapper className="password">
              <SvgWrapper>
                <PassWordSvg
                  width="25px"
                  height="25px"
                  fill={colors.lightBlue}
                />
              </SvgWrapper>
              <Input
                type={passwordShown ? "text" : "password"}
                placeholder={translations?.password}
                required
                onChange={(e) => handlePassword(e)}
              />
              <EyesWrapper onClick={togglePassword}>
                {passwordShown ? (
                  <VisibilityOutlinedIcon color={"primary"} />
                ) : (
                  <VisibilityOffOutlinedIcon color={"primary"} />
                )}
              </EyesWrapper>
            </Wrapper>

            <SpinnerWrapper>
              <Input
                type="submit"
                className={`login login-${isComplete}`}
                value={translations?.login}
              />
              {isComplete && (
                <Box>
                  <CircularProgress />
                </Box>
              )}
            </SpinnerWrapper>
            <Hr></Hr>
            <Link href={`/${locale}/forgot_password`}>
              {translations?.forgotpassword}
            </Link>
            <br></br>
          </Form>
        </ContentWrapper>
      </Container>
    </>
  );
};
export default LoginScreen;
