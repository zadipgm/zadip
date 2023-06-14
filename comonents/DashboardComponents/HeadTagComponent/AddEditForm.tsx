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
  pageTitles: string;
  loading: boolean;
  metaDescriptions: string;
  metaKeyWordDescriptions: string;
  metaOgTitles: string;
  metaOgEditDescriptions: string;
  metaOgImages: string;
  metaOgEditUrl: string;
  setPageTitles: (param) => void;
  setMetaDescriptions: (param) => void;
  setmetaKeyWordDescriptions: (param) => void;
  setmetaOgTitles: (param) => void;
  setmetaOgEditDescriptions: (param) => void;
  setmetaOgImages: (param) => void;
  setmetaOgEditUrl: (param) => void;
}
const AddEditForm = ({
  pageNameHandler,
  dataid,
  pageName,
  metaDescriptions,
  metaKeyWordDescriptions,
  metaOgEditDescriptions,
  metaOgImages,
  metaOgEditUrl,

  metaOgTitles,
  pageTitles,
  setPageTitles,
  setMetaDescriptions,
  setmetaKeyWordDescriptions,
  setmetaOgTitles,
  setmetaOgEditDescriptions,
  setmetaOgImages,
  setmetaOgEditUrl,
}: IProps) => {
  const { colors } = useTheme();
  const router = useRouter();
  const [pageTitle, setPageTitle] = React.useState("");
  const [metaDescription, setMetaDescription] = React.useState("");
  const [metaKeyWordDescription, setmetaKeyWordDescription] =
    React.useState("");
  const [metaOgTitle, setmetaOgTitle] = React.useState("");
  const [metaOgDescription, setmetaOgDescription] = React.useState("");
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
      Page_Title: pageTitles,
      Meta_Description: metaDescriptions,
      Meta_Keyword_Description: metaKeyWordDescriptions,
      Meta_og_title: metaOgTitles,
      Meta_og_description: metaOgEditDescriptions,
      Meta_og_image: metaOgImages,
      Meta_og_Url: metaOgEditUrl,
      Page_Name: pageName,
    };
    let addbody = {
      Page_Title: pageTitle,
      Meta_Description: metaDescription,
      Meta_Keyword_Description: metaKeyWordDescription,
      Meta_og_title: metaOgTitle,
      Meta_og_description: metaOgDescription,
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
        setPageTitle("");
        setMetaDescription("");
        setmetaKeyWordDescription("");
        setmetaOgTitle("");
        setmetaOgDescription("");
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
                <Wrapper>
                  <TextField
                    required
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    minRows={2}
                    maxRows={4}
                    value={pageTitles}
                    onChange={(e) => setPageTitles(e.target.value)}
                    // helperText="Some important text"
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaDescriptions}
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setMetaDescriptions(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaKeyWordDescriptions}
                    id="outlined-multiline-flexible"
                    label="Keywords Description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaKeyWordDescriptions(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaOgTitles}
                    id="outlined-multiline-flexible"
                    label="og:title"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgTitles(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaOgEditDescriptions}
                    id="outlined-multiline-flexible"
                    label="og:description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgEditDescriptions(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaOgImages}
                    id="outlined-multiline-flexible"
                    label="og:image"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgImages(e.target.value)}
                  />
                </Wrapper>
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
                <Wrapper>
                  <TextField
                    required
                    value={pageTitle}
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setPageTitle(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaDescription}
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setMetaDescription(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaKeyWordDescription}
                    id="outlined-multiline-flexible"
                    label="Keywords Description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaKeyWordDescription(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaOgTitle}
                    id="outlined-multiline-flexible"
                    label="og:title"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgTitle(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <TextField
                    required
                    value={metaOgDescription}
                    id="outlined-multiline-flexible"
                    label="og:description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    onChange={(e) => setmetaOgDescription(e.target.value)}
                  />
                </Wrapper>
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
