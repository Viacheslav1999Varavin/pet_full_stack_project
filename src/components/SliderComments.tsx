import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Comment from '@/components/Comment';

const SliderComments = () => {
   let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <Slider {...settings}>
        <Comment/>
       <Comment/>
       <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Slider>
    </>
  )
}

export default SliderComments
