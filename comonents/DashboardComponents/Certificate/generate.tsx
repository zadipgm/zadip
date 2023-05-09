import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import { ImageWrapper, InputWrapper, PreviewCertificate } from "./styled";
const GenerateCertificate = () => {
  const router = useRouter();
  const { locale } = useTheme();
  const toFa = (n) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  const sendStateToPreview = (e) => {
    router.push({
      pathname: `/${locale}/dashboard/certificate/preview`,
      query: {
        idnumber: router.query.idnumber,
        certificate_number: router.query.certificate_number,
        expire_date: router.query.expire_date,
        name: router.query.name,
        idnumberArabic: toFa(router.query.idnumber),
        certificate_numberArabic: toFa(router.query.certificate_number),
        expire_dateArabic: toFa(router.query.expire_dateArabic),
        nameArabic: router.query.nameArabic,
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
          {toFa(router.query.idnumber)}
        </InputWrapper>
        <InputWrapper className="Certificate-number-arabic">
          {toFa(router.query.certificate_numberArabic)}
        </InputWrapper>
        <InputWrapper className="Expire-Date-arabic">
          {toFa(router.query.expire_dateArabic)}
        </InputWrapper>
        <InputWrapper className="name-arabic">
          {router.query.nameArabic}
        </InputWrapper>
      </ImageWrapper>
      <PreviewCertificate onClick={sendStateToPreview}>
        Download Certificate
      </PreviewCertificate>
    </div>
  );
};
export default GenerateCertificate;
