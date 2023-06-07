import * as React from "react";
import { ContainerPdf } from "./styled";
import {
  Document,
  Page,
  Image,
  View,
  PDFViewer,
  Text,
  Font,
} from "@react-pdf/renderer";
import { useRouter } from "next/router";
import { styles } from "./previewStyle";
import { arabicDate } from "../hooks/certificateDate/iindex";
interface IData {
  name?: string;
  gender?: string;
  nationalID?: string;
  certificate_number?: string;
  expiry_date?: string;
}
interface IProps {
  data?: IData[];
}
const PreViewCertificate = ({ data }: IProps) => {
  const router = useRouter();
  const toFa = (n) => n?.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

  let filter_certificate =
    data && data?.filter((item) => item.nationalID === router.query.idnumber);
  let url = new URL(
    `https://zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${
      filter_certificate && filter_certificate[0]?.nationalID
    }`
  );

  // register font family for PDF
  Font.register({
    family: "Cairo",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hD45W1ToLQ-HmkA.ttf",
      },
    ],
  });

  let img = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
  //day reverse
  let arabicDay = arabicDate.split("/")[0].toString();
  let reverseDay = arabicDay.split("").reverse().join("");
  //month reverse
  let arabicMonth = arabicDate.split("/")[1].toString();
  let reverseMonth = arabicMonth.split("").reverse().join("");
  //year reverse
  let arabicYear = arabicDate.split("/")[2].toString();
  let reverseYear = arabicYear.split("هـ")[0].toString();
  let reverseYear_AR = reverseYear.split("").reverse().join("");

  // PDF Template

  const pdfTemplate = () => {
    return (
      data && (
        <PDFViewer style={styles.viewer}>
          <Document language="ar">
            <Page size="A4" style={styles.page} orientation="landscape">
              <View style={styles.section} fixed>
                <Image
                  style={styles.image}
                  src={`/images/${
                    filter_certificate &&
                    filter_certificate[0]?.gender === "male"
                      ? "male"
                      : "female"
                  }.jpg`}
                />
                <Text style={styles.IDArabic}>
                  {" "}
                  {toFa(
                    (
                      filter_certificate &&
                      (filter_certificate[0]?.nationalID as string)
                    )
                      ?.split("")
                      .reverse()
                      .join("") as string
                  )}
                </Text>
                <Text style={styles.certificateArabic}>
                  {
                    toFa(
                      filter_certificate &&
                        filter_certificate[0]?.certificate_number
                    )
                      ?.split("")
                      .reverse()
                      .join("") as string
                  }
                </Text>
                <Text
                  style={styles.dateArabic}
                >{`${reverseDay}/${reverseMonth}/${reverseYear_AR}`}</Text>
                <Text style={styles.nameArabic}>
                  {filter_certificate && filter_certificate[0]?.name}
                </Text>
                <Image src={img} style={styles.qr} />
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )
    );
  };
  return <ContainerPdf>{pdfTemplate()}</ContainerPdf>;
};
export default PreViewCertificate;
