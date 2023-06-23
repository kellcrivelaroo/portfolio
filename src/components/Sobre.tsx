import Image from 'next/image'
import Button from './Button'
import avatar from '../assets/Avatar.png'

export default function Sobre() {
  return (
    <section className="mt-10 flex flex-col items-center lg:p-12" id="sobre">
      <div className="flex flex-col rounded-full border-8 border-gray-100 shadow-md shadow-azul-200/60">
        <Image src={avatar} width={200} height={200} alt="Kell Crivelaro" />
      </div>
      <div
        className="flex w-full flex-col items-center justify-center gap-2 px-4 py-8 leading-snug lg:gap-8
       lg:py-12 [&>p]:text-justify [&>p]:indent-8 [&>p]:text-xl lg:[&>p]:indent-10 lg:[&>p]:leading-normal"
      >
        <p>
          Meu nome é Kell Crivelaro, tenho 31 anos. Sou formado como técnico de
          informática pelo CTI (Colégio Técnico Industrial - UNESP) desde 2009.
          Logo na sequencia, me formei como engenheiro civil, no entanto, minha
          paixão pela tecnologia me levou a buscar uma nova transição para a
          área de programação, resultando na criação da Flame Tecnologia, no ano
          de 2022.
        </p>
        <p>
          Com habilidades em programação, desenvolvimento web e gerenciamento de
          projetos, estou comprometido em fornecer soluções eficazes e sob
          medida para os desafios dos meus clientes. Sou motivado pela busca
          constante de conhecimento, valorizo a colaboração e estou animado para
          contribuir em projetos desafiadores, trazendo minha experiência
          técnica e paixão pela tecnologia.
        </p>
        <p className="mb-4">
          Se você está procurando por um profissional versátil, orientado para
          resultados e com um histórico comprovado de sucesso, estou pronto para
          fazer a diferença em sua próxima iniciativa.
        </p>

        <Button text="Saiba mais" />
      </div>
    </section>
  )
}
