import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Portfolio from '@/components/Portfolio'
import Contato from '@/components/Contato'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Sobre */}
      <Sobre />

      {/* Portfólio */}
      <Portfolio />

      {/* Contato */}
      <Contato />
    </main>
  )
}
