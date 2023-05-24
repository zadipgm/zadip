import { ImageWrapper, InputWrapper } from "./styled";
import { useRouter } from "next/router";
import QRcodeComponent from "../QRcode";
import data from "dataLayer/certificate.json";
import { arabicDate, englishDate } from "../hooks/certificateDate/iindex";
const MobilePreview = () => {
  const router = useRouter();
  const toFa = (n) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  let user = data.certificate.filter(
    (u) => u.ID_number === router.query.idnumber
  );
  return (
    <>
      <ImageWrapper>
        <img src="/images/certificate.jpeg" alt="certificate" width={"100%"} />
        <InputWrapper className="ID-number mobile">
          {user[0].ID_number}
        </InputWrapper>
        <InputWrapper className="Certificate-number mobile">
          {user[0].certificate_number}
        </InputWrapper>
        <InputWrapper className="Expire-Date mobile">
          {englishDate}
        </InputWrapper>
        <InputWrapper className="name mobile">{user[0].name_en}</InputWrapper>
        <InputWrapper className="ID-number-arabic mobile">
          {toFa(user[0].ID_number as string)}
        </InputWrapper>
        <InputWrapper className="Certificate-number-arabic mobile">
          {toFa(user[0].certificate_number as string)}
        </InputWrapper>
        <InputWrapper className="Expire-Date-arabic mobile">
          {arabicDate.substring(0, 12) as string}
        </InputWrapper>
        <InputWrapper className="name-arabic mobile">
          {user[0].name_ar}
        </InputWrapper>
        <QRcodeComponent
          value={`https://zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${user[0].ID_number}`}
          width={"35px"}
          height={"35px"}
          classname={"mobile-qr"}
        />
      </ImageWrapper>
    </>
  );
};
export default MobilePreview;
