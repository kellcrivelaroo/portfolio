import './globals.css'
import { ReactNode } from 'react'
import { Montserrat, Bai_Jamjuree as BaiJamJuree } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

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
        <div className="relative flex min-h-fit flex-col items-center overflow-hidden">
          <Background />
          <Header />
          <div className="max-w-lg px-8 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
