import * as React from "react";
import { useTheme } from "styled-components";
import IconComponent from "../IconComponent";
import ModalComponent from "../Modal";
import {
  OrderNowFormContainer,
  Wrapper,
  Input,
  Textarea,
  InputWarapper,
  Label,
  Button,
  FormHeading,
  ContactButton,
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
  buttonTitle,
  isShow = true,
  classname,
  icon,
}) => {
  const { isLTR, translations } = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      >
        <OrderNowFormContainer>
          <Wrapper className={classname}>
            <FormHeading>
              {isLTR
                ? "Contact the Service Officer Now"
                : "تواصل مع مسؤول الخدمة الان"}
            </FormHeading>
            <InputWarapper>
              <Label>
                <span>*</span>
                {isLTR ? "Name" : "الاسم"}
              </Label>
              <Input
                type="text"
                placeholder={translations?.fullName}
                required
              />
            </InputWarapper>
            <InputWarapper>
              <Label>
                <span>*</span>
                {isLTR ? "Email" : "البريد الإلكتروني"}
              </Label>
              <Input type="email" placeholder={translations?.email} required />
            </InputWarapper>
            <InputWarapper>
              <Label>
                <span>*</span>
                {isLTR ? "Mobile Number" : "رقم الجوال"}
              </Label>
              <Input type="text" placeholder={translations?.contact} required />
            </InputWarapper>
            <InputWarapper>
              <Label>
                <span>*</span>
                {isLTR ? "Requested service" : "الخدمة المطلوبة"}
              </Label>
              <Input
                type={"text"}
                placeholder={isLTR ? "Requested service" : "الخدمة المطلوبة"}
                required
              />
            </InputWarapper>
            <Button
              color="linear-gradient(-30deg,#009bfb 30%,#38b7ae);"
              onClick={handleClose}
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
