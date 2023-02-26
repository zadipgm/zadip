import * as React from "react";
import { useTheme } from "styled-components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { BreadCrumbWrapper } from "comonents/AboutUS/styled.components";
import { Container, Heading } from "comonents/Muaref/styled.components";
import Breadcrumb from "comonents/ReuseAbleComponents/Breadcrumb";
import { DescriptionPrivacy, Title, DesCription } from "./styled.components";
const PrivacyPolicy = () => {
  const { translations, colors, isRTL } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color={`${colors.lightBlue}`} href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="inherit" style={{ color: colors.lightBlue }}>
      {translations?.privacyPolicy}
    </Typography>,
  ];
  return (
    <Container>
      <BreadCrumbWrapper>
        <Heading>{translations?.privacyPolicy}</Heading>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <DescriptionPrivacy>{translations.DescriptionPrivacy}</DescriptionPrivacy>
      <Title>{translations.personalinformation}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.personalInformationdescription}`,
        }}
      ></DesCription>

      <Title>{translations.collectinformation}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.collectinformationDescription}`,
        }}
      ></DesCription>

      <Title>{translations.useInformation}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.useInformationDescription}`,
        }}
      ></DesCription>
      <Title>{translations.protectInformation}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.protectInformationDescription}`,
        }}
      ></DesCription>
      {isRTL && (
        <>
          <Title>{`هل نستخدم "ملفات تعريف الارتباط"؟`}</Title>
          <DesCription
            dangerouslySetInnerHTML={{
              __html: `نحن لا نستخدم ملفات تعريف الارتباط لأغراض التتبع<br><br>يمكنك اختيار أن يقوم جهاز الكمبيوتر بتحذيرك في كل مرة يتم فيها إرسال ملف تعريف ارتباط، أو يمكنك اختيار إيقاف تشغيل كافة ملفات تعريف الارتباط. يمكنك إجراء ذلك من خلال إعدادات المتصفح. نظرا لأن المتصفح مختلف قليلا، فراجع قائمة المساعدة في المتصفح للتعرف على الطريقة الصحيحة لتعديل ملفات تعريف الارتباط.<br><br>إذا قمت بإيقاف تشغيل ملفات تعريف الارتباط، فقد لا تعمل بعض الميزات التي تجعل موقعك أكثر كفاءة على نحو سليم. مما يجعل موقعك أكثر كفاءة وقد لا يعمل بشكل صحيح.`,
            }}
          ></DesCription>
        </>
      )}
      <Title>{translations.useCookies}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.useCookiesDesciption}`,
        }}
      ></DesCription>
      <Title>{translations.Thirdpartydisclosure}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.ThirdpartyDescription}`,
        }}
      ></DesCription>
      <Title>{translations.Google}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.GoogleDescription}`,
        }}
      ></DesCription>
      <Title>{translations.CaliforniaProtectionAct}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.CaliforniaProtectionActDescription}`,
        }}
      ></DesCription>

      <Title>{translations.thirdPartTracking}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.thirdPartTrackingDescription}`,
        }}
      ></DesCription>

      <Title>{translations.trackSignal}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.trackSignalDescription}`,
        }}
      ></DesCription>
      {isRTL && (
        <>
          <Title>{"هل يسمح موقعنا بتتبع سلوكيات الجهات الخارجية؟"}</Title>
          <DesCription
            dangerouslySetInnerHTML={{
              __html: `من المهم أيضا ملاحظة أننا لا نسمح بتتبع سلوك الجهات الخارجية`,
            }}
          ></DesCription>
        </>
      )}
      <Title>{translations.COPPA}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.COPPADescription}`,
        }}
      ></DesCription>
      <Title>{translations.FairInformation}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.FairInformationDescription}`,
        }}
      ></DesCription>
      <Title>{translations.CANSPAMAct}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.CanSPANDescription}`,
        }}
      ></DesCription>
      <Title>{translations.ContactingUs}</Title>
      <DesCription
        dangerouslySetInnerHTML={{
          __html: `${translations.ContactingUsDescription}`,
        }}
      ></DesCription>
    </Container>
  );
};
export default PrivacyPolicy;
