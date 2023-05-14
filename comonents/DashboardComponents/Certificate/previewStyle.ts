import {
    StyleSheet,
} from "@react-pdf/renderer";

export const styles = StyleSheet.create({
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