import * as React from "react";
import LocaleContext from "../../../LocaleContext";
import DownloadSvg from "../../../public/icons/downloadSvg";
import productData from "../../../DataLayer/product.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {
  CategoryCardsDescription,
  CategoryCardsImage,
  CategoryCardsItems,
  CategoryCardsListItems,
  CategoryCardsTitle,
  Input,
  LoadMoreButton,
  OverLay,
  CardListWrapper,
  OverLaySubtitle,
  OverLayTitle,
  OverLayWrapper,
  SearchSvgWrapper,
  SearchWrapper,
} from "./styled.components";
import Link from "next/link";
import SearchSvg from "../../../public/icons/searchSvg";
import DownLoadButton from "../DownLoadButton";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
interface ICategory {
  id?: number;
  title_en?: string;
  title_ar?: string;
  icon?: string;
  description_en?: string;
  description_ar?: string;
  link?: string;
  type?: string;
  specs?: boolean;
  image?: string;
}
interface IProps {
  sub_categories: ICategory[];
  page: string;
}
const SubCategory: React.FC<IProps> = ({ sub_categories, page }) => {
  const { locale } = React.useContext(LocaleContext);
  const imagePerRow = 6;
  const { t } = useTranslation();
  const [next, setNext] = React.useState(imagePerRow);
  const [search, setSearch] = React.useState("");
  const { isLTR } = useTheme();
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const serchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setSearch(value);
  };
  const filteredCategorys = sub_categories.filter(
    (product: { title_en?: string; title_ar?: string }) => {
      return (
        product?.title_en?.toLowerCase().includes(search.toLowerCase()) ||
        product?.title_ar?.toLowerCase().includes(search.toLowerCase())
      );
    }
  );
  return (
    <>
      <SearchWrapper>
        <Input
          type={"search"}
          value={search}
          placeholder={`${t("serchProducts")}`}
          onChange={(e) => serchHandler(e)}
        />
        <SearchSvgWrapper>
          <SearchSvg />
        </SearchSvgWrapper>
      </SearchWrapper>
      <CategoryCardsItems>
        {page === "products" &&
          filteredCategorys.slice(0, next).map((item) => {
            return (
              <Link
                href={
                  item.type === "surveillance" || item.type === "nvr_dvr"
                    ? "#"
                    : `/${locale}/${page}/${item.link}/${item.type}`
                }
                key={item.id}
              >
                <CategoryCardsListItems>
                  <CategoryCardsImage
                    src={item.image}
                    width={328}
                    height={218}
                  />
                  <CategoryCardsTitle>
                    {isLTR ? item.title_en : item.title_ar}
                  </CategoryCardsTitle>
                  {/* <CategoryCardsDescription>
                    {isLTR ? item.description_en : item.description_ar}
                  </CategoryCardsDescription> */}
                  {item.specs && (
                    <OverLay>
                      <OverLayWrapper>
                        <OverLayTitle>
                          {isLTR ? item.title_en : item.title_ar}
                        </OverLayTitle>
                        <OverLaySubtitle>Hikvision</OverLaySubtitle>
                        <DownLoadButton title={`${t("download")}`} />
                      </OverLayWrapper>
                    </OverLay>
                  )}
                </CategoryCardsListItems>
              </Link>
            );
          })}
        <CardListWrapper>
          {page === "services" &&
            filteredCategorys.slice(0, next).map((item) => {
              return (
                <Link
                  href={
                    item.link === "/ektefa"
                      ? "https://ektefa.net"
                      : item.link === "/nafeth"
                      ? "https://nafeth.com/"
                      : `/${locale}/${page}/${item.link}/${item.type}`
                  }
                  key={item.id}
                  onClick={() => console.log(item.type)}
                >
                  <Card sx={{ maxWidth: 345, height: 300, margin: "12px" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt="green iguana"
                      />
                      <CardContent style={{ width: "313px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {isLTR ? item.title_en : item.title_ar}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {isLTR ? item.description_en : item.description_ar}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Learn more
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              );
            })}
        </CardListWrapper>
      </CategoryCardsItems>
      {sub_categories.length > next ? (
        <LoadMoreButton color="#fff" onClick={handleMoreImage}>
          {t("loadMore")}
        </LoadMoreButton>
      ) : (
        ""
      )}
    </>
  );
};
export default SubCategory;
