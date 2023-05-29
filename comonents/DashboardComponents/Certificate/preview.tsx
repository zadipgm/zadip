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
import data from "dataLayer/certificate.json";
import { arabicDate, englishDate } from "../hooks/certificateDate/iindex";
const PreViewCertificate = () => {
  const router = useRouter();
  const [isClient, setIsClient] = React.useState(false);
  const toFa = (n) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

  React.useEffect(() => {
    setIsClient(true);
  }, []);
  let url = new URL(
    `https://zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${router.query.idnumber}`
  );
  let user = data.certificate.filter(
    (u) => u.ID_number === router.query.idnumber
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

  // find max number
  let findMaxNumber = data.certificate
    .map((max) => max.certificate_number)
    .sort((a, b) => Number(b) - Number(a));
  let maxNumber = Number(findMaxNumber[0]);
  // Convert certificate number to a string
  let arabicNumber = Number(maxNumber + 1);
  let arabicStr = arabicNumber.toString();
  // PDF Template
  const pdfTemplate = () => {
    return (
      isClient && (
        <PDFViewer style={styles.viewer}>
          <Document language="ar">
            <Page size="A4" style={styles.page} orientation="landscape">
              <View style={styles.section} fixed>
                <Image style={styles.image} src="/images/certificate.jpeg" />
                <Text style={styles.ID}>{user[0].ID_number}</Text>
                <Text style={styles.certificate}>
                  {user[0]?.certificate_number}
                </Text>
                <Text style={styles.date}>{englishDate}</Text>
                <Text style={styles.name}>{user[0].name_en}</Text>
                <Text style={styles.IDArabic}>
                  {" "}
                  {toFa(
                    (user[0].ID_number as string)
                      .split("")
                      .reverse()
                      .join("") as string
                  )}
                </Text>
                <Text style={styles.certificateArabic}>
                  {toFa(user[0]?.certificate_number as unknown as string)}
                </Text>
                <Text
                  style={styles.dateArabic}
                >{`${reverseDay}/${reverseMonth}/${reverseYear_AR}`}</Text>
                <Text style={styles.nameArabic}>{user[0].name_ar}</Text>
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
