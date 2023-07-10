import Image from 'next/image'
import Button from './Button'
import kell from '../assets/kell-dev.png'

export default function Hero() {
  return (
    <section className="flex flex-col">
      <h1
        className="mb-4 mt-8 text-center font-alt text-3xl font-bold lg:mt-16 lg:pl-12 
      lg:text-left lg:text-[2.7em]"
      >
        Desenvolvedor React.js Front-end
      </h1>

      <div
        className="flex flex-col items-center justify-between rounded-3xl border border-azul-200/20 
        bg-azul-400/30 p-6 shadow-lg shadow-azul-400/20 backdrop-blur-sm lg:flex-row lg:px-14 lg:py-8"
      >
        <div className="flex basis-10/12 flex-col items-center gap-4 lg:items-start lg:gap-6">
          <h2 className="text-center text-xl leading-snug lg:text-start lg:text-2xl lg:font-medium lg:leading-normal xl:text-3xl">
            Desenvolvedor front-end, apaixonado por criar experiências
            interativas. <br />
            Sócio diretor da{' '}
            <a
              href="https://flametecnologia.com.br"
              className="underline transition-colors duration-500 hover:text-azul-200"
              target="_blank"
              rel="noreferrer"
            >
              Flame Tecnologia
            </a>
            , Freelancer, e em busca de novos desafios por meio de vaga como
            desenvolvedor web.
          </h2>
          <Button text="Entre em contato" sectionId="#contato" />
        </div>

        <div className="-mx-16 -mb-8 hidden lg:flex">
          <Image src={kell} alt="Kell Crivelaro" width={800} height={800} />
        </div>
      </div>
    </section>
  )
}
