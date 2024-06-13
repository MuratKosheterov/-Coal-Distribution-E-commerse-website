import React from 'react'
import Slider from 'react-slick'
import { banners } from '../data/data'


function Banner() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=' container mx-auto py-5      ' >
      <Slider {...settings} className=' ' >
        {
          banners.map((banner, index) => {
            return (
              <div key={index}  >
                <div className=' flex flex-wrap md:flex-nowrap  items-center justify-between h-full text-center gap-5 mx-auto ' >
                  <h1 className=' font-semibold text-4xl w-full md:w-2/5' >{banner.title}</h1>
                  <img  className=' w-auto md:w-3/5 mx-auto '  src={banner.image} alt="" />
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default Banner