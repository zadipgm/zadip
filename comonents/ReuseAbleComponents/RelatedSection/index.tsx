import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import LocaleContext from "../../../LocaleContext";

import {
  RelatedWrapper,
  RelatedTitle,
  Divider,
  ProductCardsItems,
  ProductCardsListItems,
  ProductCardsImage,
  ProductCardsTitle,
} from "./styled.components";
interface ICategory {
  id?: number;
  title_en?: string;
  title_ar?: string;

  icon?: string;
  description?: string;
  link?: string;
  type?: string;
  specs?: boolean;
  image?: string;
}
interface IProps {
  relatedData: ICategory[];
  page: string;
}

const RelatedProducts: React.FC<IProps> = ({ relatedData, page }) => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const { isLTR, translations } = useTheme();
  return (
    <RelatedWrapper>
      <Divider>
        <RelatedTitle>
          {page === "products"
            ? translations?.relatedProducts
            : translations?.relatedServices}
        </RelatedTitle>
      </Divider>
      <ProductCardsItems>
        {relatedData?.slice(0, 4)?.map((item) => {
          return (
            <Link
              href={`/${locale}/${page}/${item.link}/${item.type}`}
              onClick={() =>
                router.push({
                  pathname: `/${locale}/${page}/${item.link}`,
                  query: { type: item.type },
                })
              }
              key={item.id}
            >
              <ProductCardsListItems>
                <ProductCardsImage src={item.image} width={300} height={140} />
                <ProductCardsTitle>
                  {isLTR ? item.title_en : item.title_ar}
                </ProductCardsTitle>
              </ProductCardsListItems>
            </Link>
          );
        })}
      </ProductCardsItems>
    </RelatedWrapper>
  );
};
export default RelatedProducts;
