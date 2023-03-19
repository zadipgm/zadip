
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
    direction: "rtl" | "ltr";
    isLTR: boolean;
    device: "mobile" | "desktop" | "tablet";
    isRTL: boolean;
    locale: "ar" | "en-US" | "en";
    colors: {
      themeColor: string;
      lightThemeColor: string
      darkBlue: string;
      lightBlue: string;
      headerLightColor: string
      white: string
      black: string
      black1: string
      gray1: string
      gray2: string
      gray3: string
    };
  }
}

const defaultTheme: DefaultTheme = {

  locale: "en",
  direction: "rtl",
  device: "mobile",
  isLTR: false,
  isRTL: true,
  colors: {
    themeColor: "linear-gradient(-49deg,#09589d 22%, #56ceff);",
    lightThemeColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    headerLightColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    darkBlue: "#044783",
    lightBlue: "#0969a5d6",
    white: "#fff",
    black: "#000",
    black1: "#292929",
    gray1: "#5a5c69",
    gray2: "#cfcfcf",
    gray3: "#cfcfcf1f",
  }
};

export default defaultTheme;
