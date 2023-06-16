import Image from 'next/image'
import Button from './Button'
import robo from '../assets/Robo.png'

export default function Hero() {
  return (
    <section>
      <h1 className="mb-4 mt-16 pl-12 font-alt text-[2.7em] font-bold">
        Desenvolvedor React.js Front-end
      </h1>
      <div
        className="flex flex-row items-center justify-between gap-4 rounded-3xl border border-azul-200/20 
        bg-azul-400/30 px-24 py-12 shadow-lg shadow-azul-400/20 backdrop-blur-sm"
      >
        <div className="flex basis-8/12 flex-col items-start gap-8">
          <h2 className="text-3xl font-medium leading-normal">
            Desenvolvedor front-end, apaixonado por criar experiências
            interativas. <br />
            Possuo uma empresa de desenvolvimento de sites -{' '}
            <a
              href="https://flametecnologia.com.br"
              className="underline transition-colors duration-500 hover:text-azul-200"
              target="_blank"
              rel="noreferrer"
            >
              Flame Tecnologia
            </a>{' '}
            - e trabalho como freelancer, transformando ideias em aplicações
            web.
          </h2>
          <Button text="Entre em contato" />
        </div>

        <div className="-mt-44 flex items-end justify-center">
          <Image src={robo} alt="robo" className="" />
        </div>
      </div>
    </section>
  )
}
