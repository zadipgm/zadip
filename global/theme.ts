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
      lightThemeColor: string;
      darkBlue: string;
      red: string;
      lightBlue: string;
      headerLightColor: string;
      darkGray: string;
      white: string;
      black: string;
      black1: string;
      gray1: string;
      gray2: string;
      gray3: string;
      success: string;
      error: string
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
    themeColor: "linear-gradient(-49deg,#022646cc 22%,#12baff);",
    lightThemeColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    headerLightColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    darkGray: "#454647",
    darkBlue: "#044783",
    red: "#dd3737",
    lightBlue: "#0969a5d6",
    white: "#fff",
    black: "#000",
    black1: "#292929",
    gray1: "#5a5c69",
    gray2: "#cfcfcf",
    gray3: "#cfcfcf45",
    success: "#0d880d",
    error: "#ec0e0e"
  },
};

export default defaultTheme;
