import {
    StyleSheet,
} from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    qr: {
        width: '50px',
        height: '50px',
        position: "absolute",
        right: "40%",
        left: "4.2%",
        top: "5.8%",
    },
    page: {},
    image: {
        width: "100%",
        height: "auto",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: "100%",
        height: "100vh",
    },
    IDArabic: {
        fontSize: 17,
        color: "#525252",
        position: "absolute",
        top: "66.5%",
        right: "80.5%",
        fontFamily: "Cairo",
    },
    certificateArabic: {
        fontSize: 18,
        color: "#525252",
        position: "absolute",
        right: "57.5%",
        top: "66.7%",
        fontFamily: "Cairo",
    },
    dateArabic: {
        fontSize: 18,
        color: "#525252",
        position: "absolute",
        right: "81.2%",
        top: "60.5%",
        fontFamily: "Cairo",
        backgroundColor: "#FFFFFF",
    },
    nameArabic: {
        fontSize: 16,
        color: "#525252",
        position: "absolute",
        right: "58.5%",
        top: "32%",
        fontFamily: "Cairo",
    },
});