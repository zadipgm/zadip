import * as React from "react";
import axios from "axios";
import {
  Form,
  FormWrapper,
  Label,
  Submit,
  Wrapper,
  Select,
  FormContainer,
} from "./styled.components";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import TextField from "@mui/material/TextField";
import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";
interface IProps {
  pageNameHandler: (param: string) => void;
  dataid: string;
  pageName: string;
  pageEditTitle_en: string;
  pageEditTitle_ar: string;
  setPageEditTitle_en: (param) => void;
  setPageEditTitle_ar: (param) => void;
  metaEditDescription_ar: string;
  metaEditDescription_en: string;
  setmetaEditDescription_ar: (param) => void;
  setmetaEditDescription_en: (param) => void;
  metaEditKeyWordDescription_en: string;
  metaEditKeyWordDescription_ar: string;
  setmetaEditKeyWordDescriptions_en: (param) => void;
  setmetaEditKeyWordDescriptions_ar: (param) => void;
  metaEditOgTitle_en: string;
  metaEditOgTitle_ar: string;
  setmetaEditOgTitle_en: (param) => void;
  setmetaEditOgTitle_ar: (param) => void;
  metaEditOgDescription_en: string;
  metaEditOgDescription_ar: string;
  setmetaEditOgDescription_en: (param) => void;
  setmetaEditOgDescription_ar: (param) => void;
  metaEditOgImages: string;
  setEditmetaOgImages: (param) => void;
  metaOgEditUrl: string;
  setmetaOgEditUrl: (param) => void;
  loading: boolean;
}
const AddEditForm = ({
  pageNameHandler,
  pageEditTitle_en,
  pageEditTitle_ar,
  setPageEditTitle_ar,
  setPageEditTitle_en,
  metaEditDescription_ar,
  metaEditDescription_en,
  setmetaEditDescription_ar,
  setmetaEditDescription_en,
  metaEditKeyWordDescription_en,
  metaEditKeyWordDescription_ar,
  setmetaEditKeyWordDescriptions_en,
  setmetaEditKeyWordDescriptions_ar,
  metaEditOgTitle_en,
  metaEditOgTitle_ar,
  setmetaEditOgTitle_en,
  setmetaEditOgTitle_ar,
  metaEditOgDescription_en,
  metaEditOgDescription_ar,
  setmetaEditOgDescription_en,
  setmetaEditOgDescription_ar,
  metaEditOgImages,
  setEditmetaOgImages,
  metaOgEditUrl,
  setmetaOgEditUrl,
  dataid,
  pageName,
}: IProps) => {
  const { colors } = useTheme();
  const router = useRouter();
  const [pageTitle_ar, setPageTitle_ar] = React.useState("");
  const [pageTitle_en, setPageTitle_en] = React.useState("");
  const [metaDescription_ar, setMetaDescription_ar] = React.useState("");
  const [metaDescription_en, setMetaDescription_en] = React.useState("");
  const [metaKeyWordDescription_ar, setmetaKeyWordDescription_ar] =
    React.useState("");
  const [metaKeyWordDescription_en, setmetaKeyWordDescription_en] =
    React.useState("");
  const [metaOgTitle_en, setmetaOgTitle_en] = React.useState("");
  const [metaOgTitle_ar, setmetaOgTitle_ar] = React.useState("");
  const [metaOgDescription_en, setmetaOgDescription_en] = React.useState("");
  const [metaOgDescription_ar, setmetaOgDescription_ar] = React.useState("");
  const [metaOgImage, setmetaOgImage] = React.useState("");
  const [metaOgUrl, setmetaOgUrl] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let updatebody = {
      Page_Title_en: pageEditTitle_en,
      Page_Title_ar: pageEditTitle_ar,
      Meta_Description_en: metaEditDescription_en,
      Meta_Description_ar: metaEditDescription_ar,
      Meta_Keyword_Description_en: metaEditKeyWordDescription_en,
      Meta_Keyword_Description_ar: metaEditKeyWordDescription_ar,
      Meta_og_title_en: metaEditOgTitle_en,
      Meta_og_title_ar: metaEditOgTitle_ar,
      Meta_og_description_en: metaEditOgDescription_en,
      Meta_og_description_ar: metaEditOgDescription_ar,
      Meta_og_image: metaEditOgImages,
      Meta_og_Url: metaOgEditUrl,
      Page_Name: pageName,
    };
    let addbody = {
      Page_Title_ar: pageTitle_ar,
      Page_Title_en: pageTitle_en,
      Meta_Description_en: metaDescription_en,
      Meta_Description_ar: metaDescription_ar,
      Meta_Keyword_Description_ar: metaKeyWordDescription_ar,
      Meta_Keyword_Description_en: metaKeyWordDescription_en,
      Meta_og_title_en: metaOgTitle_en,
      Meta_og_title_ar: metaOgTitle_ar,
      Meta_og_description_en: metaOgDescription_en,
      Meta_og_description_ar: metaOgDescription_ar,
      Meta_og_image: metaOgImage,
      Meta_og_Url: metaOgUrl,
      Page_Name: pageName,
    };
    if (dataid) {
      //update page head tag
      try {
        await axios.put(`${APP_URL}/updatehead/${dataid}`, updatebody);
        handleClick();
        setMessage("Page Head Data updated");
        setColor(colors.success);
        setTimeout(() => router.reload(), 2000);
      } catch (error) {
        if (error) {
          handleClick();
          setColor(colors.error);
          console.log(error);
          setMessage(error.response?.data?.msg);
        }
      }
    } else {
      //add page head tag
      try {
        await axios.post(`${APP_URL}/set_head`, addbody);
        handleClick();
        setMessage("Page Head Data Added");
        setColor("#0d880d");
        setPageTitle_en("");
        setPageTitle_ar("");
        setMetaDescription_en("");
        setMetaDescription_ar("");
        setmetaKeyWordDescription_en("");
        setmetaKeyWordDescription_ar("");
        setmetaOgTitle_ar("");
        setmetaOgTitle_en("");
        setmetaOgDescription_en("");
        setmetaOgDescription_ar("");
        setmetaOgImage("");
        setmetaOgUrl("");
        setTimeout(() => router.reload(), 2000);
      } catch (error: any) {
        if (error) {
          handleClick();
          setColor("#ec0e0e");
          console.log(error);
          setMessage(error.response?.data?.msg);
        }
      }
    }
  };

  const HandlePageName = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      pageNameHandler(e.target.value);
    },
    []
  );
  return (
    <>
      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        message={message}
        color={color}
      />
      <div>
        {dataid ? (
          <Form onSubmit={(e) => handelSubmit(e)}>
            <FormContainer>
              <Wrapper className="page_selection">
                <Label htmlFor="page">{"Page Name"}</Label>
                <Select
                  defaultValue={pageName}
                  onChange={(e) => HandlePageName(e)}
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
              <FormWrapper>
                {/* =====================update form Title======================== */}
                <Wrapper>
                  <TextField
                    required
                    id="outlined-multiline-flexible"
                    label="عنوان"
                    multiline
                    minRows={2}
                    maxRows={4}
                    value={pageEditTitle_ar}
                    onChange={(e) => setPageEditTitle_ar(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    minRows={2}
                    maxRows={4}
                    value={pageEditTitle_en}
                    onChange={(e) => setPageEditTitle_en(e.target.value)}
                  />
                </Wrapper>
                {/* =====================update form Description======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaEditDescription_ar}
                    id="outlined-multiline-flexible"
                    label="تفصيل"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaEditDescription_ar(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaEditDescription_en}
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaEditDescription_en(e.target.value)}
                  />
                </Wrapper>
                {/* =====================update form Keywords Description======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaEditKeyWordDescription_ar}
                    id="outlined-multiline-flexible"
                    label="وصف الكلمات الرئيسية"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) =>
                      setmetaEditKeyWordDescriptions_ar(e.target.value)
                    }
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaEditKeyWordDescription_en}
                    id="outlined-multiline-flexible"
                    label="Keywords Description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) =>
                      setmetaEditKeyWordDescriptions_en(e.target.value)
                    }
                  />
                </Wrapper>

                {/* =====================update form og:title======================== */}

                <Wrapper>
                  <TextField
                    required
                    value={metaEditOgTitle_ar}
                    id="outlined-multiline-flexible"
                    label="og:العنوان"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaEditOgTitle_ar(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaEditOgTitle_en}
                    id="outlined-multiline-flexible"
                    label="og:title "
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaEditOgTitle_en(e.target.value)}
                  />
                </Wrapper>
                {/* =====================update form og:description======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaEditOgDescription_ar}
                    id="outlined-multiline-flexible"
                    label="og:تفصيل"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) =>
                      setmetaEditOgDescription_ar(e.target.value)
                    }
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaEditOgDescription_en}
                    id="outlined-multiline-flexible"
                    label="og:description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) =>
                      setmetaEditOgDescription_en(e.target.value)
                    }
                  />
                </Wrapper>

                {/* =====================update form og:image======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaEditOgImages}
                    id="outlined-multiline-flexible"
                    label="og:image"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setEditmetaOgImages(e.target.value)}
                  />
                </Wrapper>
                {/* =====================update form og:image======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaOgEditUrl}
                    id="outlined-multiline-flexible"
                    label="og:url"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgEditUrl(e.target.value)}
                  />
                </Wrapper>
              </FormWrapper>
            </FormContainer>

            <Submit type={"submit"} value={"update"} className={"tag-form"} />
          </Form>
        ) : (
          <Form onSubmit={(e) => handelSubmit(e)}>
            <FormContainer>
              <Wrapper className="page_selection">
                <Label htmlFor="page">{"Page Name"}</Label>
                <Select
                  defaultValue={pageName}
                  onChange={(e) => HandlePageName(e)}
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
              <FormWrapper>
                {/* ======================submit form Title======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={pageTitle_ar}
                    id="outlined-multiline-flexible"
                    label="العنوان"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setPageTitle_ar(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={pageTitle_en}
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setPageTitle_en(e.target.value)}
                  />
                </Wrapper>
                {/* ======================submit form Description======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaDescription_ar}
                    id="outlined-multiline-flexible"
                    label="تفصيل"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setMetaDescription_ar(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaDescription_en}
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setMetaDescription_en(e.target.value)}
                  />
                </Wrapper>
                {/* ======================submit form Keywords Description======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaKeyWordDescription_ar}
                    id="outlined-multiline-flexible"
                    label="وصف الكلمات الرئيسية"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) =>
                      setmetaKeyWordDescription_ar(e.target.value)
                    }
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaKeyWordDescription_en}
                    id="outlined-multiline-flexible"
                    label="Keywords Description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) =>
                      setmetaKeyWordDescription_en(e.target.value)
                    }
                  />
                </Wrapper>
                {/* ======================submit form og:title======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaOgTitle_ar}
                    id="outlined-multiline-flexible"
                    label="og:العنوان"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgTitle_ar(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaOgTitle_en}
                    id="outlined-multiline-flexible"
                    label="og:title"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgTitle_en(e.target.value)}
                  />
                </Wrapper>
                {/* ======================submit form og:description======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaOgDescription_ar}
                    id="outlined-multiline-flexible"
                    label="og:تفصيل"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgDescription_ar(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaOgDescription_en}
                    id="outlined-multiline-flexible"
                    label="og:description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgDescription_en(e.target.value)}
                  />
                </Wrapper>
                {/* ======================submit form og:image======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaOgImage}
                    id="outlined-multiline-flexible"
                    label="og:image"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgImage(e.target.value)}
                  />
                </Wrapper>
                {/* ======================submit form og:url======================== */}
                <Wrapper>
                  <TextField
                    required
                    value={metaOgUrl}
                    id="outlined-multiline-flexible"
                    label="og:url"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgUrl(e.target.value)}
                  />
                </Wrapper>
              </FormWrapper>
            </FormContainer>
            <Submit type={"submit"} value={"submit"} className={"tag-form"} />
          </Form>
        )}
      </div>
    </>
  );
};
export default AddEditForm;
