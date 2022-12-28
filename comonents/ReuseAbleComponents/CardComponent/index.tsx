import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
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
  title: string;
  description: string;
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
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
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
