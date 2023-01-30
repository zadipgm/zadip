import * as React from "react";
import { useTheme } from "styled-components";
import CloseSvg from "../../../public/icons/closeSvg";
import IconComponent from "../IconComponent";
import ModalComponent from "../Modal";
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
} from "./styled.components";
interface IProps {
  title: string;
  buttonTitle: string;
  isShow?: boolean;
  classname?: string;
  icon?: string;
}
const OrderNowForm: React.FC<IProps> = ({
  title,
  isShow = true,
  classname,
  icon,
}) => {
  const { isLTR, translations } = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setName("");
    setEmail("");
    setNumber("");
    setService("");
    setOpen(false);
  };
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [service, setService] = React.useState("");

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
  const serviceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setService(value);
  };
  const handleSubmit = () => {
    if (
      name.length > 3 &&
      email.length > 3 &&
      number.length > 10 &&
      service.length > 3
    ) {
      const email = "info@zadip.com";
      const subject = `Request Services ${service}`;
      const emailBody = "Hi";
      document.location =
        "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
      handleClose();
    } else {
      handleOpen();
    }
  };
  return (
    <>
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
                <CloseSvg width="30px" height="30px" fill="#000" />
              </IconWrapper>
            </FormHeadingWrapper>
            <InputWarapper>
              <Label>
                {name.length <= 3 ? (
                  <span>*</span>
                ) : (
                  <span className="green">*</span>
                )}
                {isLTR ? "Name" : "الاسم"}
              </Label>
              <Input
                type="text"
                placeholder={translations?.fullName}
                required
                value={name}
                onChange={(e) => nameHandler(e)}
              />
            </InputWarapper>
            <InputWarapper>
              <Label>
                {email.length <= 7 ? (
                  <span>*</span>
                ) : (
                  <span className="green">*</span>
                )}
                {isLTR ? "Email" : "البريد الإلكتروني"}
              </Label>
              <Input
                type="email"
                placeholder={translations?.email}
                required
                value={email}
                onChange={(e) => emailHandler(e)}
              />
            </InputWarapper>
            <InputWarapper>
              <Label>
                {number.length <= 10 ? (
                  <span>*</span>
                ) : (
                  <span className="green">*</span>
                )}
                {isLTR ? "Mobile Number" : "رقم الجوال"}
              </Label>
              <Input
                type="text"
                placeholder={translations?.contact}
                required
                value={number}
                onChange={(e) => phoneHandler(e)}
              />
            </InputWarapper>
            <InputWarapper>
              <Label>
                {service.length <= 7 ? (
                  <span>*</span>
                ) : (
                  <span className="green">*</span>
                )}
                {isLTR ? "Request service" : "الخدمة المطلوبة"}
              </Label>
              <Input
                type={"text"}
                placeholder={
                  isLTR ? "Enter request service name..." : "الخدمة المطلوبة..."
                }
                value={service}
                onChange={(e) => serviceHandler(e)}
                required
              />
            </InputWarapper>
            <Button
              color="linear-gradient(-30deg,#009bfb 30%,#38b7ae);"
              onClick={handleSubmit}
            >
              {translations?.send}
            </Button>
          </Wrapper>
        </OrderNowFormContainer>
      </ModalComponent>
    </>
  );
};
export default OrderNowForm;
