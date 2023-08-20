import Image from 'next/image'
import avatar from '../../assets/avatar2.png'
import kell from '../../assets/kell-dev.png'
import Button from '../Button'
import ScrollWrapper from '../ScrollWrapper'

export default function Sobre() {
  return (
    <section className="relative">
      {/* BG */}
      <div
        className="absolute -right-32 top-20 z-[-1] h-[200px] w-[200px] rounded-full bg-rosa
        blur-[200px] lg:top-32 lg:h-[520px] lg:w-[580px] lg:bg-rosa/50"
      />

      {/* Content */}
      <ScrollWrapper
        name="sobre"
        className="mt-10 flex flex-col items-center lg:p-12"
      >
        <div className="-mb-8 flex lg:hidden">
          <Image src={kell} width={400} height={400} alt="Kell Crivelaro" />
        </div>
        <div className="hidden rounded-full lg:flex">
          <Image src={avatar} width={240} height={240} alt="Kell Crivelaro" />
        </div>
        <div
          className="flex w-full flex-col items-center justify-center gap-2 px-4 py-8 leading-snug lg:gap-8
       lg:py-12 [&>p]:indent-8 lg:[&>p]:text-justify lg:[&>p]:indent-10 lg:[&>p]:text-xl lg:[&>p]:leading-normal"
        >
          <p>
            Meu nome é Kellington Crivelaro, tenho 31 anos. Sou formado como
            técnico de informática pelo CTI (Colégio Técnico Industrial - UNESP)
            desde 2009. Logo na sequencia, me formei como engenheiro civil, no
            entanto, minha paixão pela tecnologia me levou a buscar uma nova
            transição para a área de programação, resultando na criação da Flame
            Tecnologia, no ano de 2022.
          </p>
          <p>
            Com habilidades em programação, desenvolvimento web e gerenciamento
            de projetos, estou comprometido em fornecer soluções eficazes e sob
            medida para os desafios dos meus clientes. Sou motivado pela busca
            constante de conhecimento, valorizo a colaboração e estou animado
            para contribuir em projetos desafiadores, trazendo minha experiência
            técnica e paixão pela tecnologia.
          </p>
          <p className="mb-4">
            Se você está procurando por um profissional versátil, orientado para
            resultados e com um histórico comprovado de sucesso, estou pronto
            para fazer a diferença em sua próxima iniciativa.
          </p>

          <Button text="Entre em contato" sectionId="#contato" />
        </div>
      </ScrollWrapper>
    </section>
  )
}
