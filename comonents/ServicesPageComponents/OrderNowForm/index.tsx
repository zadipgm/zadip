import * as React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import SocialIcons from "../../ReuseAbleComponents/SocialIconsReUseable";
import {
  OrderNowFormContainer,
  Wrapper,
  Input,
  Textarea,
  InputWarapper,
  Label,
  Button,
  FormHeading,
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
}
const OrderNowForm: React.FC<IProps> = ({
  title,
  buttonTitle,
  isShow = true,
  classname,
}) => {
  const { t } = useTranslation();
  const { isLTR } = useTheme();
  return (
    <>
      <FormHeading>{title}</FormHeading>
      <OrderNowFormContainer>
        <Wrapper className={classname}>
          <InputWarapper>
            <Label>{isLTR ? "Full Name" : "الاسم بالكامل"}</Label>
            <Input type="text" placeholder={`${t("fullName")}`} required />
          </InputWarapper>
          <InputWarapper>
            <Label>{isLTR ? "Email" : "البريد الإلكتروني"}</Label>
            <Input type="email" placeholder={`${t("email")}`} />
          </InputWarapper>
          <InputWarapper>
            <Label>{isLTR ? "Contact" : "اتصل"}</Label>
            <Input type="text" placeholder={`${t("contact")}`} />
          </InputWarapper>
          <InputWarapper>
            <Label>{isLTR ? "Message" : "رسالة"}</Label>
            <Textarea
              id="comments"
              name="comments"
              rows={4}
              cols={50}
              placeholder={`${t("message")}`}
            />
          </InputWarapper>
          <Button color="linear-gradient(-30deg,#009bfb 30%,#38b7ae);">
            {buttonTitle}
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
    </>
  );
};
export default OrderNowForm;
