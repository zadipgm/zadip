import axios from "axios";
import * as React from "react";
import { useTheme } from "styled-components";
import CloseSvg from "../../../public/icons/closeSvg";
import IconComponent from "../IconComponent";
import ModalComponent from "../Modal";
import SimpleSnackbar from "../Snackbar";
// import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  OrderNowFormContainer,
  Wrapper,
  Input,
  InputWarapper,
  Label,
  Button,
  FormHeading,
  ContactButton,
  FormHeadingWrapper,
  IconWrapper,
  SpinnerWrapper,
  Select,
} from "./styled.components";
interface IProps {
  title: string;
  buttonTitle: string;
  isShow?: boolean;
  classname?: string;
  icon?: string;
  page: string;
}
const OrderNowForm: React.FC<IProps> = ({
  title,
  isShow = true,
  classname,
  icon,
  page,
}) => {
  const { isLTR, translations, colors } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [service, setService] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setName("");
    setEmail("");
    setNumber("");
    setService("");
    setOpen(false);
  };
  const handleClick = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = () => {
    setOpenSnack(false);
  };
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setName(value);
  };
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };
  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setNumber(value);
  };
  const serviceHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    setService(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("here is data", name, email, number, service);
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      await axios.post(`${APP_URL}/zadip_form`, {
        Name: name,
        Email: email,
        MobileNumber: number,
        ServiceName: service,
        Page: page,
      });
      handleClick();
      setMessage(
        isLTR
          ? "Thanks for yous time, We'll get back to shortly."
          : "شكرًا لك على وقتك ، وسنعاود الاتصال به قريبًا."
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        setOpen(false);
      }, 5000);
      setColor("#2e7d32");
      setName("");
      setEmail("");
      setNumber("");
      setService("");
    } catch (error) {
      if (error) {
        handleClick();
        setIsComplete(true);
        setTimeout(function () {
          setIsComplete(false);
        }, 5000);
        setColor("#d32f2f");
        console.log(error);
        setMessage(
          isLTR
            ? error.response?.data?.message_en
            : error.response?.data?.message_ar
        );
        setOpen(true);
      }
    }
  };
  return (
    <>
      <SimpleSnackbar
        open={openSnack}
        handleClose={handleCloseSnack}
        message={message}
        color={color}
      />
      <ContactButton onClick={handleOpen} className={classname}>
        {title}{" "}
        <IconComponent
          fill={"#fff"}
          width={"30px"}
          height={"30px"}
          icon={icon}
        />
      </ContactButton>
      <ModalComponent
        open={open}
        handleClose={handleClose}
        classname={classname}
        bgColor={"#fff"}
      >
        <OrderNowFormContainer>
          <Wrapper className={classname}>
            <FormHeadingWrapper>
              <FormHeading>
                {isLTR
                  ? "Contact the Service Officer Now"
                  : "تواصل مع مسؤول الخدمة الان"}
              </FormHeading>
              <IconWrapper onClick={handleClose}>
                <CloseSvg width="30px" height="30px" fill={colors.lightBlue} />
              </IconWrapper>
            </FormHeadingWrapper>
            <form onSubmit={(e) => handleSubmit(e)}>
              <InputWarapper>
                <Label>
                  <span>*</span>
                  {isLTR ? "Name" : "الاسم"}
                </Label>
                <Input
                  type="text"
                  placeholder={translations?.fullName}
                  required
                  title="Please Enter Your Full Name"
                  value={name}
                  minLength={2}
                  maxLength={50}
                  onChange={(e) => nameHandler(e)}
                />
              </InputWarapper>
              <InputWarapper>
                <Label>
                  <span>*</span>
                  {isLTR ? "Email" : "البريد الإلكتروني"}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="abc@gmail.com"
                  onChange={(e) => emailHandler(e)}
                />
              </InputWarapper>
              <InputWarapper>
                <Label>
                  <span>*</span>
                  {isLTR ? "Mobile Number" : "رقم الجوال"}
                </Label>
                <Input
                  placeholder="05XXXXXXXX"
                  type="text"
                  maxLength={10}
                  pattern="\d{10}"
                  title="Please enter exactly 10 digits"
                  value={number}
                  required
                  onChange={(e) => phoneHandler(e)}
                />
              </InputWarapper>
              <InputWarapper>
                <Label>
                  <span>*</span>
                  {isLTR ? "Request service" : "الخدمة المطلوبة"}
                </Label>
                {/* <Input
                  type={"text"}
                  placeholder={
                    isLTR
                      ? "Enter request service name..."
                      : "الخدمة المطلوبة..."
                  }
                  value={service}
                  onChange={(e) => serviceHandler(e)}
                  required
                /> */}
                <Select
                  value={service}
                  onChange={(e) => serviceHandler(e)}
                  required
                >
                  <option value={""} selected disabled hidden>
                    {isLTR ? "Select Service" : "حدد الخدمة"}
                  </option>
                  <option value="ektifa">
                    {translations.featureTitleEktefa}
                  </option>
                  <option value="nafeth">
                    {translations.featureTitleNafeth}
                  </option>
                  <option value="cadre">
                    {translations.featureTitlecadre}
                  </option>
                  <option value="ehtwa">
                    {translations.featureTitleEhtiwa}
                  </option>
                  <option value="muaref">
                    {translations.featureTitleMuaref}
                  </option>
                  <option value="tam">{isLTR ? "Tamm" : "خدمة تم"}</option>
                  <option value="muqeem">
                    {isLTR ? "Muqeem" : "خدمة مقيم"}
                  </option>
                  <option value="masarat">
                    {isLTR ? "Masarat" : "خدمة مسارات"}
                  </option>
                  <option value="smartgate">
                    {isLTR ? "Smart Gate" : "خدمة البوابة الذكية"}
                  </option>
                </Select>
              </InputWarapper>

              <SpinnerWrapper>
                <Input
                  type="submit"
                  className={`login login-${isComplete}`}
                  value={translations?.submit}
                />
                {isComplete && (
                  <Box>
                    <CircularProgress />
                  </Box>
                )}
              </SpinnerWrapper>
            </form>
          </Wrapper>
        </OrderNowFormContainer>
      </ModalComponent>
    </>
  );
};
export default OrderNowForm;
