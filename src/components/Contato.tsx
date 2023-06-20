import { Mail, MapPin } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import Form from './Form'
import Rocket from './Rocket'

export default function Contato() {
  return (
    <section className="relative mt-20 flex flex-col items-center" id="contato">
      <div className="z-20 w-[920px]">
        <h2 className="mb-4 mt-8 self-start pl-10 font-alt text-5xl font-bold tracking-wider">
          Contato
        </h2>

        {/* Card */}
        <div
          className="blue-[4px] z-10 grid grid-cols-2 gap-8 rounded-2xl border border-azul-200/20 
        bg-gradient-to-b from-azul-600/50 to-azul-600/20 px-16 pb-12 pt-20 shadow-md shadow-azul-600/40 backdrop-blur-sm"
        >
          {/* Left */}
          <div className="flex flex-1 flex-col gap-3 pr-4 leading-relaxed">
            <h3 className="text-xl font-bold">Entre em contato</h3>
            <p>
              Sinta-se a vontade para me ligar ou enviar uma mensagem!
              <br /> Siga me também nas redes sociais.
            </p>
            <div className="group mt-10 flex items-center gap-2 font-alt">
              <div className="rounded-full bg-white/20 p-2 transition-transform duration-300 group-hover:scale-110">
                <SiWhatsapp
                  className="h-7 w-7 transition-all duration-500 group-hover:rotate-12 group-hover:text-azul-200"
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
                  className="transition-all duration-500 group-hover:-rotate-12 group-hover:text-azul-200"
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
                  className="transition-all duration-500 group-hover:rotate-12 group-hover:text-azul-200"
                  width={28}
                  height={28}
                />
              </div>
              <p className="origin-left cursor-default transition-all duration-300 group-hover:scale-110 group-hover:text-azul-200">
                Bauru - SP
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="">
            <h3 className="text-xl font-bold">Enviar mensagem</h3>
            <Form />
          </div>
        </div>
      </div>
      <Rocket />
    </section>
  )
}
