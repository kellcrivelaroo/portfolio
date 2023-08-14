import './globals.css'
import { ReactNode } from 'react'
import { Montserrat, Bai_Jamjuree as BaiJamJuree } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'

const poppins = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

const baiJamJuree = BaiJamJuree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bai',
})

export const metadata = {
  title: 'Kell Crivelaro',
  description: 'Portfólio projetos front-end - Desenvolvedor React.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${baiJamJuree.variable} overflow-x-hidden bg-azul-900 font-sans text-gray-50`}
      >
        <div className="relative flex min-h-max flex-col items-center overflow-hidden">
          {/* Stars */}
          <div className="absolute z-[-1] min-h-full w-full bg-[url(../assets/stars.png)] bg-contain bg-repeat" />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
