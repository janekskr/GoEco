import './globals.css'
import { Lexend } from 'next/font/google'
import Navbar from '../components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

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
    <html lang="en">
      <body className={font.className}>
        <div className="min-h-screen w-full bg-[url('/img/background.svg')] bg-no-repeat bg-cover text-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
