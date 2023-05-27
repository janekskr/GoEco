'use client'

import CustomInput from "@/components/main/CustomInput"
import { useState } from "react"

const Delivery = () => {
const [input, setInput] = useState({
    input1: ""
})
  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Przesyłki</h1>

      <CustomInput
        min={0}
        name="input1" 
        type="text" 
        setInput={setInput} 
        label='Długość jaką przebyła przesyłka ?'
        value={input.input1}
        spanContent=" kilometrów"
      />
    </>  
  )
}

export default Delivery