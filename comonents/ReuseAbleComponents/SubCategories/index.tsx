import * as React from "react";
import {
  CategoryCardsImage,
  CategoryCardsItems,
  CategoryCardsListItems,
  CategoryCardsTitle,
  Input,
  LoadMoreButton,
  OverLay,
  OverLaySubtitle,
  OverLayTitle,
  OverLayWrapper,
  SearchSvgWrapper,
  SearchWrapper,
} from "./styled.components";
import Link from "next/link";
import SearchSvg from "../../../public/icons/searchSvg";
import DownLoadButton from "../DownLoadButton";
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
  const { isLTR, translations, locale } = useTheme();
  const imagePerRow = 6;
  const [next, setNext] = React.useState(imagePerRow);
  const [search, setSearch] = React.useState("");
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
          placeholder={translations?.serchProducts}
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
                  {item.specs && (
                    <OverLay>
                      <OverLayWrapper>
                        <OverLayTitle>
                          {isLTR ? item.title_en : item.title_ar}
                        </OverLayTitle>
                        <OverLaySubtitle>Hikvision</OverLaySubtitle>
                        <DownLoadButton
                          title={translations?.download as string}
                        />
                      </OverLayWrapper>
                    </OverLay>
                  )}
                </CategoryCardsListItems>
              </Link>
            );
          })}

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
                <CategoryCardsListItems className="services-card">
                  <CategoryCardsImage
                    src={item.image}
                    width={328}
                    height={218}
                  />
                  <CategoryCardsTitle>
                    {isLTR ? item.title_en : item.title_ar}
                  </CategoryCardsTitle>
                </CategoryCardsListItems>
              </Link>
            );
          })}
      </CategoryCardsItems>
      {sub_categories.length > next ? (
        <LoadMoreButton color="#fff" onClick={handleMoreImage}>
          {translations?.loadMore}
        </LoadMoreButton>
      ) : (
        ""
      )}
    </>
  );
};
export default SubCategory;
