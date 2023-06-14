import axios from "axios";
import * as React from "react";
import AddEditForm from "./AddEditForm";
import { Container, Title } from "./styled.components";
import AllPagesScript from "./AllPagesScript";

const HeadTagComponent = () => {
  const [dataId, setDataID] = React.useState();
  const [pageName, setPageName] = React.useState("home");
  const [loading, setLoading] = React.useState(true);
  const [pageEditTitle_en, setPageEditTitle_en] = React.useState();
  const [pageEditTitle_ar, setPageEditTitle_ar] = React.useState();
  const [metaEditDescription_en, setmetaEditDescription_en] = React.useState();
  const [metaEditDescription_ar, setmetaEditDescription_ar] = React.useState();
  const [metaEditKeyWordDescription_en, setmetaEditKeyWordDescription_en] =
    React.useState();
  const [metaEditKeyWordDescription_ar, setmetaEditKeyWordDescription_ar] =
    React.useState();
  const [metaEditOgTitle_en, setmetaEditOgTitle_en] = React.useState();
  const [metaEditOgTitle_ar, setmetaEditOgTitle_ar] = React.useState();
  const [metaEditOgDescription_en, setmetaEditOgDescription_en] =
    React.useState();
  const [metaEditOgDescription_ar, setmetaEditOgDescription_ar] =
    React.useState();
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
          setPageEditTitle_en(res.data[0].Page_Title_en);
          setPageEditTitle_ar(res.data[0].Page_Title_ar);
          setmetaEditDescription_en(res.data[0].Meta_Description_en);
          setmetaEditDescription_ar(res.data[0].Meta_Description_ar);
          setmetaEditKeyWordDescription_en(
            res.data[0].Meta_Keyword_Description_en
          );
          setmetaEditKeyWordDescription_ar(
            res.data[0].Meta_Keyword_Description_ar
          );
          setmetaEditOgTitle_en(res.data[0].Meta_og_title_en);
          setmetaEditOgTitle_ar(res.data[0].Meta_og_title_ar);
          setmetaEditOgDescription_en(res.data[0].Meta_og_description_en);
          setmetaEditOgDescription_ar(res.data[0].Meta_og_description_ar);
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
        pageName={pageName}
        dataid={dataId}
        pageEditTitle_en={pageEditTitle_en}
        pageEditTitle_ar={pageEditTitle_ar}
        setPageEditTitle_en={(param) => setPageEditTitle_en(param)}
        setPageEditTitle_ar={(param) => setPageEditTitle_ar(param)}
        metaEditDescription_ar={metaEditDescription_ar}
        metaEditDescription_en={metaEditDescription_en}
        setmetaEditDescription_ar={(param) => setmetaEditDescription_ar(param)}
        setmetaEditDescription_en={(param) => setmetaEditDescription_en(param)}
        metaEditKeyWordDescription_en={metaEditKeyWordDescription_en}
        metaEditKeyWordDescription_ar={metaEditKeyWordDescription_ar}
        setmetaEditKeyWordDescriptions_en={(param) =>
          setmetaEditKeyWordDescription_en(param)
        }
        setmetaEditKeyWordDescriptions_ar={(param) =>
          setmetaEditKeyWordDescription_ar(param)
        }
        metaEditOgTitle_en={metaEditOgTitle_en}
        metaEditOgTitle_ar={metaEditOgTitle_ar}
        setmetaEditOgTitle_en={(param) => setmetaEditOgTitle_en(param)}
        setmetaEditOgTitle_ar={(param) => setmetaEditOgTitle_ar(param)}
        metaEditOgDescription_en={metaEditOgDescription_en}
        metaEditOgDescription_ar={metaEditOgDescription_ar}
        setmetaEditOgDescription_en={(param) =>
          setmetaEditOgDescription_en(param)
        }
        setmetaEditOgDescription_ar={(param) =>
          setmetaEditOgDescription_ar(param)
        }
        metaEditOgImages={metaOgImage}
        setEditmetaOgImages={(param) => setmetaOgImage(param)}
        metaOgEditUrl={metaOgEditUrl}
        setmetaOgEditUrl={(param) => setmetaOgEditUrl(param)}
        loading={loading}
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
