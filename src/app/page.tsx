import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Portfolio from '@/components/Portfolio'
import Contato from '@/components/Contato'
import PersonalProjects from '@/components/PersonalProjects'

export default function Home() {
  return (
    <main className="px-10">
      <Hero />
      <Sobre />
      <PersonalProjects />
      <Portfolio />
      <Contato />
    </main>
  )
}
