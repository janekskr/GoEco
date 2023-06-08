'use client'

import TitleComponent from "@/components/main/TitleComponent"
import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext } from "react"

const Summary = () => {

    const {input, phoneCO2Emission, gasCO2Emission, homeCO2Emission, all, deliverySum} = useContext(CalculatorContext)

    const entertaiment = phoneCO2Emission(+input.LaptopUsage)
    const transport = gasCO2Emission(+input.UsedFuel,+input.DistanceDriven )
    const home = homeCO2Emission()
    let ecoCheck  
    if (all >= 670){
      ecoCheck = "NIE JESTEŚ EKO FRIENDLY!"
    }
    else{
      ecoCheck = "JESTEŚ EKO FRIENDLY!"
    }

  return (
    <div className="text-[#29836d] p-[40px]"> 
      <TitleComponent>Podsumowanie</TitleComponent>
      <ul>
        <li>Przesyłki wazyły: {deliverySum.weight} Kg</li>
        <li>Przesyłki jechaly: {deliverySum.journey} Km</li>
        <li>{home} kilogramów CO2 wyprodukowanych poprzez użytek w gospodarstwie domowym {all ? `(${(home / all * 100) } %)` : ""}</li>
        <li>{transport} kilogramów CO2 wyprodukowanych poprzez transport {all ? `(${(transport / all * 100) } %)` : ""}</li>
        <li>{entertaiment} kilogramów CO2 wyprodukowanych przez rozrwykę {all ? `(${(entertaiment / all * 100) } %)` : ""}</li>
      </ul>
      <h1>OGÓLNIE WYPRODUKOWAŁEŚ {all} KILOGRAMÓW CO2</h1>
      <h2>{ecoCheck}</h2>
    </div>
  )
}

export default Summary