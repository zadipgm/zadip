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
const News = () => {
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#0196e3" href="/">
      Home
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      news
    </Typography>,
  ];
  return (
    <NewsContainer>
      <BreadCrumbWrapper>
        <NewsHeading>News</NewsHeading>
        <Breadcrumb color={"#737c85"} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={"ZADIP Group launches new website"}
        description={""}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
      />
      <NewsWrapper>
        <Recentnews>
          <Date>01-May-2017</Date>
          <img
            src="https://zadip.com/images/news/himayatak.png"
            alt="news"
            width={"100%"}
          />
          <NewsDescription>
            We are delighted to announce the launch of our new website in line
            with the Vision 2030 initiative by the government of the Kingdom of
            Saudi Arabia. We have followed all the latest design and development
            methods for our website while maintaining the brand identity of the
            new company. We also developed the site to suit the environment of
            search engines by following the various conditions of web
            development by accredited search engine providers. We invite you to
            visit the pages of the site and see all that is new and interesting
            and find what suits your needs. You can now order any service you
            want directly from any page with a service request form available at
            the page itself. Thank you for your attention.
          </NewsDescription>
        </Recentnews>
        <UpdatedNewsList>
          <Heading>Updated News</Heading>
          {[1, 2, 3, 4].map((item) => {
            return (
              <ListItems>
                <UpdatedNewsImage
                  src="https://www.zadip.com/en/images/staff/ramadan.jpg"
                  alt="updatednews"
                  width={100}
                  height={59}
                />
                <UpdatedNewsDescription>
                  ZADIP Group wishes its esteemed clients, partners.....
                </UpdatedNewsDescription>
              </ListItems>
            );
          })}
        </UpdatedNewsList>
      </NewsWrapper>
      <IconHeading>Share this post:</IconHeading>
      <SocialIcons />
    </NewsContainer>
  );
};
export default News;
