'use client'

import CustomInput from '@/components/main/CustomInput';
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState({
    input1: '',
    input2: ''
  })
  let min : number = 0
  // JAK COŚ TO 1 litr benzyny = 2.5kg CO2 

  const liters = (consumption: number, km: number) => {
    return +(consumption * km / 100).toFixed(2)
  }

  const sum = (consumption: number, km: number) => {
    return +(liters(consumption, km) * 2.5).toFixed(2)
  }

  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Transport</h1>
      <CustomInput
        min={min} 
        name="input1" 
        type="number" 
        setInput={setInput} 
        label='Ile kilometrów przejechałeś ?'
        value={input.input1}
        spanContent=" / 100km"
      />
      <CustomInput
        min={min} 
        name="input2" 
        type="number" 
        setInput={setInput} 
        label='Jakie jest twoje średnie spalanie na 100km ?'
        value={input.input2}
        spanContent="Litrów"
      />    

      <p>Spaliłeś: {liters(+input.input1, +input.input2)} Litrów paliwa</p>
      <p>Wyprodukowałeś: {sum(+input.input1, +input.input2)} kilogramów CO2</p>
    </>
  )
}

export default Calculator