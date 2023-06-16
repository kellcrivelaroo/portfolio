'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image1 from '@/assets/portfolio-flame/audioclear.jpg'
import image2 from '@/assets/portfolio-flame/dedica-odonto.jpg'
import image3 from '@/assets/portfolio-flame/flame-tecnologia.jpg'
import image4 from '@/assets/portfolio-flame/grupo-jm.jpg'
import image5 from '@/assets/portfolio-flame/lazuli.jpg'
import Image from 'next/image'

const images = [image1, image2, image3, image4, image5]

export default function Teste() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  }
  return (
    <Slider {...settings}>
      {images.map((image, index) => {
        return (
          <div key={index} className="slide-item px-4 transition-all">
            <Image
              src={image}
              alt=""
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>
        )
      })}
    </Slider>
  )
}
