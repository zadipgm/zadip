import * as React from "react";
import { PreviewCertificate, QRcode } from "./styled";
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

const styles = StyleSheet.create({
  page: {
    // backgroundColor: "#d11fb6",
  },
  image: {
    width: "auto",
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
    width: "100%", //the pdf viewer will take up all of the width and height
    height: "100vh",
  },
  ID: {
    fontSize: 10,
    color: "#465364",
    position: "absolute",
    left: "35%",
    top: "34%",
  },
  certificate: {
    fontSize: 10,
    color: "#465364",
    position: "absolute",
    left: "35%",
    top: "38.5%",
  },
  date: {
    fontSize: 10,
    color: "#465364",
    position: "absolute",
    left: "35%",
    top: "43%",
  },
  name: {
    fontSize: 10,
    color: "#465364",
    position: "absolute",
    left: "20%",
    top: "55%",
  },
  IDArabic: {
    fontSize: 10,
    color: "#465364",
    position: "absolute",
    right: "35%",
    top: "34%",
  },
  certificateArabic: {
    fontSize: 10,
    color: "#465364",
    position: "absolute",
    right: "35%",
    top: "38.5%",
  },
  dateArabic: {
    fontSize: 10,
    color: "#465364",
    position: "absolute",
    right: "35%",
    top: "43%",
  },
  nameArabic: {
    fontSize: 10,
    color: "#465364",
    position: "absolute",
    right: "20%",
    top: "55%",
  },
});
const PreViewCertificate = () => {
  const router = useRouter();
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
            <Text style={styles.nameArabic}>{router.query.name}</Text>
            {/* <QRcode>
              <Image src="/images/qrcode.png" style={styles.image2} />
            </QRcode> */}
            <PreviewCertificate>Preview Certificate</PreviewCertificate>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PreViewCertificate;
