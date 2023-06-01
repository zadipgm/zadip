import axios from "axios";
import * as React from "react";
import AddEditForm from "./AddEditForm";
import { Container, Title } from "./styled.components";

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

          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchItem();
  }, [pageName]);

  const pageNameHandler = (param: React.SetStateAction<string>) => {
    setPageName(param);
  };

  return (
    <Container>
      <Title>{"Page Head Tag Data"}</Title>
      <AddEditForm
        pageNameHandler={(param) => pageNameHandler(param)}
        dataid={dataId}
        pageTitles={pageTitle}
        metaDescriptions={metaDescription}
        metaKeyWordDescriptions={metaKeyWordDescription}
        metaOgTitles={metaOgTitle}
        metaOgDescriptions={metaOgDescription}
        metaOgImages={metaOgImage}
        pageName={pageName}
        loading={loading}
        setPageTitles={(param) => setPageTitle(param)}
        setMetaDescriptions={(param) => setMetaDescription(param)}
        setmetaKeyWordDescriptions={(param) => setmetaKeyWordDescription(param)}
        setmetaOgTitles={(param) => setmetaOgTitle(param)}
        setmetaOgDescriptions={(param) => setmetaOgDescription(param)}
        setmetaOgImages={(param) => setmetaOgImage(param)}
      />
    </Container>
  );
};
export default HeadTagComponent;
