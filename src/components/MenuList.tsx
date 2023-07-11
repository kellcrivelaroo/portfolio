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
        className="fixed right-0 top-0 z-40 flex min-h-screen min-w-[82%] translate-x-full border-l
        border-azul-700/80 bg-azul-900/90 bg-[url(../assets/stars.png)] bg-left pl-[12%] pt-24 font-alt text-3xl backdrop-blur-sm
        lg:min-w-[520px] lg:pl-20 lg:pt-28 lg:text-4xl
     "
      >
        <ul className="flex flex-col gap-8 lg:gap-12">
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
            onClick={() => {
              handleClick('#home')
            }}
          >
            Home
          </li>
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
            onClick={() => {
              handleClick('#sobre')
            }}
          >
            Sobre
          </li>
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
            onClick={() => {
              handleClick('#projetos-pessoais')
            }}
          >
            Projetos Pessoais
          </li>
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
            role="button"
            onClick={() => {
              handleClick('#portfolio')
            }}
          >
            Portfólio
          </li>
          <li
            className="cursor-pointer transition-colors duration-500 hover:text-azul-200"
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
