'use client'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-scroll'

interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <Link to="contato" smooth duration={500}>
      <button
        className="my-button flex w-fit items-center gap-2 border border-azul-200/10 px-6 py-2 font-alt hover:text-white 
    hover:brightness-110 lg:px-10"
      >
        <span className="pl-2 text-xl lg:text-2xl">{text}</span>
        <ChevronRight className="mt-1" />
      </button>
    </Link>
  )
}
