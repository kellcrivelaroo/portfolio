import { ChevronRight } from 'lucide-react'

interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="my-button flex w-fit items-center gap-2 border border-azul-200/10 px-10 py-2 font-alt 
    hover:text-white hover:brightness-110"
    >
      <span className="pl-2 text-2xl">{text}</span>
      <ChevronRight className="mt-1" />
    </button>
  )
}
