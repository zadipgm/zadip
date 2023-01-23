import * as React from "react";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  NewsContainer,
  Date,
  NewsHeading,
  NewsDescription,
  NewsWrapper,
  Recentnews,
  UpdatedNewsImage,
  Heading,
  UpdatedNewsDescription,
  UpdatedNewsList,
  ListItems,
  IconHeading,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import { BreadCrumbWrapper } from "../AboutUS/styled.components";
import SocialIcons from "../ReuseAbleComponents/SocialIconsReUseable";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import recentNews from "../../DataLayer/news.json";
const News = () => {
  const router = useRouter();
  const { isLTR, translations } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#0196e3" href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      {translations?.news}
    </Typography>,
  ];
  const filteredNews = recentNews.recentNews.filter(
    (item) => item.id === router.query.id
  );
  const updateNews = recentNews.recentNews.filter(
    (item) => item.id !== router.query.id
  );
  return (
    <NewsContainer>
      <BreadCrumbWrapper>
        <NewsHeading>{translations?.news}</NewsHeading>
        <Breadcrumb color={"#737c85"} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={translations?.zadipnews}
        description={""}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        fontSize={"22px"}
      />
      <NewsWrapper>
        {filteredNews[0]?.news_details.map((item) => {
          return (
            <Recentnews>
              <Date>{item.date}</Date>
              <img src={item.image} alt="news" width={"100%"} />
              <NewsDescription
                dangerouslySetInnerHTML={{
                  __html: `${
                    isLTR ? item.description_en : item.description_ar
                  }`,
                }}
              ></NewsDescription>
            </Recentnews>
          );
        })}
        <UpdatedNewsList>
          <Heading>{isLTR ? "Updates" : "التحديثات"}</Heading>
          {updateNews.slice(0, 4)?.map((item) => {
            return (
              <ListItems
                onClick={() =>
                  router.push({
                    pathname: "/news-headlines",
                    query: { id: item?.id },
                  })
                }
              >
                <UpdatedNewsImage
                  src={item.image}
                  alt="updatednews"
                  width={100}
                  height={59}
                />
                <UpdatedNewsDescription>
                  {isLTR ? item.description_en : item.description_ar}
                </UpdatedNewsDescription>
              </ListItems>
            );
          })}
        </UpdatedNewsList>
      </NewsWrapper>
      <IconHeading>
        {isLTR ? "Share this post:" : "شارك هذا المنشور:"}
      </IconHeading>
      <SocialIcons />
    </NewsContainer>
  );
};
export default News;
