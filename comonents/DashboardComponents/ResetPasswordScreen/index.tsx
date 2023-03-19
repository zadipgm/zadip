import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  ContentWrapper,
  EyesWrapper,
  Form,
  Hr,
  Input,
  Logo,
  LogoWrapper,
  SpinnerWrapper,
  SvgWrapper,
  Wrapper,
} from "../LoginScreen/styled.components";
import {
  Text,
  Title,
} from "comonents/DashboardComponents/FogotPasswordScreen/styled.components";
import PassWordSvg from "public/icons/passwordSvg";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import SimpleSnackbar from "../Snackbar";

const ResetPassWordScreen = () => {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const { translations, colors, locale, isLTR } = useTheme();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [passwordShownConfirm, setPasswordShownConfirm] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");

  //get email and token from url
  let query_email = router.query.email;
  let query_token = router.query.token;

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordConfirm = () => {
    setPasswordShownConfirm(!passwordShownConfirm);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPasswordConfirm(value);
  };
  const handleClickOpenSnack = () => {
    setOpen(true);
  };
  const handleCloseSnack = () => {
    setOpen(false);
  };
  const ResetPasswordVerifyToken = async () => {
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";

    try {
      await axios.post(`${APP_URL}/reset-password`, {
        email: query_email,
        token: query_token,
      });
    } catch (error) {
      router.push("/forgot_password");
      console.log(error);
    }
  };

  React.useEffect(() => {
    ResetPasswordVerifyToken();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      axios.post(`${APP_URL}/update-password`, {
        email: query_email,
        token: query_token,
        password: password,
        confirmPassword: passwordConfirm,
      });
      handleClickOpenSnack();
      setMessage(
        isLTR
          ? "Password reset, Use new password to login"
          : "إعادة تعيين كلمة المرور ، استخدم كلمة مرور جديدة لتسجيل الدخول"
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        router.push("/login");
      }, 5000);
      setColor("success");
    } catch (error) {
      handleClickOpenSnack();
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        router.push("/forgot_password");
      }, 5000);
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
        handleClose={handleCloseSnack}
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
            <Title>{translations?.resetPassWord}</Title>
            <Text>{translations?.newPassWord}</Text>
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
            <Wrapper className="password">
              <SvgWrapper>
                <PassWordSvg
                  width="25px"
                  height="25px"
                  fill={colors.lightBlue}
                />
              </SvgWrapper>
              <Input
                type={passwordShownConfirm ? "text" : "password"}
                placeholder={translations?.password}
                required
                onChange={(e) => handlePasswordConfirm(e)}
              />
              <EyesWrapper onClick={togglePasswordConfirm}>
                {passwordShownConfirm ? (
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
                value={translations?.send}
              />
              {isComplete && (
                <Box>
                  <CircularProgress />
                </Box>
              )}
            </SpinnerWrapper>

            <Hr></Hr>
            <br></br>
            <Link href={`/${locale}/login`}>
              {translations?.alreadyhaveaccount}
            </Link>
          </Form>
        </ContentWrapper>
      </Container>
    </>
  );
};
export default ResetPassWordScreen;
