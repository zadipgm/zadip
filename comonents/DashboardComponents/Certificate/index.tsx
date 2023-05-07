import * as React from "react";
import {
  Container,
  ImageWrapper,
  InputWrapper,
  Name,
  PreviewCertificate,
  QRcode,
} from "./styled";
import PreViewCertificate from "./preview";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import QRcodeComponent from "../QRcode";

const Certificate = () => {
  const { locale } = useTheme();
  const [idnumber, setIdNumber] = React.useState("");
  const [certificate_number, setCertificate_number] = React.useState("");
  const [expire_date, setExpire_date] = React.useState("");
  const [name, setName] = React.useState("");
  const [idnumberArabic, setIdNumberArabic] = React.useState("");
  const [certificate_numberArabic, setCertificate_numberArabic] =
    React.useState("");
  const [expire_dateArabic, setExpire_dateArabic] = React.useState("");
  const [nameArabic, setNameArabic] = React.useState("");
  const router = useRouter();

  const sendStateToPreview = (e) => {
    e.preventDefault();
    router.push({
      pathname: `/${locale}/dashboard/certificate/preview`,
      query: {
        idnumber: idnumber,
        certificate_number: certificate_number,
        expire_date: expire_date,
        name: name,
        idnumberArabic: idnumberArabic,
        certificate_numberArabic: certificate_numberArabic,
        expire_dateArabic: expire_dateArabic,
        nameArabic: nameArabic,
      },
    });
  };
  return (
    <Container>
      <form onSubmit={(e) => sendStateToPreview(e)}>
        <ImageWrapper>
          <img src="/images/certificate.jpeg" alt="certificate" />
          <InputWrapper className="ID-number">
            <input
              type="text"
              name={"ID number"}
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper className="Certificate-number">
            <input
              type="text"
              name="Certificate number"
              onChange={(e) => setCertificate_number(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper className="Expire-Date">
            <input
              type="date"
              name="Expire Date"
              onChange={(e) => setExpire_date(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper className="name">
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputWrapper>

          <InputWrapper className="ID-number-arabic">
            <input
              type="text"
              name={"ID number"}
              onChange={(e) => setIdNumberArabic(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper className="Certificate-number-arabic">
            <input
              type="text"
              name="Certificate number"
              onChange={(e) => setCertificate_numberArabic(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper className="Expire-Date-arabic">
            <input
              type="date"
              name="Expire Date"
              onChange={(e) => setExpire_dateArabic(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper className="name-arabic">
            <input
              type="text"
              name="name"
              onChange={(e) => setNameArabic(e.target.value)}
              required
            />
          </InputWrapper>
          {/* <QRcodeComponent /> */}
          <QRcode>
            <img
              src="/images/qrcode.png"
              alt="qrcode"
              width={150}
              height={150}
            />
          </QRcode>
        </ImageWrapper>
        <PreviewCertificate type="submit">
          Preview Certificate
        </PreviewCertificate>
      </form>
    </Container>
  );
};

export default Certificate;
