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
        className="fixed right-0 top-0 z-40 flex min-h-screen min-w-[80%] translate-x-full border-l
        border-azul-700/80 bg-azul-900/90 bg-[url(../assets/stars.png)] bg-left pl-20 pt-28 font-alt 
        text-4xl backdrop-blur-sm will-change-auto lg:min-w-[360px]
     "
      >
        <ul
          className="flex flex-col gap-12 [&>li:hover]:cursor-pointer [&>li:hover]:text-azul-200 [&>li]:transition-colors
        [&>li]:duration-500"
        >
          <li>Home</li>
          <li>Sobre</li>
          <li>Portfólio</li>
          <li>Contato</li>
        </ul>
      </nav>
    </>
  )
}
