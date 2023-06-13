'use client'

import Link from "next/link"
import EarthComponent from '../components/home/EarthComponent'
import Reveal from "@/components/home/Reveal"

const Home = () => {
  return (
    <div className="pb-10">
      <div className="pt-[7vh] flex md:flex-row flex-col items-center px-[25px] sm:px-[60px]  justify-center  h-[calc(100vh-80px)]">
        <div className="flex items-center md:items-start flex-col flex-3 md:ml-[5vw] w-full mx-[20px]">
          <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-semibold text-center md:text-left">Oblicz swój ślad węglowy</h1>
          <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold text-center md:text-left">I zadbaj o środowisko</h1>
          <Link href="/calculator/home" className="bg-green-800 px-12 py-6 my-6 block rounded-full font-semibold text-2xl sm:text-3xl md:text-4xl hover:shadow-2xl transition">Kalkulator</Link>
        </div>
        <EarthComponent />
      </div>
      <div className="flex flex-col gap-10 items-center w-[80%] md:w-[65%] mx-auto mt-7"> 
          <Reveal>
            <div className="p-[40px] rounded-[40px] shadow-2xl bg-green-800">
              <h1 className=" text-xl md:text-3xl sm:text-2xl font-bold text-center">
                Czemu powinno cię to obchodzić zanieczyszczenie powietrza?
              </h1>
              <p className="text-center md:text-lg  mt-5">
                Wiele osób cierpi z powodu zanieczyszczenia powietrza, nie zdając sobie z tego sprawy. Ty możesz być jedną z nich! Duża część ludzkości nie rozumie powagi tej sytuacji. 7 milionów - taka jest liczba osób, które zmarły PRZEDWCZEŚNIE z powodu zanieczyszczenia powietrza i jego skutków. Jest również bardzo możliwe, że kontaminacja powietrza przyczyniła się do śmierci wielu starszych osób. Objawy wywoływane przez zanieczyszczenie powietrza są często bagatelizowane. To błąd, ponieważ w dłużeszej perspektywie czasu mogą prowadzić do ciękich chorób takich jak: rak płuc, udar, choroby serca, ostre i przewlekłe choroby układu oddechowego. Z tego powodu tak ważne jest więc dbanie o to zby nasze powietrze było czyste. Dbając o czyste powietrze, dbamy o swoje zdrowię
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="p-[40px] rounded-[40px] shadow-2xl bg-green-800">
              <h1 className=" text-xl md:text-3xl sm:text-2xl font-bold text-center">
                Co możesz zrobić, żeby zwalczyć zanieczyszczenie powietrza?
              </h1>
              <p className="text-center md:text-lg  mt-5">
                Jeżeli chodzi o zwalczanie zanieczyszczenia powietrza, to najlepszą rzeczą jaką możesz zrobić to poinformować innych o problemie, sprzeciwiać się wycince roślin usuwających CO2 i wspierać fundacje, które sadzą więcej roślinności. Mimo, że zwalczanie obecnego zanieczyszczenia jest bardzo potrzebne jest to jedynie pół problemu - trzeba również zwalczyć źródła kontaminacji powietrza. Ważne jest pamiętać, że choć pojedynczy człowiek może niewiele, to grupy osób mogą zdziałać dużo więcej. Do rzeczy, które możesz zrobić należą: zmiana formy transportu - najlepiej zastąpić jazdę autem na rzecz pociągu, autobusu, roweru lub zwykłego spaceru (jeśli jest to niemożliwe to zmiana auta na hybrydowe lub elektryczne jest krokiem w dobrą stronę), możesz także rozważyć ogrzewanie domowe na elektryczne lub gazowe.
              </p>
            </div>
          </Reveal>
      </div>
    </div>
  )
}

export default Home