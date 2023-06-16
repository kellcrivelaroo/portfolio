'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import RadixTooltip from './RadixTooltip'

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Pagination, Grid, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import flameLogo from '../assets/flame-logo.png'
import wordpress from '../assets/svgs/wordpress.svg'
import html from '../assets/svgs/html.svg'
import css from '../assets/svgs/css3.svg'
import javascript from '../assets/svgs/javascript.svg'
import { projects } from '../utils/projects'

interface SwiperRefCustom extends SwiperRef {
  slidePrev: () => void
  slideNext: () => void
}

export default function Portfolio() {
  const swiperRef = useRef<SwiperRefCustom | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulação de um tempo de carregamento para testar o spinner
    setTimeout(() => {
      setLoading(false)
    }, 1)
  }, [])

  return (
    <section id="portfolio">
      <h2 className="mb-4 mt-8 pl-12 font-alt text-5xl font-bold tracking-wider">
        Portfólio
      </h2>

      {/* Card */}
      <div
        className="flex h-[920px] flex-col items-center justify-center rounded-3xl border border-azul-400/20 bg-azul-700/40 
        p-8 pb-4 shadow-lg shadow-azul-700/10 backdrop-blur-sm"
      >
        <h3 className="flex w-full items-start gap-2 pl-4 text-2xl">
          Projetos desenvolvidos para{' '}
          <a
            href="https://flametecnologia.com.br"
            target="_blank"
            rel="noreferrer"
            className="group flex translate-y-1 gap-2 transition-all duration-300 hover:text-[#ff5c00]"
          >
            <Image
              src={flameLogo}
              alt="Logo Flame Tecnologia"
              width={110}
              height={50}
              className="-translate-y-1.5 brightness-0 grayscale invert transition-all duration-300
                group-hover:brightness-100 group-hover:grayscale-0 group-hover:invert-0"
            />
            Tecnologia
          </a>
        </h3>
        {/* Swiper navigation */}
        <div className="my-2 flex w-full items-center justify-between pr-4">
          <div className="mt-2 flex w-full items-center gap-3 px-4">
            <span>Tecnologias utilizadas: </span>
            <RadixTooltip icon={wordpress} alt="WordPress" />
            <RadixTooltip icon={html} alt="HTML" />
            <RadixTooltip icon={css} alt="CSS" />
            <RadixTooltip icon={javascript} alt="JavaScript" width={28} />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border 
              border-azul-400/30 bg-azul-400/40 transition-all duration-300 hover:border-azul-400/60 hover:brightness-110"
            >
              <ChevronLeft width={32} height={32} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-azul-400/30
              bg-azul-400/40 pl-1 transition-all duration-300 hover:border-azul-400/60 hover:brightness-110"
            >
              <ChevronRight width={32} height={32} />
            </button>
          </div>
        </div>
        {/* Swiper navigation */}

        {loading && (
          <Loader2
            className="absolute animate-spin text-azul-200"
            width={68}
            height={68}
          />
        )}
        {/* Swiper */}
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={20}
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper
          }}
          grabCursor={true}
          modules={[Grid, Pagination, Navigation]}
          className="swiper"
        >
          {projects.map((project) => {
            return (
              <SwiperSlide
                key={project.title}
                className={`slide group ${loading && 'opacity-0'}`}
              >
                <h3 className="text-xl font-medium">{project.title}</h3>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={project.image}
                    width={400}
                    height={400}
                    alt={project.title}
                    className="rounded-2xl transition-transform delay-100 duration-200 ease-linear group-hover:scale-105"
                  />
                </a>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  className="my-button mx-6 flex w-full justify-center py-2 font-alt text-xl tracking-wider"
                  rel="noreferrer"
                >
                  {project.url}
                </a>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
