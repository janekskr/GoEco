'use client'

import Link from "next/link"
import EarthComponent from '../components/EarthComponent'

const Home = () => {
  return (
    <>
      <div className="mt-[10vh] flex items-center px-[60px] justify-between [h-70vh]">
        <div className="flex items-start flex-col flex-3 ml-[5vw]">
          <h1 className="text-[3.75rem] font-semibold">Oblicz swój ślad węglowy</h1>
          <h1 className="text-[3.75rem] font-extrabold">I zadbaj o środowisko</h1>
          <Link href="/calculator" className="bg-green-800 px-12 py-6 mt-6 block rounded-full font-semibold text-4xl hover:shadow-2xl transition">Kalkulator</Link>
        </div>
        <EarthComponent />

      </div>
      
    </>
  )
}

export default Home