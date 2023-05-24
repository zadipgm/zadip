import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import {
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
  const router = useRouter();
  const { device } = useTheme();
  console.log("heee", device);
  const toFa = (n) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

  let page = device === "desktop" ? "preview" : "mpreview";
  let url = new URL(
    `https://zadip.sa/en//dashboard/certificate/${page}/?idnumber=${router.query.idnumber}`
    // }&certificate_number=${router.query.certificate_number}&expire_date=${
    //   router.query.expire_date
    // }&name=${router.query.name}&idnumberArabic=${toFa(
    //   router.query.idnumber
    // )}&certificate_numberArabic=${toFa(
    //   router.query.certificate_numberArabic
    // )}&expire_dateArabic=${toFa(router.query.expire_dateArabic)}&nameArabic=${
    //   router.query.nameArabic
    // }`
  );

  let user = data.certificate.filter(
    (u) => u.ID_number === router.query.idnumber
  );
  console.log(user);

  return (
    <div>
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
          {toFa(user[0].ID_number.split("").reverse().join("") as string)}
        </InputWrapper>
        <InputWrapper className="Certificate-number-arabic">
          {toFa(
            (user[0].certificate_number as string)
              .split("")
              .reverse()
              .join("") as string
          )}
        </InputWrapper>
        <InputWrapper className="Expire-Date-arabic">
          {
            toFa(arabicDate as string)
              .split("")

              .join("") as string
          }
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
