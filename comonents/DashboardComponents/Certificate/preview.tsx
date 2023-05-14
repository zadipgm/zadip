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

const PreViewCertificate = () => {
  const router = useRouter();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

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

  const pdfTemplate = () => {
    return (
      isClient && (
        <PDFViewer style={styles.viewer}>
          <Document language="ar">
            <Page size="A4" style={styles.page} orientation="landscape">
              <View style={styles.section}>
                <Image style={styles.image} src="/images/certificate.jpeg" />
                <Text style={styles.ID}>{router.query.idnumber}</Text>
                <Text style={styles.certificate}>
                  {router.query.certificate_number}
                </Text>
                <Text style={styles.date}>{router.query.expire_date}</Text>
                <Text style={styles.name}>{router.query.name}</Text>
                <Text style={styles.IDArabic}>
                  {router.query.idnumberArabic}
                </Text>
                <Text style={styles.certificateArabic}>
                  {router.query.certificate_numberArabic}
                </Text>
                <Text style={styles.dateArabic}>
                  {router.query.expire_dateArabic}
                </Text>
                <Text style={styles.nameArabic}>{router.query.nameArabic}</Text>
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
