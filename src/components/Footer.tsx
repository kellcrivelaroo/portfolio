import Logo from './Logo'
import Social from './Social'

export default function Footer() {
  return (
    <footer className="mt-10 flex w-full flex-col items-center gap-2 border-t border-azul-400/30 p-4 pb-6 lg:mt-24">
      <Logo />
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 lg:-mt-10 lg:flex-row">
        <div className="opacity-90">Todos os direitos reservados.</div>
        <Social />
      </div>
    </footer>
  )
}
