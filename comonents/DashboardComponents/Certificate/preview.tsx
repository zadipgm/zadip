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
    `https://zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${
      router.query.idnumber
      // }&certificate_number=${router.query.certificate_number}&expire_date=${
      //   router.query.expire_date
      // }&name=${router.query.name}&idnumberArabic=${toFa(
      //   router.query.idnumber
      // )}&certificate_numberArabic=${toFa(
      //   router.query.certificate_numberArabic
      // )}&expire_dateArabic=${toFa(router.query.expire_dateArabic)}&nameArabic=${
      //   router.query.nameArabic
    }`
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

  // PDF Template
  let img = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;

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
                  {user[0].certificate_number}
                </Text>
                <Text style={styles.date}>{englishDate}</Text>
                <Text style={styles.name}>{user[0].name_en}</Text>
                <Text style={styles.IDArabic}>{toFa(user[0].ID_number)}</Text>
                <Text style={styles.certificateArabic}>
                  {toFa(user[0].certificate_number)}
                </Text>
                <Text style={styles.dateArabic}>{toFa(arabicDate)}</Text>
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
