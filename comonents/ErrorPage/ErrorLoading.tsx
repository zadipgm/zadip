import { useTheme } from "styled-components";
import {
  Content,
  Contianer,
  Description,
  Image,
  Message,
} from "./errorpage.styles";

const ErrorLoading = () => {
  const { translations } = useTheme();
  return (
    <Contianer>
      <Content>
        <Image src="/images/404_error.png" alt="page Not found" />
        <Message>{translations.pagenotfound.message}</Message>
        <Description>{translations.pagenotfound.description}</Description>
      </Content>
    </Contianer>
  );
};
export default ErrorLoading;
