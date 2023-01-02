import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import productData from "../../../DataLayer/product.json";
import LocaleContext from "../../../LocaleContext";
import {
  ProductCardsDescription,
  ProductCardsImage,
  ProductCardsItems,
  ProductCardsListItems,
  ProductCardsTitle,
} from "../../ProductPageComponents/ProductMainCategories/styled.comonents";
import { RelatedWrapper, RelatedTitle } from "./styled.components";
interface ICategory {
  id?: number;
  title?: string;
  icon?: string;
  description?: string;
  link?: string;
  type?: string;
  specs?: boolean;
  image?: string;
}
interface IProps {
  relatedData: ICategory[];
  title: string;
  page: string;
}

const RelatedProducts: React.FC<IProps> = ({ title, relatedData, page }) => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  return (
    <RelatedWrapper>
      <RelatedTitle>{title}</RelatedTitle>
      <ProductCardsItems>
        {relatedData?.slice(0, 4)?.map((item) => {
          return (
            <Link
              href={`/${locale}/${page}/${item.link}?type=${item.type}`}
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
                <ProductCardsTitle>{item.title}</ProductCardsTitle>
                <ProductCardsDescription>
                  {item.description}
                </ProductCardsDescription>
              </ProductCardsListItems>
            </Link>
          );
        })}
      </ProductCardsItems>
    </RelatedWrapper>
  );
};
export default RelatedProducts;
