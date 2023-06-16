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
  description: 'Portfólio de jobs e projetos de @kellcrivelaroo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${baiJamJuree.variable} overflow-x-hidden bg-azul-900 font-sans text-gray-50`}
      >
        <div className="flex min-h-screen flex-col items-center overflow-y-hidden">
          <Background />
          <Header />
          <div className="min-w-sm max-w-lg px-8 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
