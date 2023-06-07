'use client'

import Link from "next/link"
import EarthComponent from '../components/EarthComponent'

const Home = () => {
  return (
    <>
      <div className="pt-[7vh] flex md:flex-row flex-col items-center sm:px-[60px] justify-center md:h-[calc(93vh-80px)]">
        <div className="flex items-center md:items-start flex-col flex-3 md:ml-[5vw] w-full mx-[20px]">
          <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-semibold text-center md:text-left">Oblicz swój ślad węglowy</h1>
          <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold text-center md:text-left">I zadbaj o środowisko</h1>
          <Link href="/calculator/home" className="bg-green-800 px-12 py-6 my-6 block rounded-full font-semibold text-2xl sm:text-3xl md:text-4xl hover:shadow-2xl transition">Kalkulator</Link>
        </div>
        <EarthComponent />
      </div>
      
    </>
  )
}

export default Home