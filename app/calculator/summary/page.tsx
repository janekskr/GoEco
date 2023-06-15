'use client'

import { SimpleChart, CircleChart } from "@/components/main"
import { CalculatorContext } from "@/context/CalculatorContext"
import Link from "next/link"
import { useContext } from "react"

const Summary = () => {

  const { input, phoneCO2Emission, gasCO2Emission, homeCO2Emission, all, percentage } = useContext(CalculatorContext)

  const entertaiment = phoneCO2Emission(+input.LaptopUsage)
  const transport = gasCO2Emission(+input.UsedFuel, +input.DistanceDriven)
  const home = homeCO2Emission()
  const baseline = 670
  return (
    <div className="text-[#29836d] p-[40px] w-full h-full flex flex-col">
      <p className="text-[35px] font-bold text-center flex-shrink-0">Podsumowanie</p>
      <div className=" md:pt-[20px] lg:pt-[30px] h-full overflow-auto flex flex-col items-center gap-[20px]">
        {
          all !== 0 ?
          <>
            <ul className="sm:text-[18px] md:text-[22px] mt-[35px] flex flex-col gap-[10px]">
          <li className="text-center lg:text-left">{home} kilogramów CO2 wyprodukowanych poprzez użytek w gospodarstwie domowym {percentage(home)}</li>
          <li className="text-center lg:text-left">{transport} kilogramów CO2 wyprodukowanych poprzez transport {percentage(transport)}</li>
          <li className="text-center lg:text-left">{entertaiment} kilogramów CO2 wyprodukowanych przez rozrwykę {percentage(entertaiment)}</li>
        </ul>
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-24 my-8">
          <SimpleChart
            baseline={baseline}
            compared={all}
          />
          <CircleChart entries={[
            { name: "Dom", value: home },
            { name: "Transport", value: transport },
            { name: "Rozrywka", value: entertaiment }
          ]} />
        </div>
        <p className="text-center lg:text-left font-semibold text-2xl mb-[20px]">OGÓLNIE WYPRODUKOWAŁEŚ {all} KILOGRAMÓW CO2</p>
        <h2 className={`text-center lg:text-left font-extrabold text-2xl ${all >= baseline ? "text-red-600" : "text-green-600"}`}>{all >= baseline ? "NIE JESTEŚ EKO FRIENDLY!" : "JESTEŚ EKO FRIENDLY!"}</h2>
          </> :
          <div className="w-full h-full flex items-center justify-center flex-col gap-[50px] ">
            <p className="text-2xl font-medium text-center">Przepraszamy aby zobaczyć podsumowanie najpierw wypełnij formularz</p>
            <Link href="/calculator/home" className="shadow-md text-xl hover:shadow-2xl px-[1.5rem] py-[1.2rem] bg-green-600 rounded-full text-white">Powrót do formularza</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Summary  