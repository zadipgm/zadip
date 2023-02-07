import * as React from "react";
import { useTheme } from "styled-components";
import CloseSvg from "../../../public/icons/closeSvg";
import IconComponent from "../IconComponent";
import ModalComponent from "../Modal";
import axios from "axios";
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
  const { isLTR, translations, colors } = useTheme();
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", {
        Name: name,
        Email: email,
        MobileNumber: number,
        ServiceName: service,
      });
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setNumber("");
    setService("");
    setOpen(false);
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
                  maxLength={8}
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
                <Input
                  type={"text"}
                  placeholder={
                    isLTR
                      ? "Enter request service name..."
                      : "الخدمة المطلوبة..."
                  }
                  value={service}
                  onChange={(e) => serviceHandler(e)}
                  required
                />
              </InputWarapper>

              <Button
                type={"submit"}
                color="linear-gradient(-30deg,#009bfb 30%,#38b7ae);"
              />
            </form>
          </Wrapper>
        </OrderNowFormContainer>
      </ModalComponent>
    </>
  );
};
export default OrderNowForm;
