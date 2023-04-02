import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import * as React from "react";
import AddEditForm from "./AddEditForm";
import { Container, Title } from "./styled.components";
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
const HeadTagComponent = () => {
  const [data, setData] = React.useState<IDataProps[]>([]);
  const [pageName, setPageName] = React.useState("home");
  const [loading, setLoading] = React.useState(true);
  const fetchItem = async () => {
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      setLoading(true);
      await axios
        .get(`${APP_URL}/get_head`, {
          params: {
            page: `${pageName}`,
          },
        })
        .then((res) => {
          setData(res.data);
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
        data={data}
        pageName={pageName}
        loading={loading}
      />
    </Container>
  );
};
export default HeadTagComponent;
