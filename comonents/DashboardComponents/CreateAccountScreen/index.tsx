import EmailSvg from "public/icons/emailSvg";
import NameSvg from "public/icons/nameSvg";
import PassWordSvg from "public/icons/passwordSvg";
import axios from "axios";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  ContainerUser,
  Form,
  Input,
  SpinnerWrapper,
  SvgWrapper,
  UserSelect,
  UserTitle,
  Wrapper,
} from "../LoginScreen/styled.components";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FormContent } from "./styled.components";
import UsersSvg from "public/icons/usersSvg";
import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";
import IDsvg from "public/icons/idSvg";
import PhoneSvg from "public/icons/phoneSvg";

const CreateAccountScreen = () => {
  const router = useRouter();
  const { locale, colors, translations, isLTR } = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [arabicName, setArabicName] = React.useState("");
  const [englishName, setEnglishName] = React.useState("");
  const [nationalID, setNationalID] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [role, setRole] = React.useState("");

  const handleClick = () => {
    setOpen(true);
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

  const handleArabicName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setArabicName(value);
  };
  const handleEnglishName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEnglishName(value);
  };

  const handleIDnumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setNationalID(value);
  };
  const handlePhonenumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPhoneNumber(value);
  };
  const handleRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    setRole(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      await axios.post(`${APP_URL}/register`, {
        name_ar: arabicName,
        name_en: englishName,
        nationalID: nationalID,
        phoneNumber: phoneNumber,
        email: email,
        role: role,
        password: password,
      });
      setArabicName("");
      setEnglishName("");
      setPassword("");
      setNationalID("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      handleClick();
      setMessage(
        isLTR ? "User Added successfully!" : "تم تسجيل المستخدم بنجاح!"
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
      }, 5000);
      setColor("#0d880d");
    } catch (error) {
      if (error) {
        handleClick();
        setIsComplete(true);
        setTimeout(function () {
          setIsComplete(false);
        }, 5000);
        setColor("#ec0e0e");
        console.log(error);
        setMessage(
          isLTR
            ? error.response?.data?.message_en
              ? error.response?.data?.message_en
              : error.message
            : error.response?.data?.message_ar
            ? error.response?.data?.message_ar
            : error.message
        );
      }
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
      <UserTitle>{"Create New User"}</UserTitle>
      <ContainerUser>
        <Form onSubmit={(e) => handleSubmit(e)} className={"create-account"}>
          <FormContent>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <NameSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={"Enter name in arabic"}
                required
                value={arabicName}
                onChange={(e) => handleArabicName(e)}
                minLength={2}
              />
            </Wrapper>{" "}
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <NameSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={"Enter name in english"}
                required
                value={englishName}
                onChange={(e) => handleEnglishName(e)}
                minLength={2}
              />
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <IDsvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={"National ID number / Iqama number"}
                required
                value={nationalID}
                onChange={(e) => handleIDnumber(e)}
                minLength={2}
              />
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <PhoneSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={"05X XXX XXXX"}
                required
                value={phoneNumber}
                onChange={(e) => handlePhonenumber(e)}
                minLength={2}
              />
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <EmailSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="email"
                placeholder={"abc@gmail.com"}
                required
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <UsersSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <UserSelect value={role} onChange={(e) => handleRole(e)} required>
                <option value={""} selected disabled hidden>
                  {"Select Role"}
                </option>
                <option value={"admin"}>{"Admin"}</option>
                <option value={"user"}>{"User"}</option>
              </UserSelect>
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <PassWordSvg
                  width="25px"
                  height="25px"
                  fill={colors.lightBlue}
                />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={"password"}
                required
                value={password}
                onChange={(e) => handlePassword(e)}
              />
            </Wrapper>
          </FormContent>
          <SpinnerWrapper>
            <Input
              type="submit"
              className={`login login-${isComplete}`}
              value={translations?.register}
            />
            {isComplete && (
              <Box>
                <CircularProgress />
              </Box>
            )}
          </SpinnerWrapper>
        </Form>
      </ContainerUser>
    </>
  );
};
export default CreateAccountScreen;
