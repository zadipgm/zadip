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
import { fetchUserData } from "../hooks/api/getUsers";
import { useFetch } from "../hooks/api/certificate";
const PreViewCertificate = () => {
  const router = useRouter();
  const [isClient, setIsClient] = React.useState(false);
  const toFa = (n) => n?.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  const [userData, setUserData] = React.useState([]);
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  let fetchurl = `${APP_URL}/certificates` as RequestInfo | URL;
  const { certificateData } = useFetch(fetchurl);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  let url = new URL(
    `https://zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${router.query.idnumber}`
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
  //fetch user
  React.useEffect(() => {
    fetchUserData(setUserData);
  }, []);
  //filter user by ID_number
  let user = userData?.filter((u) => u.nationalID === router.query.idnumber);
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

  let filter_certificate_number =
    certificateData &&
    certificateData?.filter((item) => item.nationalID === user[0]?.nationalID);
  // PDF Template

  const pdfTemplate = () => {
    return (
      isClient && (
        <PDFViewer style={styles.viewer}>
          <Document language="ar">
            <Page size="A4" style={styles.page} orientation="landscape">
              <View style={styles.section} fixed>
                <Image
                  style={styles.image}
                  src={`/images/${user[0]?.gender}.jpg`}
                />
                <Text style={styles.IDArabic}>
                  {" "}
                  {toFa(
                    (user[0]?.nationalID as string)
                      ?.split("")
                      .reverse()
                      .join("") as string
                  )}
                </Text>
                <Text style={styles.certificateArabic}>
                  {
                    toFa(
                      filter_certificate_number &&
                        filter_certificate_number[0]?.certificate_number
                    )
                      ?.split("")
                      .reverse()
                      .join("") as string
                  }
                </Text>
                <Text
                  style={styles.dateArabic}
                >{`${reverseDay}/${reverseMonth}/${reverseYear_AR}`}</Text>
                <Text style={styles.nameArabic}>{user[0]?.name_ar}</Text>
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
