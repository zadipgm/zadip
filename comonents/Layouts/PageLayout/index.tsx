import { ReactElement } from "react";
import Footer from "../../Footer/footer";
import Header from "../../Header/header";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../global/theme";
import { Container } from "./styled.components";
interface IProps {
  children: ReactElement;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const [initialRenderComplete, setInitialRenderComplete] =
    React.useState(false);

  React.useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default Layout;
