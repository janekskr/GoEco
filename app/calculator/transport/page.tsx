'use client'

import CustomInput from '@/components/main/CustomInput';
import { useContext } from 'react';
import { CalculatorContext } from '@/context/CalculatorContext';

const Calculator = () => {
  const {input, setInput} = useContext(CalculatorContext)
  const min = 0
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
        name="transportInput1" 
        type="number" 
        setInput={setInput} 
        label='Jakie jest twoje średnie spalanie na 100km ?'
        value={input.transportInput1}
        spanContent=" litrów / 100km"
      />    
      
      <CustomInput
        min={min} 
        name="transportInput2" 
        type="number" 
        setInput={setInput} 
        label='Ile kilometrów przejechałeś ?'
        value={input.transportInput2}
        spanContent=" kilometrów"
      />

      <p>Spaliłeś: {liters(+input.transportInput1, +input.transportInput2)} Litrów paliwa</p>
      <p>Wyprodukowałeś: {sum(+input.transportInput1, +input.transportInput2)} kilogramów CO2</p>
    </>
  )
}

export default Calculator