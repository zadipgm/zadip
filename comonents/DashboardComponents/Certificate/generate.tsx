import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import { ImageWrapper, InputWrapper, PreviewCertificate } from "./styled";
const GenerateCertificate = () => {
  const router = useRouter();
  const { locale } = useTheme();
  const sendStateToPreview = (e) => {
    router.push({
      pathname: `/${locale}/dashboard/certificate/preview`,
      query: {
        idnumber: router.query.idnumber,
        certificate_number: router.query.certificate_number,
        expire_date: router.query.expire_date,
        name: router.query.name,
        idnumberArabic: router.query.idnumber,
        certificate_numberArabic: router.query.certificate_number,
        expire_dateArabic: router.query.expire_dateArabic,
        nameArabic: router.query.name,
      },
    });
  };

  return (
    <div>
      <ImageWrapper>
        <img src="/images/certificate.jpeg" alt="certificate" />
        <InputWrapper className="ID-number">
          {router.query.idnumber}
        </InputWrapper>
        <InputWrapper className="Certificate-number">
          {router.query.certificate_number}
        </InputWrapper>
        <InputWrapper className="Expire-Date">
          {router.query.expire_date}
        </InputWrapper>
        <InputWrapper className="name">{router.query.name}</InputWrapper>
        <InputWrapper className="ID-number-arabic">
          {router.query.idnumber}
        </InputWrapper>
        <InputWrapper className="Certificate-number-arabic">
          {router.query.certificate_numberArabic}
        </InputWrapper>
        <InputWrapper className="Expire-Date-arabic">
          {router.query.expire_dateArabic}
        </InputWrapper>
        <InputWrapper className="name-arabic">{router.query.name}</InputWrapper>
        {/* <QRcodeComponent /> */}
        {/* <QRcode>
              <img
                src="/images/qrcode.png"
                alt="qrcode"
                width={150}
                height={150}
              />
            </QRcode> */}
      </ImageWrapper>
      <PreviewCertificate onClick={sendStateToPreview}>
        Download Certificate
      </PreviewCertificate>
    </div>
  );
};
export default GenerateCertificate;
