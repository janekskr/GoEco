'use client'

import TitleComponent from "@/components/main/TitleComponent"
import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext } from "react"

const Summary = () => {

  const { input, phoneCO2Emission, gasCO2Emission, homeCO2Emission, all, deliverySum, percentage } = useContext(CalculatorContext)

  const entertaiment = phoneCO2Emission(+input.LaptopUsage)
  const transport = gasCO2Emission(+input.UsedFuel, +input.DistanceDriven)
  const home = homeCO2Emission()

  return (
    <div className="text-[#29836d] p-[40px] w-full h-full">
      <p className="text-[35px] font-bold text-center">Podsumowanie</p>
      <div className="lg:ml-[50px] md:pl-[20px] md:pt-[20px] lg:pt-[50px]">
        <ul className="sm:text-[18px] md:text-[22px] mt-[35px] flex flex-col gap-[10px]">
          {/* <li>Przesyłki wazyły: {deliverySum.weight} Kg</li>
        <li>Przesyłki jechaly: {deliverySum.journey} Km</li> */}
          <li className="text-center lg:text-left">{home} kilogramów CO2 wyprodukowanych poprzez użytek w gospodarstwie domowym {percentage(home)}</li>
          <li className="text-center lg:text-left">{transport} kilogramów CO2 wyprodukowanych poprzez transport {percentage(transport)}</li>
          <li className="text-center lg:text-left">{entertaiment} kilogramów CO2 wyprodukowanych przez rozrwykę {percentage(entertaiment)}</li>
        </ul>
        <p className="text-center lg:text-left font-semibold text-2xl my-[20px]">OGÓLNIE WYPRODUKOWAŁEŚ {all} KILOGRAMÓW CO2</p>
        <h2 className={`text-center lg:text-left font-extrabold text-2xl ${all >= 670 ? "text-red-600" : "text-green-600"}`}>{all >= 670 ? "NIE JESTEŚ EKO FRIENDLY!" : "JESTEŚ EKO FRIENDLY!"}</h2>
      </div>
    </div>
  )
}

export default Summary  