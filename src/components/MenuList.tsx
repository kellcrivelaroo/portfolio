'use client'

import Social from './Social'

export default function MenuList({ toggle, isOpen }: any) {
  const handleClick = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    toggle()
  }

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
        className="fixed right-0 top-0 z-40 flex min-h-screen min-w-[80%] translate-x-full border-l
        border-azul-700/80 bg-azul-900/90 bg-[url(../assets/stars.png)] bg-left pl-12 pt-20 font-alt text-2xl backdrop-blur-sm will-change-transform 
        sm:text-3xl lg:min-w-[520px] lg:pl-20 lg:pt-28 lg:text-4xl
     "
      >
        <ul
          className="flex flex-col gap-8 lg:gap-12 [&>li:hover]:cursor-pointer [&>li:hover]:text-azul-200 [&>li]:transition-colors
        [&>li]:duration-500"
        >
          <li
            role="button"
            onClick={() => {
              handleClick('#home')
            }}
          >
            Home
          </li>
          <li
            role="button"
            onClick={() => {
              handleClick('#home')
            }}
          >
            Sobre
          </li>
          <li
            role="button"
            onClick={() => {
              handleClick('#projetos-pessoais')
            }}
          >
            Projetos Pessoais
          </li>
          <li
            role="button"
            onClick={() => {
              handleClick('#portfolio')
            }}
          >
            Portfólio
          </li>
          <li
            role="button"
            onClick={() => {
              handleClick('#contato')
            }}
          >
            Contato
          </li>
          <li className="mt-2">
            <Social />
          </li>
        </ul>
      </nav>
    </>
  )
}
