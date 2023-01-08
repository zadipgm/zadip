import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SliderContainer,
  SliderWrapper,
  Image,
  Title,
} from "./styled.components";
import i18n from "i18next";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

interface INewsDetails {
  date?: string;
  image?: string;
  description_en?: string;
  description_ar?: string;
}
interface sliderDataProps {
  image?: string;
  description_en?: string;
  description_ar?: string;
  id?: string;
  news_details?: INewsDetails[];
}
interface IProps {
  sliderData?: sliderDataProps[];
  rows?: number;
  sliderToShow: number;
  classname: string;
  autoplay: boolean;
  autoplaySpeed: number;
}
const SliderSlick: React.FC<IProps> = ({
  sliderData,
  rows,
  sliderToShow,
  classname,
  autoplay,
  autoplaySpeed,
}) => {
  const arrowForw = <ArrowForwardIosIcon color={"primary"} />;
  const arrowPrev = <ArrowBackIosIcon />;
  const { isLTR } = useTheme();
  const router = useRouter();
  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: sliderToShow,
    slidesToScroll: 1,
    nextIcon: arrowForw,

    rows: rows,
    cssEase: "linear",
    arrows: false,

    prevIcon: arrowPrev,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextIcon: false,
          prevIcon: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextIcon: false,
          prevIcon: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <SliderContainer locale={i18n.language} className={classname}>
      <Slider {...settings}>
        {sliderData?.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() =>
                router.push({
                  pathname: "/news-headlines",
                  query: { id: item?.id },
                })
              }
            >
              <SliderWrapper className={classname}>
                <Image src={item.image} alt="" width={150} height={150} />
                <Title>
                  {isLTR ? item.description_en : item.description_ar}
                </Title>
              </SliderWrapper>
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};
export default SliderSlick;
