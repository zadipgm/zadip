import * as React from "react";
import { Form, Label, Wrapper } from "./styled.components";
import { TextArea } from "./styled.components";
import { Submit } from "./styled.components";
import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";
import { useTheme } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
interface IProps {
  setAllpagesContent: (param: string) => void;
  allpagesContent: string;
  id?: number | string;
}
const AllPagesScript = ({
  setAllpagesContent,
  allpagesContent,
  id,
}: IProps) => {
  const { colors } = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("");
  const [message, setMessage] = React.useState("");

  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let body = {
      all_page_content: allpagesContent,
    };
    if (id) {
      try {
        await axios.put(`${APP_URL}/add_all_update/${id}`, body);

        handleClick();
        setMessage("Page Head Data updated");
        setColor(colors.success);
        setAllpagesContent("");
        router.reload();
      } catch (error) {
        if (error) {
          handleClick();
          setColor(colors.error);
          console.log(error);
          setMessage(error.response?.data?.msg);
        }
      }
    }
    try {
      await axios.post(`${APP_URL}/add_all`, body);
      handleClick();
      setMessage("Page Head Data updated");
      setColor(colors.success);
      setAllpagesContent("");
    } catch (error) {
      if (error) {
        handleClick();
        setColor(colors.error);
        console.log(error);
        setMessage(error.response?.data?.msg);
      }
    }
  };
  return (
    <div>
      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        message={message}
        color={color}
      />
      {allpagesContent.length > 1 ? (
        <Form onSubmit={(e) => handelSubmit(e)}>
          <Wrapper className="all-pages">
            <Label htmlFor="Add content for all pages">
              {"Script for all pages"}
            </Label>
            <TextArea
              required
              value={allpagesContent}
              placeholder={"Enter content for all pages..."}
              onChange={(e) => setAllpagesContent(e.target.value)}
            />
          </Wrapper>
          <Submit type={"submit"} value={"update"} className={"tag-form"} />
        </Form>
      ) : (
        <Form onSubmit={(e) => handelSubmit(e)}>
          <Wrapper className="all-pages">
            <Label htmlFor="Add content for all pages">
              {"Content for all pages"}
            </Label>
            <TextArea
              required
              value={allpagesContent}
              placeholder={"Enter content for all pages..."}
              onChange={(e) => setAllpagesContent(e.target.value)}
            />
          </Wrapper>
          <Submit type={"submit"} value={"submit"} className={"tag-form"} />
        </Form>
      )}
    </div>
  );
};
export default AllPagesScript;
