import axios from "axios";
import * as React from "react";
import AddEditForm from "./AddEditForm";
import { Container, Title } from "./styled.components";
import AllPagesScript from "./AllPagesScript";

const HeadTagComponent = () => {
  const [dataId, setDataID] = React.useState();
  const [pageName, setPageName] = React.useState("home");
  const [loading, setLoading] = React.useState(true);
  const [pageTitle, setPageTitle] = React.useState();
  const [metaDescription, setMetaDescription] = React.useState();
  const [metaKeyWordDescription, setmetaKeyWordDescription] = React.useState();
  const [metaOgTitle, setmetaOgTitle] = React.useState();
  const [metaOgDescription, setmetaOgDescription] = React.useState();
  const [metaOgImage, setmetaOgImage] = React.useState();
  const [metaOgEditUrl, setmetaOgEditUrl] = React.useState("");
  const [allpagesContent, setAllpagesContent] = React.useState("");
  const [allpagesContentID, setAllpagesContentID] = React.useState();
  const fetchItem = async () => {
    let page = pageName.length > 0 ? pageName : "";
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      setLoading(true);
      await axios
        .get(`${APP_URL}/get_head`, {
          params: {
            page: `${page}`,
          },
        })
        .then((res) => {
          setDataID(res.data[0].id);
          setPageTitle(res.data[0].Page_Title);
          setMetaDescription(res.data[0].Meta_Description);
          setmetaKeyWordDescription(res.data[0].Meta_Keyword_Description);
          setmetaOgTitle(res.data[0].Meta_og_title);
          setmetaOgDescription(res.data[0].Meta_og_description);
          setmetaOgImage(res.data[0].Meta_og_image);
          setmetaOgEditUrl(res.data[0].Meta_og_Url);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllSeo = async () => {
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      setLoading(true);
      await axios.get(`${APP_URL}/get_all`, {}).then((res) => {
        setAllpagesContent(res.data[0].all_page_content);
        setAllpagesContentID(res.data[0].id);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchItem();
    fetchAllSeo();
  }, [pageName]);

  const pageNameHandler = (param: React.SetStateAction<string>) => {
    setPageName(param);
  };
  return (
    <Container>
      <Title>{"Meta Tags Content Management"}</Title>
      <AddEditForm
        pageNameHandler={(param) => pageNameHandler(param)}
        dataid={dataId}
        pageTitles={pageTitle}
        metaDescriptions={metaDescription}
        metaKeyWordDescriptions={metaKeyWordDescription}
        metaOgTitles={metaOgTitle}
        metaOgEditDescriptions={metaOgDescription}
        metaOgImages={metaOgImage}
        pageName={pageName}
        loading={loading}
        metaOgEditUrl={metaOgEditUrl}
        setPageTitles={(param) => setPageTitle(param)}
        setMetaDescriptions={(param) => setMetaDescription(param)}
        setmetaKeyWordDescriptions={(param) => setmetaKeyWordDescription(param)}
        setmetaOgTitles={(param) => setmetaOgTitle(param)}
        setmetaOgEditDescriptions={(param) => setmetaOgDescription(param)}
        setmetaOgImages={(param) => setmetaOgImage(param)}
        setmetaOgEditUrl={(param) => setmetaOgEditUrl(param)}
      />
      <AllPagesScript
        setAllpagesContent={(param) => setAllpagesContent(param)}
        allpagesContent={allpagesContent}
        id={allpagesContentID}
      />
    </Container>
  );
};
export default HeadTagComponent;
