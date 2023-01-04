import { ReactElement } from "react";
import Footer from "../../Footer/footer";
import Header from "../../Header/header";
import i18n from "i18next";
import * as React from "react";
import LocaleContext from "../../../LocaleContext";
interface IProps {
  children: ReactElement;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const [locale, setLocale] = React.useState(i18n.language);
  const [initialRenderComplete, setInitialRenderComplete] =
    React.useState(false);

  React.useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
  i18n.on("languageChanged", () => setLocale(i18n.language));
  return (
    <>
      <div dir={locale === "en-US" || locale === "en" ? "ltr" : "rtl"}>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Header />
          {children}
          <Footer />
        </LocaleContext.Provider>
      </div>
    </>
  );
};
export default Layout;
