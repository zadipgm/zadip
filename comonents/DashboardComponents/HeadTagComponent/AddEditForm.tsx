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
interface IDataProps {
  id: number;
  Page_Title: string;
  Meta_Description: string;
  Meta_Keyword_Description: string;
  Meta_og_title: string;
  Meta_og_description: string;
  Meta_og_image: string;
  Page_Name: string;
}
interface IProps {
  pageNameHandler: (pageName: string) => void;
  data: IDataProps[];
  pageName: string;
}
const AddEditForm = ({ pageNameHandler, data, pageName }: IProps) => {
  console.log("AddEditForm", data);
  const [showAll, setShowAll] = React.useState("false");
  const [pageTitle, setPageTitle] = React.useState(
    data[0]?.Page_Title as string
  );
  const [metaDescription, setMetaDescription] = React.useState(
    data[0]?.Meta_Description
  );
  const [metaKeyWordDescription, setmetaKeyWordDescription] = React.useState(
    data[0]?.Meta_Keyword_Description
  );
  const [metaOgTitle, setmetaOgTitle] = React.useState(data[0]?.Meta_og_title);
  const [metaOgDescription, setmetaOgDescription] = React.useState(
    data[0]?.Meta_og_description
  );
  const [metaOgImage, setmetaOgImage] = React.useState(data[0]?.Meta_og_image);
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

    let body = {
      Page_Title: pageTitle === "" ? data[0]?.Page_Title : pageTitle,
      Meta_Description:
        metaDescription === "" ? data[0]?.Meta_Description : metaDescription,
      Meta_Keyword_Description:
        metaKeyWordDescription === ""
          ? data[0]?.Meta_Keyword_Description
          : metaKeyWordDescription,
      Meta_og_title: metaOgTitle === "" ? data[0]?.Meta_og_title : metaOgTitle,
      Meta_og_description:
        metaOgDescription === ""
          ? data[0]?.Meta_og_description
          : metaOgDescription,
      Meta_og_image: metaOgImage === "" ? data[0]?.Meta_og_image : metaOgImage,
      Page_Name: pageName,
    };
    if (data.length > 0) {
      //update page head tag
      try {
        await axios.put(`${APP_URL}/updatehead/${data[0]?.id}`, body);
        handleClick();
        setMessage("Page Head Data updated");
        setColor("success");
        setPageTitle("");
        setMetaDescription("");
        setmetaKeyWordDescription("");
        setmetaOgTitle("");
        setmetaOgDescription("");
        setmetaOgImage("");
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
        await axios.post(`${APP_URL}/set_head`, body);
        handleClick();
        setMessage("Page Head Data Added");
        setColor("success");
        setPageTitle("");
        setMetaDescription("");
        setmetaKeyWordDescription("");
        setmetaOgTitle("");
        setmetaOgDescription("");
        setmetaOgImage("");
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
  React.useEffect(() => {
    if (pageName === "all") {
      setShowAll("true");
    } else {
      setShowAll("false");
    }
  }, [showAll]);
  return (
    <>
      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        message={message}
        color={color}
      />
      <div>
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
                  defaultValue={pageTitle}
                  placeholder={"Enter page title..."}
                  onChange={(e) => setPageTitle(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="Page Description">{"Page Description"}</Label>
                <TextArea
                  defaultValue={metaDescription}
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
                  defaultValue={metaKeyWordDescription}
                  placeholder={"Enter Page Keywords Description"}
                  onChange={(e) => setmetaKeyWordDescription(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="Page og:title">{"Page og:title"}</Label>
                <TextArea
                  required
                  defaultValue={metaOgTitle}
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
                  defaultValue={metaOgDescription}
                  placeholder={"Enter og:description"}
                  onChange={(e) => setmetaOgDescription(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="Page KeyWords Content">{"Page og:image"}</Label>
                <TextArea
                  required
                  defaultValue={metaOgImage}
                  placeholder={"Enter Page og:image url"}
                  onChange={(e) => setmetaOgImage(e.target.value)}
                />
              </Wrapper>
            </FormWrapper>
          </FormContainer>
          <Submit type={"submit"} value={"submit"} className={"tag-form"} />
        </Form>
      </div>
    </>
  );
};
export default AddEditForm;
