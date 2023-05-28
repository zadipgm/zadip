import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  CertificateNumber,
  Goback,
  ImageWrapper,
  InputWrapper,
  PreviewCertificate,
  Title,
} from "./styled";
import QRcodeComponent from "../QRcode";
import data from "dataLayer/certificate.json";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { arabicDate, englishDate } from "../hooks/certificateDate/iindex";

const GenerateCertificate = () => {
  //find the max number of certificates

  let findMaxNumber = data.certificate
    .map((max) => max.certificate_number)
    .sort((a, b) => Number(b) - Number(a));
  let maxNumber = Number(findMaxNumber[0]);

  const router = useRouter();
  const { device } = useTheme();
  const toFa = (n) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  let page = device === "desktop" ? "preview" : "mpreview";
  let url = new URL(
    `https://zadip.sa/en//dashboard/certificate/mpreview/?idnumber=${router.query.idnumber}`
  );

  //filter user by ID_number
  let user = data.certificate.filter(
    (u) => u.ID_number === router.query.idnumber
  );

  // Convert certificate number to a string
  let arabicNumber = Number(maxNumber + 1);
  let arabicStr = arabicNumber.toString();

  return (
    <div>
      <Goback onClick={() => router.back()} className="back">
        Go back to list
      </Goback>
      <Title>Certificate Preview</Title>
      <ImageWrapper>
        <img src="/images/certificate.jpeg" alt="certificate" />
        <InputWrapper className="ID-number">{user[0]?.ID_number}</InputWrapper>
        <InputWrapper className="Certificate-number">
          {user[0]?.certificate_number}
        </InputWrapper>
        <InputWrapper className="Expire-Date">{englishDate}</InputWrapper>
        <InputWrapper className="name">{user[0]?.name_en}</InputWrapper>
        <InputWrapper className="ID-number-arabic">
          {toFa(user[0].ID_number)}
        </InputWrapper>
        <InputWrapper className="Certificate-number-arabic">
          {toFa(user[0]?.certificate_number)}
        </InputWrapper>
        <InputWrapper className="Expire-Date-arabic">
          {arabicDate.substring(0, 12) as string}
        </InputWrapper>
        <InputWrapper className="name-arabic">{user[0].name_ar}</InputWrapper>
        <QRcodeComponent
          value={url as unknown as string}
          width="80px"
          height="80px"
        />
      </ImageWrapper>

      <PreviewCertificate
        href={`/dashboard/certificate/${page}/?idnumber=${user[0].ID_number}`}
        target={"_blank"}
      >
        Generate Certificate
      </PreviewCertificate>
    </div>
  );
};
export default GenerateCertificate;
