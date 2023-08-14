import { Mail, MapPin } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import Form from './Form'
import Social from '../Social'

export default function Contato() {
  return (
    <section
      className="relative flex flex-col items-center lg:mt-20"
      id="contato"
    >
      {/* BG */}
      <div
        className="absolute -left-20 -top-28 z-[-1] h-[200px] w-[200px] rounded-full bg-azul-200/60 blur-[240px] 
      lg:h-[500px] lg:w-[500px]"
      />

      {/* Content */}
      <div className="z-20 lg:w-[920px]">
        <h2
          className="mb-4 text-center font-alt text-4xl font-bold tracking-wider lg:pl-10 
        lg:text-start lg:text-5xl"
        >
          Contato
        </h2>

        {/* Card */}
        <div
          className="z-10 grid grid-cols-1 gap-2 rounded-2xl border border-azul-200/20 bg-gradient-to-b from-azul-600/50
           to-azul-600/20 p-6 pt-8 shadow-md shadow-azul-600/40 backdrop-blur-sm lg:grid-cols-2 
           lg:gap-8 lg:px-16 lg:pb-12 lg:pt-20"
        >
          {/* Left */}
          <div className="flex flex-1 flex-col gap-3 leading-relaxed lg:pr-4 [&>p]:text-center lg:[&>p]:text-start">
            <h3 className="hidden text-xl font-bold lg:block">
              Entre em contato
            </h3>

            <p className="">
              Sinta-se a vontade para me ligar ou enviar uma mensagem!
              <br /> Siga-me também nas redes sociais.
            </p>

            <div className="flex flex-col gap-2 pl-6 lg:mb-4 lg:gap-4 lg:pl-0">
              <div className="group mt-4 flex items-center gap-3 font-alt lg:mt-10">
                <div className="rounded-full bg-white/20 p-2 transition-transform duration-300 group-hover:scale-110">
                  <SiWhatsapp
                    className="h-7 w-7 transition-all duration-500 group-hover:rotate-6 group-hover:text-azul-200"
                    width={32}
                    height={32}
                  />
                </div>
                <a
                  href="https://wa.me/5514988038933?text=Ol%C3%A1+Kell%21+Vi+seu+site+de+portf%C3%B3lio+e+me+interessei+pelos+seus+servi%C3%A7os."
                  className="origin-left transition-all duration-300 group-hover:scale-110 group-hover:text-azul-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  (14) 98803-8933
                </a>
              </div>
              <div className="group mt-2 flex items-center gap-3 font-alt">
                <div className="rounded-full bg-white/20 p-2 transition-transform duration-300 group-hover:scale-110">
                  <Mail
                    className="transition-all duration-500 group-hover:-rotate-6 group-hover:text-azul-200"
                    width={28}
                    height={28}
                  />
                </div>
                <a
                  href="mailto:kellcrivelaro92@gmail.com"
                  className="origin-left transition-all duration-300 group-hover:scale-110 group-hover:text-azul-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  kellcrivelaro92@gmail.com
                </a>
              </div>
              <div className="group mt-2 flex items-center gap-3 font-alt">
                <div className="rounded-full bg-white/20 p-2 transition-transform duration-300 group-hover:scale-110">
                  <MapPin
                    className="transition-all duration-500 group-hover:rotate-6 group-hover:text-azul-200"
                    width={28}
                    height={28}
                  />
                </div>
                <p className="origin-left cursor-default transition-all duration-300 group-hover:scale-110 group-hover:text-azul-200">
                  Bauru - SP
                </p>
              </div>
              <div className="my-6 flex w-full justify-center lg:mt-6 lg:justify-start lg:pl-3">
                <Social />
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-center text-xl font-bold lg:text-start">
              Enviar mensagem
            </h3>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
