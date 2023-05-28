'use client'

import CustomInput from '@/components/main/CustomInput';
import { useState } from 'react';

  // Laptop pobiera ok. 6W na 1 godzinę jeden 1kWh = 1000W * 1g (W * t) / 1000
  // 1kWh = 657.1 g CO2 

const Calculator = () => {

  const min = 0

  const [input, setInput] = useState({
    input1: '',   
  })  

  const energy = (consumption: number) => {
    return +(consumption * 0.006).toFixed(2)
  }

  const co2Emission = (consumption: number) => {
    return +(energy(consumption) * 0.6571).toFixed(2)
  }

  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Telefony, Komputery itd...</h1>
      <CustomInput 
        min={min} 
        name="input1" 
        type="number" 
        setInput={setInput} 
        label='Ile godziń używałeś laptopa ?'
        value={input.input1}
      />
      <p>Zużyłeś: {energy(+input.input1)} Kwh</p>
      <p>Wyprodukowałeś: {co2Emission(+input.input1)} kilogramów CO2</p>
    </>
  )
} 

export default Calculator