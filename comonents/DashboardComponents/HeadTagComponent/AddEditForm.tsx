import * as React from "react";
import axios from "axios";
import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";

import {
  Form,
  FormWrapper,
  Label,
  Submit,
  TextArea,
  Wrapper,
  Select,
  FormContainer,
} from "./styled.components";
import { useRouter } from "next/router";

interface IProps {
  pageNameHandler: (param: string) => void;
  dataid: string;
  pageName: string;
  pageTitles: string;
  loading: boolean;
  metaDescriptions: string;
  metaKeyWordDescriptions: string;
  metaOgTitles: string;
  metaOgDescriptions: string;
  metaOgImages: string;
  setPageTitles: (param) => void;
  setMetaDescriptions: (param) => void;
  setmetaKeyWordDescriptions: (param) => void;
  setmetaOgTitles: (param) => void;
  setmetaOgDescriptions: (param) => void;
  setmetaOgImages: (param) => void;
}
const AddEditForm = ({
  pageNameHandler,
  dataid,
  pageName,
  metaDescriptions,
  metaKeyWordDescriptions,
  metaOgDescriptions,
  metaOgImages,
  metaOgTitles,
  pageTitles,
  setPageTitles,
  setMetaDescriptions,
  setmetaKeyWordDescriptions,
  setmetaOgTitles,
  setmetaOgDescriptions,
  setmetaOgImages,
}: IProps) => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = React.useState("");
  const [metaDescription, setMetaDescription] = React.useState("");
  const [metaKeyWordDescription, setmetaKeyWordDescription] =
    React.useState("");
  const [metaOgTitle, setmetaOgTitle] = React.useState("");
  const [metaOgDescription, setmetaOgDescription] = React.useState("");
  const [metaOgImage, setmetaOgImage] = React.useState("");
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
      Meta_og_description: metaOgDescriptions,
      Meta_og_image: metaOgImages,
      Page_Name: pageName,
    };
    let addbody = {
      Page_Title: pageTitle,
      Meta_Description: metaDescription,
      Meta_Keyword_Description: metaKeyWordDescription,
      Meta_og_title: metaOgTitle,
      Meta_og_description: metaOgDescription,
      Meta_og_image: metaOgImage,
      Page_Name: pageName,
    };
    if (dataid) {
      //update page head tag
      try {
        await axios.put(`${APP_URL}/updatehead/${dataid}`, updatebody);
        handleClick();
        setMessage("Page Head Data updated");
        setColor("success");
        setPageTitle("");
        setMetaDescription("");
        setmetaKeyWordDescription("");
        setmetaOgTitle("");
        setmetaOgDescription("");
        setmetaOgImage("");
        setTimeout(() => router.reload(), 2000);
      } catch (error) {
        if (error) {
          handleClick();
          setColor("error");
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
        setColor("success");
        setPageTitle("");
        setMetaDescription("");
        setmetaKeyWordDescription("");
        setmetaOgTitle("");
        setmetaOgDescription("");
        setmetaOgImage("");
        setTimeout(() => router.reload(), 2000);
      } catch (error: any) {
        if (error) {
          handleClick();
          setColor("error");
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
                  <Label htmlFor="title">{"Page Title"}</Label>
                  <TextArea
                    required
                    value={pageTitles}
                    placeholder={"Enter page title..."}
                    onChange={(e) => setPageTitles(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page Description">{"Page Description"}</Label>
                  <TextArea
                    required
                    value={metaDescriptions}
                    placeholder={"Enter Page Description"}
                    onChange={(e) => setMetaDescriptions(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page Keywords Description">
                    {"Page Keywords Description"}
                  </Label>
                  <TextArea
                    required
                    value={metaKeyWordDescriptions}
                    placeholder={"Enter Page Keywords Description"}
                    onChange={(e) => setmetaKeyWordDescriptions(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page og:title">{"Page og:title"}</Label>
                  <TextArea
                    required
                    value={metaOgTitles}
                    placeholder={"Enter Page og:title "}
                    onChange={(e) => setmetaOgTitles(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page og:description">
                    {"Page og:description"}
                  </Label>
                  <TextArea
                    required
                    value={metaDescriptions}
                    placeholder={"Enter og:description"}
                    onChange={(e) => setmetaOgDescriptions(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page KeyWords Content">
                    {"Page og:image"}
                  </Label>
                  <TextArea
                    required
                    value={metaOgImages}
                    placeholder={"Enter Page og:image url"}
                    onChange={(e) => setmetaOgImages(e.target.value)}
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
                  <Label htmlFor="title">{"Page Title"}</Label>
                  <TextArea
                    required
                    value={pageTitle}
                    placeholder={"Enter page title..."}
                    onChange={(e) => setPageTitle(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page Description">{"Page Description"}</Label>
                  <TextArea
                    required
                    value={metaDescription}
                    placeholder={"Enter Page Description"}
                    onChange={(e) => setMetaDescription(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page Keywords Description">
                    {"Page Keywords Description"}
                  </Label>
                  <TextArea
                    required
                    value={metaKeyWordDescription}
                    placeholder={"Enter Page Keywords Description"}
                    onChange={(e) => setmetaKeyWordDescription(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page og:title">{"Page og:title"}</Label>
                  <TextArea
                    required
                    value={metaOgTitle}
                    placeholder={"Enter Page og:title "}
                    onChange={(e) => setmetaOgTitle(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page og:description">
                    {"Page og:description"}
                  </Label>
                  <TextArea
                    required
                    value={metaOgDescription}
                    placeholder={"Enter og:description"}
                    onChange={(e) => setmetaOgDescription(e.target.value)}
                  />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="Page KeyWords Content">
                    {"Page og:image"}
                  </Label>
                  <TextArea
                    required
                    value={metaOgImage}
                    placeholder={"Enter Page og:image url"}
                    onChange={(e) => setmetaOgImage(e.target.value)}
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
