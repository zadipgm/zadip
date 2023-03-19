import axios from "axios";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  Title,
  Form,
  FormWrapper,
  Input,
  Label,
  Submit,
  TextArea,
  Wrapper,
  Select,
} from "./styled.components";
const HeadTagComponent = () => {
  const { isLTR } = useTheme();
  const [pageTitle, setPageTitle] = React.useState("");
  const [metaName, setMetaName] = React.useState("description");
  const [metaDescription, setMetaDescription] = React.useState("");
  const [metaProperty, setMetaProperty] = React.useState("og:title");
  const [metaPropertyDescription, setmetaPropertyDescription] =
    React.useState("");
  const [pageName, setPageName] = React.useState("home");
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      await axios.post(`${APP_URL}/set_head`, {
        Page_Title: pageTitle,
        Meta_Name: metaName,
        Meta_Description: metaDescription,
        Meta_Property: metaProperty,
        Meta_Property_Description: metaPropertyDescription,
        Page_Name: pageName,
      });
      setPageTitle("");
      setMetaName("");
      setMetaDescription("");
      setMetaProperty("");
      setmetaPropertyDescription("");
      setPageName("");
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container>
      <Title>{isLTR ? "Zadip Head Tag" : "صفحة بيانات زاد"}</Title>
      <Form onSubmit={(e) => handelSubmit(e)}>
        <FormWrapper>
          <Wrapper>
            <Label htmlFor="title">
              {isLTR ? "Page Title" : "عنوان الصفحة"}
            </Label>
            <TextArea
              value={pageTitle}
              placeholder={
                isLTR ? "Enter page title..." : "أدخل عنوان الصفحة ..."
              }
              onChange={(e) => setPageTitle(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="Meta Name">
              {isLTR ? "Meta Name" : "اسم ميتا"}
            </Label>
            <Select
              value={metaName}
              onChange={(e) => setMetaName(e.target.value)}
            >
              <option value="description">Description</option>
              <option value="keywords">Keywords</option>
            </Select>
          </Wrapper>
          <Wrapper>
            <Label htmlFor="Meta Name Content">
              {isLTR ? "Meta Name Content" : " محتوى اسم التعريف"}
            </Label>
            <TextArea
              value={metaDescription}
              placeholder={
                isLTR
                  ? "Enter meta name Content..."
                  : "أدخل محتوى اسم التعريف ..."
              }
              onChange={(e) => setMetaDescription(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="Meta Property">
              {isLTR ? "Meta Property" : "خاصية ميتا"}
            </Label>
            <Select
              value={metaProperty}
              onChange={(e) => setMetaProperty(e.target.value)}
            >
              <option value="og:title">og:title</option>
              <option value="og:description">og:description</option>
              <option value="og:image">og:image</option>
              <option value="og:url">og:url</option>
            </Select>
          </Wrapper>
          <Wrapper>
            <Label htmlFor="Meta Property Content">
              {isLTR ? "Meta Property Content" : " محتوى خاصية التعريف"}
            </Label>
            <TextArea
              required
              value={metaPropertyDescription}
              placeholder={
                isLTR
                  ? "Enter meta Property Content..."
                  : "أدخل محتوى خاصية التعريف ..."
              }
              onChange={(e) => setmetaPropertyDescription(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="page">{isLTR ? "Page Name" : "اسم الصفحة"}</Label>
            {/* <Input
              type="text"
              required
              value={pageName}
              placeholder={isLTR ? "Enter page name..." : "أدخل اسم الصفحة ..."}
              onChange={(e) => setPageName(e.target.value)}
            /> */}
            <Select
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
            >
              <option value="home">Home</option>
              <option value="muaref">Muaref</option>
              <option value="professional_services">
                Professional Services
              </option>
              <option value="client_partners">Client & Partners</option>
              <option value="about_us">About Us</option>
              <option value="recruitment">Recruitment</option>
              <option value="tam">Tam</option>
              <option value="muqeem">Muqeem</option>
              <option value="masarat">Masarat</option>
              <option value="smartgate">Smart Gate</option>
            </Select>
          </Wrapper>
        </FormWrapper>
        <Submit type={"submit"} value={isLTR ? "submit" : "قدم"} />
      </Form>
    </Container>
  );
};
export default HeadTagComponent;
