import './globals.css'
import { Lexend } from 'next/font/google'
import {Navbar} from '@/components/navbar'
import {Footer} from '@/components/footer'

const font = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'GoEco',
  description: 'GoEco to strona pozwalająca na zmierzenie swojego śladu węglowego. Ma ona uświadomić ludzi o tym jak dużym zagrożeniem jest globalne ocieplanie.',
  icons: {
      icon: '/favicon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="pl">
      <body className={`${font.className} w-screen overflow-x-hidden`}>
        <div className="min-h-screen relative w-full bg-[url('/img/background.svg')] bg-no-repeat bg-cover text-white">
          <Navbar />
          <div className="pb-[100px] sm:pb-[150px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
