import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import LocaleContext from "../../../LocaleContext";
import IconComponent from "../IconComponent";
import {
  CardContainer,
  CardItems,
  CardListItems,
  CardTitle,
  CardDescription,
  IconWrapper,
  ListWrapper,
} from "./styled.components";
interface CardProps {
  icon: string;
  title_en?: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  link: string;
  id: number;
  type?: string;
}
interface IProps {
  cardData: CardProps[];
}
const CardComponent: React.FC<IProps> = ({ cardData }) => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const { isLTR } = useTheme();
  return (
    <>
      <CardContainer>
        <CardItems>
          {cardData.map((item) => {
            return (
              <Link
                href={`/${locale}/${item.link}/?type=${item.type}`}
                onClick={() =>
                  router.push({
                    pathname: `/${locale}/${item.link}`,
                    query: { type: item.type },
                  })
                }
                key={item.id}
              >
                <ListWrapper>
                  <IconWrapper className="product_icon">
                    <IconComponent
                      icon={item.icon}
                      width="80px"
                      height="80px"
                      fill={"#0d4a76"}
                    />
                  </IconWrapper>
                  <CardListItems>
                    <CardTitle>
                      {isLTR ? item.title_en : item.title_ar}
                    </CardTitle>
                  </CardListItems>
                </ListWrapper>
              </Link>
            );
          })}
        </CardItems>
      </CardContainer>
    </>
  );
};
export default CardComponent;
