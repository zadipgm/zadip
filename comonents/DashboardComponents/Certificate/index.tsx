import * as React from "react";
import {
  Arabic,
  Container,
  Content,
  Date,
  English,
  HR,
  Heading,
  InfoWrapper,
  QRcode,
  Text,
  Wrapper,
} from "./styled";
import CertificateSvg from "public/icons/certificateSvg";

const Certificate = () => {
  return (
    <Container>
      {/* < width="99" height="139" fill="#fff" /> */}
      <img src="/images/logo.png" alt="" width={300} />
      <Heading>
        <span>Ektefa</span> HRMS Training completion certificate
      </Heading>
      <Wrapper>
        <English>
          <InfoWrapper>
            <p className="heading">ID number:</p>
            <p>2529283364</p>
          </InfoWrapper>
          <InfoWrapper>
            <p className="heading">Certificate Number:</p>
            <p>004</p>
          </InfoWrapper>
          <InfoWrapper>
            <p className="heading">Expire Date:</p>
            <p>04-05-2024</p>
          </InfoWrapper>
          <br />
          <p>Here by ZADIP GROUP Certifies that</p>
          <p>MR.\</p>
          <br />

          <p className="pass">Has Passed training Exams and workshop</p>
          <p className="pass">to oprate Ektefa HRMS v2 And was awarded</p>
          <p className="pass">the certificate to prove that</p>
          <br />
          <p className="center">General Manager</p>
          <p className="center">ZADIP GROUP</p>
          <p className="name center">Mr.Abdullah Aljelaify</p>
        </English>
        <HR></HR>
        <Arabic>
          <InfoWrapper>
            <p className="heading">رقم الهوية :</p>
            <p>2529283364</p>
          </InfoWrapper>
          <InfoWrapper>
            <p className="heading">رقم الشهادة :</p>
            <p>004</p>
          </InfoWrapper>
          <InfoWrapper>
            <p className="heading">تاريخ انتهاء الشهادة :</p>
            <p>04-05-2024</p>
          </InfoWrapper>
          <br />
          <p>تشهد مجموعة زاد المعلومات التجارية بأن</p>
          <p>السيد/</p>
          <br />

          <p className="pass">قد اجتاز التدريب والاختبار النظري والعملي</p>
          <p className="pass">لنظام اكتفاء للموارد البشرية النسخة رقم 2</p>
          <p className="pass">
            ويستطيع تشغيل النظام بكفاءة عالية .. والله الموفق
          </p>
          <br />
          <p className="center">المدير العام</p>
          <p className="center">مجموعة زاد المعلومات التجارية</p>
          <p className="name center">عبد الله فهد الجليفي</p>
        </Arabic>
      </Wrapper>
      {/* <Date className="date">
        Issued on <span className="bold">MAy 3 2023</span>
      </Date> */}
      <QRcode>
        <img src="/images/qrcode.png" alt="qrcode" width={150} height={150} />
      </QRcode>
    </Container>
  );
};

export default Certificate;
