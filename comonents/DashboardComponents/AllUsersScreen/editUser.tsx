import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";
import * as React from "react";
import {
  ContainerUser,
  EditHeader,
  Form,
  Input,
  SpinnerWrapper,
  SvgWrapper,
  UserTitle,
  Wrapper,
} from "../LoginScreen/styled.components";
import { FormContent } from "../CreateAccountScreen/styled.components";
import NameSvg from "public/icons/nameSvg";
import IDsvg from "public/icons/idSvg";
import PhoneSvg from "public/icons/phoneSvg";
import EmailSvg from "public/icons/emailSvg";
import GenderSvg from "public/icons/genderSvg";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import UsersSvg from "public/icons/usersSvg";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import axios from "axios";
import CloseSvg from "public/icons/closeSvg";
interface IEdit {
  email?: string;
  phoneNumber?: string;
  name_ar?: string;
  name_en?: string;
  nationalID?: string;
}
interface IProps {
  handleCloseModal: () => void;
  editData?: IEdit;
}
const EditUser = ({ handleCloseModal, editData }: IProps) => {
  const router = useRouter();
  const { colors, translations, isLTR } = useTheme();
  const [email, setEmail] = React.useState(editData?.email);
  const [arabicName, setArabicName] = React.useState(editData?.name_ar);
  const [englishName, setEnglishName] = React.useState(editData?.name_ar);
  const [nationalID, setNationalID] = React.useState(editData?.nationalID);
  const [phoneNumber, setPhoneNumber] = React.useState(editData?.phoneNumber);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [open, setOpen] = React.useState(false);
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

  const handleArabicName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setArabicName(value);
  };
  const handleEnglishName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEnglishName(value);
  };

  const handlePhonenumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPhoneNumber(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      await axios.put(`${APP_URL}/update${nationalID}`, {
        name_ar: arabicName,
        name_en: englishName,
        phoneNumber: phoneNumber,
        email: email,
      });
      setArabicName("");
      setEnglishName("");
      setNationalID("");
      setEmail("");
      setPhoneNumber("");
      handleClick();
      setMessage(
        isLTR ? "User updated successfully!" : "User updated successfully!"
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        handleCloseModal();
        router.reload();
      }, 3000);
      setColor("#0d880d");
    } catch (error) {
      if (error) {
        handleClick();
        setIsComplete(true);
        setTimeout(function () {
          setIsComplete(false);
        }, 3000);
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
    <div>
      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        message={message}
        color={color}
      />
      <EditHeader>
        <div onClick={handleCloseModal}>
          <CloseSvg fill={colors.lightBlue} width="25px" height="25px" />
        </div>
        <UserTitle className="edit-header">{"Edit user"}</UserTitle>
      </EditHeader>
      <ContainerUser>
        <Form onSubmit={(e) => handleSubmit(e)} className={"edit-account"}>
          <FormContent>
            <Wrapper className={"edit-account"}>
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
            <Wrapper className={"edit-account"}>
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
            <Wrapper className={"edit-account"}>
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
            <Wrapper className={"edit-account"}>
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
          </FormContent>
          <SpinnerWrapper>
            <Input
              type="submit"
              className={`login login-${isComplete}`}
              value={translations?.update}
            />
            {isComplete && (
              <Box>
                <CircularProgress />
              </Box>
            )}
          </SpinnerWrapper>
        </Form>
      </ContainerUser>
    </div>
  );
};
export default EditUser;
