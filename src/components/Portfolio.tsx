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

export interface SwiperRefCustom extends SwiperRef {
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
      <h2 className="mb-4 mt-10 text-center font-alt text-4xl font-bold tracking-wider lg:pl-12 lg:text-start lg:text-5xl">
        Portfólio
      </h2>

      {/* Card */}
      <div
        className="flex flex-col items-center justify-center rounded-3xl border border-azul-400/20 bg-azul-700/40 
        p-2 pt-6 shadow-lg shadow-azul-700/10 backdrop-blur-sm lg:h-[920px] lg:p-8"
      >
        <h3
          className="flex w-full flex-col items-start justify-center gap-2 pl-4 text-lg lg:flex-row 
        lg:items-start lg:justify-start lg:text-2xl"
        >
          Projetos desenvolvidos para{' '}
          <a
            href="https://flametecnologia.com.br"
            target="_blank"
            rel="noreferrer"
            className="group -ml-3 flex text-xl transition-all duration-300 hover:text-[#ff5c00] lg:ml-0 lg:translate-y-1 
            lg:gap-2 lg:text-2xl"
          >
            <Image
              src={flameLogo}
              alt="Logo Flame Tecnologia"
              width={110}
              height={50}
              className="-translate-y-1.5 scale-75 brightness-0 grayscale invert transition-all duration-300 group-hover:brightness-100
                group-hover:grayscale-0 group-hover:invert-0 lg:scale-100"
            />
            Tecnologia
          </a>
        </h3>
        {/* Swiper navigation */}
        <div className="my-2 flex w-full flex-col items-center justify-between pr-2 lg:flex-row lg:pr-4">
          <div className="mb-4 mt-2 flex w-full flex-col justify-start gap-3 px-4 lg:flex-row lg:items-center">
            <span>Tecnologias utilizadas: </span>
            <div className="flex items-center  gap-2">
              <RadixTooltip icon={wordpress} alt="WordPress" />
              <RadixTooltip icon={html} alt="HTML" />
              <RadixTooltip icon={css} alt="CSS" />
              <RadixTooltip icon={javascript} alt="JavaScript" width={28} />
            </div>
          </div>

          <div className="-mt-14 flex w-full justify-end gap-2 lg:m-0 lg:gap-3">
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
        {/* Loading */}

        {loading && (
          <Loader2
            className="absolute animate-spin text-azul-200"
            width={68}
            height={68}
          />
        )}
        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            728: {
              slidesPerView: 2,
              grid: {
                rows: 1,
              },
            },
            1024: {
              slidesPerView: 3,
              grid: {
                rows: 2,
              },
            },
          }}
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
                className={`slide group lg:mb-0 ${loading && 'opacity-0'}`}
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
                    className="rounded-2xl transition-transform delay-100 duration-200 ease-linear lg:group-hover:scale-105"
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
