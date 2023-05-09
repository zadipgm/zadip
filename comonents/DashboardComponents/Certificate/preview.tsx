import * as React from "react";
import { ContainerPdf, PreviewCertificate } from "./styled";
import {
  Document,
  Page,
  Image,
  View,
  StyleSheet,
  PDFViewer,
  Text,
  Font,
} from "@react-pdf/renderer";
import { useRouter } from "next/router";

// AIzaSyCoEVYGBZPtlTkNl7w11B6oz0G14R83FOg
const PreViewCertificate = () => {
  Font.register({
    family: "Cairo",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hD45W1ToLQ-HmkA.ttf",
      },
    ],
  });
  const styles = StyleSheet.create({
    page: {},
    image: {
      width: "98.5%",
      height: "auto",
    },
    image2: {
      width: 100,
      height: 100,
      position: "absolute",
      left: "42%",
      bottom: 0,
      right: "42%",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: "100%",
      height: "100vh",
    },
    ID: {
      fontSize: 14,
      color: "#465364",
      position: "absolute",
      left: "29%",
      top: "32%",
    },
    certificate: {
      fontSize: 14,
      color: "#465364",
      position: "absolute",
      left: "29%",
      top: "36.5%",
    },
    date: {
      fontSize: 14,
      color: "#465364",
      position: "absolute",
      left: "29%",
      top: "41%",
      fontFamily: "Cairo",
    },
    name: {
      fontSize: 14,
      color: "#465364",
      position: "absolute",
      left: "18%",
      top: "54.5%",
    },
    IDArabic: {
      fontSize: 14,
      color: "#465364",
      position: "absolute",
      right: "29%",
      top: "32%",
      fontFamily: "Cairo",
    },
    certificateArabic: {
      fontSize: 14,
      color: "#465364",
      position: "absolute",
      right: "29%",
      top: "36.5%",
      fontFamily: "Cairo",
    },
    dateArabic: {
      fontSize: 14,
      color: "#465364",
      position: "absolute",
      right: "29%",
      top: "41%",
      fontFamily: "Cairo",
    },
    nameArabic: {
      fontSize: 14,
      color: "#465364",
      position: "absolute",
      right: "20%",
      top: "53.5%",
      fontFamily: "Cairo",
    },
  });
  React.useEffect(() => {
    setTimeout(() => {
      pdfTemplate();
    }, 3000);
  }, []);
  const router = useRouter();
  const pdfTemplate = () => {
    return (
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
              <Text style={styles.IDArabic}>{router.query.idnumberArabic}</Text>
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
    );
  };
  return <ContainerPdf>{pdfTemplate()}</ContainerPdf>;
};
// ReactPDF.render(<PreViewCertificate />, "certificate.pdf");
export default PreViewCertificate;
