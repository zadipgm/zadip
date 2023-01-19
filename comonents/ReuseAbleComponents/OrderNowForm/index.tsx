import * as React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import SalesSvg from "../../../public/icons/salesSvg";
import IconComponent from "../IconComponent";
import ModalComponent from "../Modal";
import SocialIcons from "../SocialIconsReUseable";
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
  CallUsNowWrapper,
  CallButton,
  Call,
  CallContainer,
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
  const { t } = useTranslation();
  const { isLTR, translations } = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ContactButton onClick={handleOpen}>
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
              <Label>{isLTR ? "Name" : "الاسم"}</Label>
              <Input type="text" placeholder={`${t("fullName")}`} required />
            </InputWarapper>
            <InputWarapper>
              <Label>{isLTR ? "Email" : "البريد الإلكتروني"}</Label>
              <Input type="email" placeholder={`${t("email")}`} />
            </InputWarapper>
            <InputWarapper>
              <Label>{isLTR ? "Mobile Number" : "رقم الجوال"}</Label>
              <Input type="text" placeholder={`${t("contact")}`} />
            </InputWarapper>
            <InputWarapper>
              <Label>{isLTR ? "Requested service" : "الخدمة المطلوبة"}</Label>
              <Textarea
                id="comments"
                name="comments"
                rows={4}
                cols={50}
                placeholder={`${t("message")}`}
              />
            </InputWarapper>
            <Button
              color="linear-gradient(-30deg,#009bfb 30%,#38b7ae);"
              onClick={handleClose}
            >
              {translations?.send}
            </Button>
          </Wrapper>
          {/* {isShow && (
          <CallUsNowWrapper>
            <CallContainer>
              <Call>{t("callUsNow")}</Call>
              <CallButton href="tel://9200 10047">920010047</CallButton>
            </CallContainer>
            <SocialIcons />
          </CallUsNowWrapper>
        )} */}
        </OrderNowFormContainer>
      </ModalComponent>
    </>
  );
};
export default OrderNowForm;
