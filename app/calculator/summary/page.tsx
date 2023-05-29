'use client'

import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext } from "react"

const Summary = () => {

    const {input} = useContext(CalculatorContext)

  return (
    <>
     <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Podsumawanie</h1>
        <ul>
            <li>{input.homeInput1}</li>
            <li>{input.homeInput2}</li>
            <li>{input.homeInput3}</li> 
            <li>{input.homeInput4}</li>
            <li>{input.homeInput5}</li>
            <li>{input.transportInput1}</li>
            <li>{input.transportInput2}</li>
            <li>{input.entertainmentInput1}</li>
        </ul>
    </>
  )
}

export default Summary