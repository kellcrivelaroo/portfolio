import { Github, Instagram, Linkedin } from 'lucide-react'
import F from '../assets/svgs/FlameF.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="mt-24 flex w-full justify-between border-t border-azul-400/30 p-4">
      <div className="opacity-90">Todos os direitos reservados.</div>
      <div className="flex gap-4">
        <a
          href="https://github.com/kellcrivelaroo"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-500 hover:text-azul-200"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/kellington-crivelaro-b9b817227/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-500 hover:text-azul-200"
        >
          <Linkedin />
        </a>
        <a
          href="https://instagram.com/kellcrivelaro"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-500 hover:text-azul-200"
        >
          <Instagram />
        </a>
        <a
          href="https://flametecnologia.com.br"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={F}
            alt="Flame Tecnologia"
            width={24}
            className="brightness-0 grayscale invert transition-all duration-500 
        hover:brightness-100 hover:grayscale-0 hover:invert-0"
          />
        </a>
      </div>
    </div>
  )
}
