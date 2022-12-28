import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import ReplyIcon from "@mui/icons-material/Reply";
import RepeatIcon from "@mui/icons-material/Repeat";
import GradeIcon from "@mui/icons-material/Grade";
import {
  TwitterSliderContainer,
  TwitterIconWrapper,
  PostDescriptionWrapper,
  PostTitle,
  PostImage,
  Description,
  TwitterSliderWrapper,
  TwitterPost,
  FollowLink,
  Link,
  RetweetContainer,
  RetweetWrapper,
} from "./styled.components";
const TwitterSliderSection = () => {
  const postData = [
    {
      title: "zadipgroup",
      postShortUrl: "https://twitter.com/Ektefa_HR",
      image: "",
      description: `تم ربط اكتفاء مع التأمينات الاجتماعية تستطيع الان مباشره ومن
        خلال منصة اكتفاء اجراء العديد من العمليات الخاصة بال…`,
      postLink: " https://t.co/A9BuKG1njk",
      postDate: "30 Nov",
    },
    {
      title: "Ektefa",
      postShortUrl: "https://twitter.com/Ektefa_HR",
      image: "",
      description: `تم ربط اكتفاء مع التأمينات الاجتماعية تستطيع الان مباشره ومن
          خلال منصة اكتفاء اجراء العديد من العمليات الخاصة بال…`,
      postLink: " https://t.co/A9BuKG1njk",
      postDate: "29 Nov",
    },
    {
      title: "zadipgroup",
      postShortUrl: "https://twitter.com/Ektefa_HR",
      image: "",
      description: `تم ربط اكتفاء مع التأمينات الاجتماعية تستطيع الان مباشره ومن
          خلال منصة اكتفاء اجراء العديد من العمليات الخاصة بال…`,
      postLink: " https://t.co/A9BuKG1njk",
      postDate: "28 Nov",
    },
    {
      title: "zadipgroup",
      image: "",
      postShortUrl: "https://twitter.com/Ektefa_HR",
      description: `تم ربط اكتفاء مع التأمينات الاجتماعية تستطيع الان مباشره ومن
          خلال منصة اكتفاء اجراء العديد من العمليات الخاصة بال…`,
      postLink: " https://t.co/A9BuKG1njk",
      postDate: "27 Nov",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextIcon: false,
    prevIcon: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextIcon: false,
          prevIcon: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextIcon: false,
          prevIcon: false,
        },
      },
    ],
  };
  return (
    <TwitterSliderContainer>
      <Slider {...settings}>
        {postData.map((item) => {
          return (
            <div key={item.title}>
              {" "}
              <TwitterSliderWrapper>
                <TwitterIconWrapper>
                  <a href="https://twitter.com/Ektefa_HR">
                    <PostImage src="https://pbs.twimg.com/profile_images/1314320886376398848/vH3_PNrY_normal.jpg" />
                  </a>
                  <PostDescriptionWrapper>
                    <PostTitle>{item.title}</PostTitle>
                    <Link href="https://twitter.com/Ektefa_HR">
                      {item.postShortUrl}
                    </Link>
                    <TwitterPost>
                      <Description>{item.description}</Description>
                      <Link href="https://t.co/A9BuKG1njk">
                        {item.postLink}
                      </Link>
                      <Link href="https://twitter.com/Ektefa_HR/status/1597907992955215872">
                        {item.postDate}
                      </Link>
                    </TwitterPost>
                  </PostDescriptionWrapper>
                </TwitterIconWrapper>
                <RetweetContainer>
                  <FollowLink href="https://twitter.com/intent/follow?original_referer=&screen_name=zadipgroup&tw_p=followbutton&variant=2.0">
                    <TwitterIcon /> Follow
                  </FollowLink>
                  <RetweetWrapper>
                    <Link href="https://twitter.com/intent/tweet?in_reply_to=1597907992955215872">
                      <ReplyIcon />
                      Reply
                    </Link>
                    <Link href="https://twitter.com/intent/retweet?tweet_id=1597907992955215872">
                      <RepeatIcon />
                      Retweet
                    </Link>
                    <Link href="https://twitter.com/intent/favorite?tweet_id=1597907992955215872">
                      <GradeIcon />
                      Favorite
                    </Link>
                  </RetweetWrapper>
                </RetweetContainer>
              </TwitterSliderWrapper>
            </div>
          );
        })}
      </Slider>
    </TwitterSliderContainer>
  );
};
export default TwitterSliderSection;
