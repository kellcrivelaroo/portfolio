'use client'
import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { SwiperRefCustom } from './Portfolio'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  Github,
  Monitor,
} from 'lucide-react'

import { personalProjects } from '@/utils/personal-projects'

export default function PersonalProject() {
  const swiperRef = useRef<SwiperRefCustom | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulação de um tempo de carregamento para testar o spinner
    setTimeout(() => {
      setLoading(false)
    }, 1)
  }, [])

  return (
    <section id="projetos-pessoais" className="relative mt-8">
      <h2 className="my-8 w-full text-center font-alt text-4xl font-bold tracking-wider lg:text-5xl">
        Projetos Pessoais
      </h2>
      {loading && (
        <Loader2
          className="absolute left-1/2 top-1/2 -ml-8 mt-4 animate-spin text-azul-200"
          width={68}
          height={68}
        />
      )}
      <div className="relative flex w-full items-center gap-2">
        {/* <div className="to-azul-900/00 absolute left-16 top-0 z-10 h-[440px] w-60 bg-gradient-to-r from-azul-900 backdrop-blur-[1px]" />
        <div className="to-azul-900/00 absolute right-16 top-0 z-10 h-[440px] w-60 bg-gradient-to-l from-azul-900 backdrop-blur-[1px]" /> */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="mb-5 flex aspect-square h-11 w-11 items-center justify-center rounded-full border border-azul-400/30
              bg-azul-400/40 transition-all duration-300 hover:border-azul-400/60 hover:brightness-110 lg:mb-10"
        >
          <ChevronLeft width={32} height={32} />
        </button>

        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
          autoHeight
          modules={[Navigation]}
          className="swiper personal-project max-h-[342px] p-0 sm:max-h-[500px]"
        >
          {personalProjects.map((project, index) => {
            return (
              <SwiperSlide key={index} className={`${loading && 'opacity-0'}`}>
                <div
                  className="group flex flex-col items-center justify-center transition-transform duration-500 
                lg:hover:scale-105"
                >
                  <h3 className="mb-4 flex min-h-[3rem] items-center justify-center text-center text-2xl leading-none">
                    {project.title}
                  </h3>
                  <Image
                    src={project.image}
                    alt=""
                    width={600}
                    height={600}
                    className="mb-3 rounded-xl group-hover:shadow-lg group-hover:shadow-azul-200/30 lg:mb-4"
                  />
                  <div className="flex w-full flex-col items-center justify-center gap-2 pb-4 lg:flex-row lg:gap-6">
                    <a
                      className="my-button w-[186px] py-1 text-center group-hover:scale-100 group-hover:opacity-100
                    group-hover:blur-none group-hover:delay-100 lg:scale-0 lg:py-2 lg:opacity-0 lg:blur-md"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      role="button"
                    >
                      <Github className="mr-1 inline" /> Github
                    </a>
                    <a
                      className="my-button w-[186px] py-1 text-center group-hover:scale-100 group-hover:opacity-100
                    group-hover:blur-none group-hover:delay-100 lg:scale-0 lg:py-2 lg:opacity-0 lg:blur-md"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      role="button"
                    >
                      <Monitor className="mr-2 inline" /> Ver projeto
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="mb-5 flex aspect-square h-11 w-11 items-center justify-center rounded-full border border-azul-400/30 bg-azul-400/40
              pl-1 transition-all duration-300 hover:border-azul-400/60 hover:brightness-110 lg:mb-10"
        >
          <ChevronRight width={32} height={32} />
        </button>
      </div>
    </section>
  )
}
