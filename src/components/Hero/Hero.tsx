'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Copy } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import kell from '../../assets/kell-dev.png'
import ScrollWrapper from '../ScrollWrapper'

export default function Hero() {
  const email = 'kellcrivelaro92@gmail.com'
  const [, setEmailCopied] = useState(false)
  const [emailContent, setEmailContent] = useState(email)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setEmailCopied(true)
    setEmailContent('E-mail copiado!')

    setTimeout(() => {
      setEmailCopied(false)
      setEmailContent(email)
    }, 2000)
  }

  return (
    <section className="relative">
      {/* BG */}
      <div
        className="absolute -left-40 -top-40 z-[-1] h-[420px] w-[420px] rounded-full bg-azul-400 
        blur-[200px] lg:-left-80 lg:-top-40 lg:h-[720px] lg:w-[720px] lg:bg-azul-400/60"
      />

      {/* Content */}
      <ScrollWrapper name="inicio" className="flex flex-col">
        <h1
          className="mb-4 mt-8 text-center font-alt text-3xl font-bold lg:mt-16 lg:pl-12 
      lg:text-left lg:text-[2.7em]"
        >
          Desenvolvedor React.js Front-end
        </h1>

        <div
          className="flex flex-col items-center justify-between rounded-3xl border border-azul-200/20 
        bg-azul-400/30 px-3 py-4 shadow-lg shadow-azul-400/20 backdrop-blur-sm lg:flex-row lg:px-14 lg:py-8"
        >
          <div className="flex flex-col items-center gap-4 lg:basis-3/4 lg:items-start lg:gap-6">
            <h2 className="px-4 text-center text-xl leading-snug lg:px-0 lg:text-start lg:text-2xl lg:font-medium lg:leading-normal xl:text-3xl">
              Desenvolvedor front-end, apaixonado por Pixel Perfect e por criar
              experiências interativas. <br />
              Sócio diretor da{' '}
              <a
                href="https://flametecnologia.com.br"
                className="underline transition-colors duration-500 hover:text-azul-200"
                target="_blank"
                rel="noreferrer"
              >
                Flame Tecnologia
              </a>
              , freelancer, e sempre em busca de novos desafios no mundo do
              desenvolvimento web.
            </h2>

            <Tooltip.TooltipProvider delayDuration={150}>
              <Tooltip.Root>
                <Tooltip.Trigger
                  className="w-[288px] lg:w-[350px]"
                  onClick={handleCopy}
                >
                  <div
                    className="my-button group flex items-center divide-x divide-azul-200 p-2 lg:p-2.5"
                    role="button"
                  >
                    <span className="flex-1 px-2 text-sm font-semibold group-hover:brightness-150 lg:px-4 lg:text-lg lg:font-medium">
                      {emailContent}
                    </span>
                    <div className="px-3 py-0.5 lg:pl-4">
                      <Copy className="w-5 group-hover:brightness-150 lg:w-auto" />
                    </div>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content
                  className="tooltip hidden rounded-md bg-gray-50 px-3 py-1 font-medium text-slate-800 shadow-sm shadow-azul-200 lg:flex"
                  sideOffset={12}
                >
                  Copiar e-mail!
                  <Tooltip.Arrow className="scale-150 fill-gray-50" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.TooltipProvider>
          </div>

          <div className="-mx-16 -mb-8 hidden lg:flex">
            <Image src={kell} alt="Kell Crivelaro" width={800} height={800} />
          </div>
        </div>
      </ScrollWrapper>
    </section>
  )
}
