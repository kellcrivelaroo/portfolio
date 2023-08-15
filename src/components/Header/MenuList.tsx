'use client'
import { Link } from 'react-scroll'
import Social from '../Social'

const scrollDuration = 500

export default function MenuList({ toggle, isOpen }: any) {
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[-99] h-0 w-0 bg-black/30 opacity-0
      transition-opacity duration-300 ${
        isOpen &&
        'z-30 min-h-screen min-w-full opacity-100 backdrop-blur-[1px] delay-500'
      }`}
        onClick={() => {
          if (isOpen) toggle()
        }}
      />

      <nav
        className="fixed right-0 top-0 z-40 flex min-h-screen min-w-[82%] translate-x-full border-l
        border-azul-700/80 bg-azul-900/90 bg-[url(../assets/stars.png)] bg-left pl-[12%] pt-24 font-alt text-3xl backdrop-blur-sm
        will-change-auto lg:min-w-[520px] lg:pl-20 lg:pt-28 lg:text-4xl
     "
      >
        <ul className="flex flex-col gap-8 lg:gap-12">
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
          >
            <Link to="home" smooth duration={scrollDuration} onClick={toggle}>
              Início
            </Link>
          </li>
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
          >
            <Link to="sobre" smooth duration={scrollDuration} onClick={toggle}>
              Sobre
            </Link>
          </li>
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
          >
            <Link
              to="projetos-pessoais"
              smooth
              duration={scrollDuration}
              onClick={toggle}
            >
              Projetos Pessoais
            </Link>
          </li>
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
          >
            <Link
              to="portfolio"
              smooth
              duration={scrollDuration}
              onClick={toggle}
            >
              Portifólio
            </Link>
          </li>
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
          >
            <Link
              to="contato"
              smooth
              duration={scrollDuration}
              onClick={toggle}
            >
              Contato
            </Link>
          </li>
          <li className="mt-2">
            <Social />
          </li>
        </ul>
      </nav>
    </>
  )
}
