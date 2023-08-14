import Hero from '@/components/Hero/Hero'
import Sobre from '@/components/About/Sobre'
import Portfolio from '@/components/Portfolio/Portfolio'
import Contato from '@/components/Contact/Contato'
import PersonalProjects from '@/components/PersonalProjects/PersonalProjects'

export default function Home() {
  return (
    <main className="max-w-lg px-24 xs:px-20 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <Hero />
      <Sobre />
      <PersonalProjects />
      <Portfolio />
      <Contato />
    </main>
  )
}
