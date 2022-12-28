
import { DefaultTheme } from "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    translations?:
      | typeof import("../locales/ar").default
      | typeof import("../locales/en").default;
    direction: "rtl" | "ltr";
    isLTR: boolean;
    isRTL: boolean;
    locale: "ar" | "en";
    colors: {
      Black: string;
    };
  }
}

const defaultTheme: DefaultTheme = {

  locale: "en",
  direction: "rtl",
  isLTR: false,
  isRTL: true,
  colors: {
    Black: "#000",
  }
};

export default defaultTheme;
