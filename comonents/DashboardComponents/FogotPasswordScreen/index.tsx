import * as React from "react";
import EmailSvg from "public/icons/emailSvg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import { Box, CircularProgress } from "@mui/material";
import {
  Container,
  ContentWrapper,
  Form,
  Hr,
  Input,
  Logo,
  LogoWrapper,
  SpinnerWrapper,
  SvgWrapper,
  Wrapper,
} from "../LoginScreen/styled.components";
import { Text, Title } from "./styled.components";
import axios from "axios";
import SimpleSnackbar from "../Snackbar";
const ForgotPassWord = () => {
  const router = useRouter();
  const { translations, colors, isLTR } = useTheme();
  const [email, setEmail] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };

  const handleClickOpenSnack = () => {
    setOpen(true);
  };

  const handleCloseSnack = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";

    try {
      await axios.post(`${APP_URL}/forgot-password`, { Email: email });
      handleClickOpenSnack();
      setMessage(
        isLTR
          ? "Password reset, Use new password to login"
          : "إعادة تعيين كلمة المرور ، استخدم كلمة مرور جديدة لتسجيل الدخول"
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        setEmail("");
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
            <Title>{translations?.forgotyourpassword}</Title>
            <Text>{translations?.forgotDescription}</Text>
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
            <Link href={`/login`}>{translations?.alreadyhaveaccount}</Link>
          </Form>
        </ContentWrapper>
      </Container>
    </>
  );
};
export default ForgotPassWord;
