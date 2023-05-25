import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Lexend } from 'next/font/google'

const font = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'GoEco',
  description: 'GoEco to strona pozwalająca na zmierzenie swojego śladu węglowego. Ma ona uświadomić ludzi o tym jak dużym zagrożeniem jest globalne ocieplanie.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="h-screen w-full bg-[url('/assets/background.svg')] bg-no-repeat bg-cover text-white px-[5vw]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
