'use client'
import { ChevronRight } from 'lucide-react'

interface ButtonProps {
  text: string
  sectionId: string
}

export default function Button({ text, sectionId }: ButtonProps) {
  const handleClick = () => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      className="my-button flex w-fit items-center gap-2 border border-azul-200/10 px-6 py-2 font-alt hover:text-white 
    hover:brightness-110 lg:px-10"
      onClick={handleClick}
    >
      <span className="pl-2 text-xl lg:text-2xl">{text}</span>
      <ChevronRight className="mt-1" />
    </button>
  )
}
