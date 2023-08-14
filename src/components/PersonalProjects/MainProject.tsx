import coinsynch from '@/assets/projetos-pessoais/coinsynch.jpg'
import { Github, Monitor } from 'lucide-react'
import Image from 'next/image'

const project = {
  name: 'CoinSynch',
  description:
    'Coinsynch é um projeto fictício, desenvolvido como desafio técnico de uma vaga de dev front-end. Consiste em uma Landing Page que contém informações sobre criptomoedas e um painel administrativo que permite ao usuário gerenciar sua carteira e realizar transações.',
  url: 'https://coinsynch-delta.vercel.app/',
  github: 'https://github.com/kellcrivelaroo/coinsynch',
  image: coinsynch,
}

export default function MainProject() {
  return (
    <div className="mt-5 flex w-full flex-col justify-center px-5 lg:mt-20">
      <div className="flex w-full flex-col-reverse items-center justify-center text-lg lg:flex-row">
        <div
          className="flex-1 flex-col text-center lg:items-end 
        lg:justify-end lg:pr-8  lg:text-end"
        >
          <div className="mx-auto mt-5 w-fit lg:mx-0 lg:ml-auto lg:mt-0">
            <span className="pr-1 font-alt text-slate-200">em destaque:</span>
            <h3 className="-mt-2 mb-5 font-alt text-3xl font-bold underline lg:text-4xl 2xl:text-5xl">
              {project.name}
            </h3>
          </div>
          <p className="mb-10 text-base lg:text-lg">{project.description}</p>

          <div className="mx-auto flex w-fit flex-col gap-2 pb-4 lg:mx-0 lg:ml-auto lg:flex-row lg:gap-6">
            <a
              className="my-button w-[186px] py-1 text-center group-hover:blur-none group-hover:delay-100 lg:py-2"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <Github className="mr-1 inline" /> Github
            </a>
            <a
              className="my-button w-[186px] py-1 text-center group-hover:blur-none group-hover:delay-100 lg:py-2"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <Monitor className="mr-2 inline" /> Ver projeto
            </a>
          </div>
        </div>

        <div className="basis-auto lg:basis-[54%]">
          <a href={project.url} target="_blank" rel="noreferrer">
            <Image
              src={project.image}
              alt={project.name}
              width={1000}
              height={1000}
              className="rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:brightness-[1.01]"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
