'use client'

import CustomInput from '@/components/main/CustomInput';
import { useContext } from 'react';
import { CalculatorContext } from '@/context/CalculatorContext';
import NextBackButton from '@/components/main/NextBackButton';

const Calculator = () => {
  const {input, setInput, gasConsumption} = useContext(CalculatorContext)
  const min = 0

  return (
    <>
      <div className="flex justify-between pb-[10px] border-b-[#29836d] border-b-[2px] w-full items-center">
      <h1 className="text-3xl font-bold">Transport</h1>
      <NextBackButton back="home" next="entertainment" />
    </div>
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

      <p>Spaliłeś: {gasConsumption(+input.transportInput1, +input.transportInput2)} Litrów paliwa</p>
    </>
  )
}

export default Calculator