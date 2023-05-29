'use client'

import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext } from "react"

const Summary = () => {

    const {input} = useContext(CalculatorContext)
    const energy = (consumption: number) => {
      return +(consumption * 0.006).toFixed(2)
    }
  
    const co2Emission = (consumption: number) => {
      return +(energy(consumption) * 0.6571).toFixed(2)
    }
    const liters = (consumption: number, km: number) => {
      return +(consumption * km / 100).toFixed(2)
    }
  
    const sum = (consumption: number, km: number) => {
      return +(liters(consumption, km) * 2.5).toFixed(2)
    }
    // const all = (entertaiment: number, home:number, transport:number) => {
    //   return entertaiment + home + transport
    // }

    let entertaiment:number = co2Emission(input.entertainmentInput1)
    let transport:number = sum(input.transportInput1,input.transportInput2 )
    let home:number = co2Emission(input.homeInput1)
    let all:number = entertaiment + home + transport
    let ecoCheck:string
    if (all >=100){
      ecoCheck = "NIE JESTEŚ EKO FRIENDLY !"
    }
    else{
      ecoCheck = "JESTEŚ EKO FRIENDLY !"
    }
  return (
    <>
     <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Podsumawanie</h1>
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

    </>
  )
}

export default Summary