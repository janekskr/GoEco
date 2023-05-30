'use client'

import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext } from "react"

const Summary = () => {

    const {input, phoneCO2Emission, gasCO2Emmision, currentCO2Emision} = useContext(CalculatorContext)

    const entertaiment = phoneCO2Emission(+input.entertainmentInput1)
    const transport = gasCO2Emmision(+input.transportInput1,+input.transportInput2 )
    const home = currentCO2Emision(+input.homeInput1)
    const all = +(entertaiment + home + transport).toFixed(2)
    let ecoCheck  
    if (all >= 100){
      ecoCheck = "NIE JESTEŚ EKO FRIENDLY !"
    }
    else{
      ecoCheck = "JESTEŚ EKO FRIENDLY !"
    }
  return (
    <div className="text-[#29836d] p-[40px]">
      <h1 className="text-3xl font-bold self-center pb-[10px] w-full">Podsumawanie</h1>
      <ul>
        <li>{home} kilogramów CO2 wyprodukowanych poprzez użytek w gospodarstwie domowym</li>
        <li>{input.homeInput2}</li>
        <li>{input.homeInput3}</li> 
        <li>{input.homeInput4}</li>
        <li>{input.homeInput5}</li>
        <li>{transport} kilogramów CO2 wyprodukowanych poprzez transport</li>
        <li>{entertaiment} kilogramów CO2 wyprodukowanych przez rozrwykę</li>
      </ul>
      <h1>OGÓLNIE WYPRODUKOWAŁEŚ {all} KILOGRAMÓW CO2</h1>
      <h2>{ecoCheck}</h2>
    </div>
  )
}

export default Summary