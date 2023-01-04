import * as React from "react";
import { useTranslation } from "react-i18next";
import FacebookSvg from "../../../public/icons/facebookSvg";
import LinkedInSvg from "../../../public/icons/linkedinSvg";
import TwitterSvg from "../../../public/icons/twitterSvg";
import SocialIcons from "../../ReuseAbleComponents/SocialIconsReUseable";
import {
  OrderNowFormContainer,
  Wrapper,
  Input,
  Textarea,
  RecaptchaWrapper,
  RecaptchaImage,
  RecaptchaLinksWrapper,
  Recaptcha,
  LinksWrapper,
  Link,
  Button,
  Span,
  RecaptchaContainer,
  CallUsNowWrapper,
  CallButton,
  Call,
  CallContainer,
} from "./styled.components";
interface IProps {
  title: string;
  buttonTitle: string;
}
const OrderNowForm: React.FC<IProps> = ({ title, buttonTitle }) => {
  const { t } = useTranslation();
  return (
    <OrderNowFormContainer>
      <Wrapper>
        <Span>{title}</Span>
        <Input type="text" placeholder={`${t("fullName")}`} required />
        <Input type="email" placeholder={`${t("email")}`} />
        <Input type="text" placeholder={`${t("contact")}`} />
        <Textarea
          id="comments"
          name="comments"
          rows={4}
          cols={50}
          placeholder={`${t("message")}`}
        />
        {/* <RecaptchaContainer>
          <RecaptchaWrapper>
            <input type="checkbox" />
            <label htmlFor="checkbox">I am not robot</label>
          </RecaptchaWrapper>
          <RecaptchaLinksWrapper>
            <RecaptchaImage></RecaptchaImage>
            <Recaptcha>reCaptcha</Recaptcha>
            <LinksWrapper>
              <Link
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
              >
                Privacy
              </Link>
              <span>-</span>
              <Link
                href="https://www.google.com/intl/en/policies/terms/"
                target="_blank"
              >
                Terms
              </Link>
            </LinksWrapper>
          </RecaptchaLinksWrapper>
        </RecaptchaContainer> */}
        <Button color={"rgb(82 39 63 / 78%);"}>{t("cancel")}</Button>
        <Button color="linear-gradient(-30deg,#009bfb 30%,#38b7ae);">
          {buttonTitle}
        </Button>
      </Wrapper>
      <CallUsNowWrapper>
        <CallContainer>
          <Call>{t("callUsNow")}</Call>
          <CallButton href="tel://9200 10047">920010047</CallButton>
        </CallContainer>
        <SocialIcons />
      </CallUsNowWrapper>
    </OrderNowFormContainer>
  );
};
export default OrderNowForm;
