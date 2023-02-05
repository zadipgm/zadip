
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
    themeColor: "linear-gradient(-49deg,#0969a5d6 22%,#e61a6cdb);",
    lightThemeColor: "linear-gradient(-49deg,#31b0ff6e 22%,#e61a6c5c);",
    headerLightColor: "linear-gradient(-49deg,#2dadfd1f 22%,#e61a6c5c);",
    darkBlue: "#044783",
    lightBlue: "#0969a5d6",
    white: "#fff",
    black: "#000"
  }
};

export default defaultTheme;
