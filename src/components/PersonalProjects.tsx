'use client'
import React, { useEffect, useRef, useState } from 'react'

import capputeeno from '@/assets/projetos-pessoais/capputeeno.jpg'
import calculadora from '@/assets/projetos-pessoais/calculadora-calorias.jpg'
import geradorSenhas from '@/assets/projetos-pessoais/gerador-senhas.jpg'
import Image from 'next/image'
import { SwiperRefCustom } from './Portfolio'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'

const projects = [capputeeno, calculadora, geradorSenhas]

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
      <h2 className="mb-6 mt-8 w-full text-center font-alt text-5xl font-bold tracking-wider">
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
          className="mb-10 flex aspect-square h-11 w-11 items-center justify-center rounded-full border
              border-azul-400/30 bg-azul-400/40 transition-all duration-300 hover:border-azul-400/60 hover:brightness-110"
        >
          <ChevronLeft width={32} height={32} />
        </button>

        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper
          }}
          grabCursor={true}
          centeredSlides={false}
          loop={false}
          autoHeight
          modules={[Pagination, Navigation]}
          className="swiper personal-project"
        >
          {projects.map((image, index) => {
            return (
              <SwiperSlide key={index} className={`${loading && 'opacity-0'}`}>
                <div className="group flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105">
                  <Image
                    src={image}
                    alt=""
                    width={600}
                    height={600}
                    className="rounded-xl group-hover:shadow-lg group-hover:shadow-azul-200/30"
                  />
                  <button
                    className="my-button my-4 scale-0 px-8 py-2 opacity-0 blur-md 
                transition-all duration-100 group-hover:scale-100 group-hover:opacity-100 group-hover:blur-none"
                  >
                    Saiba mais
                  </button>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="mb-10 flex aspect-square h-11 w-11 items-center justify-center rounded-full border border-azul-400/30
              bg-azul-400/40 pl-1 transition-all duration-300 hover:border-azul-400/60 hover:brightness-110"
        >
          <ChevronRight width={32} height={32} />
        </button>
      </div>
    </section>
  )
}
