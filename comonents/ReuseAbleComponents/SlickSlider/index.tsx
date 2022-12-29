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
import LocaleContext from "../../../LocaleContext";
import { Router, useRouter } from "next/router";
// export default function SimpleSlider() {
//   var settings = {
//     slideToScroll: 1,
//     slideToShow: 1,
//     dots: true,
//     autoPlay: true,
//     infinite: true,
//     arrows: true,
//
//
//     adaptiveHeight: true,
//     speed: 500,
//   };
interface sliderDataProps {
  image: string;
  description: string;
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
  const router = useRouter();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: sliderToShow,
    slidesToScroll: 1,
    nextIcon: arrowForw,
    rows: rows,

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
          arrows: false,
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
            <div key={index} onClick={() => router.push("/news-headlines")}>
              <SliderWrapper className={classname}>
                <Image src={item.image} alt="" width={158} height={158} />
                <Title>{item.description}</Title>
              </SliderWrapper>
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};
export default SliderSlick;
