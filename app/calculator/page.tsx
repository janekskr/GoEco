'use client'

import CustomInput from '@/components/main/CustomInput';
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState({
    input1: '0',
    input2: '0',
    input3: '0',
    input4: '0',
    input5: '0',
  })
  const min = 0
  const co2Emission = () => {
    return +(input.input1 * 0.6571).toFixed(2)
  }
  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Dom</h1>
      <CustomInput
        min={min}
        name="input1" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz prądu ?'
        value={input.input1}
        spanContent=' kwH'
      />
      <CustomInput
        min={min}
        name="input2" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz węgla?'
        value={input.input2}
        spanContent=' kg'
      />
      <CustomInput
        min={min}
        name="input3" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz drewna opałowego?'
        value={input.input3}
        spanContent=' kg'
      />
      <CustomInput
        min={min}
        name="input4" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz ciepłej wody?'
        value={input.input4}  
        spanContent=' m3'
      />
      <CustomInput
        min={min}
        name="input5" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz gazu?'
        value={input.input5}
        spanContent=' kwH'
      />
      {/* <p>{ecoTest(+input.input1)}</p>  */}
      <ul>
        <li>Prąd: {input.input1} kwH</li>
        <li>Węgiel: {input.input2} kg</li>
        <li>Drewno: {input.input3} kg</li>
        <li>Ciepła woda:{input.input4} m3</li>
        <li>Gaz: {input.input5} kwH</li>
      </ul>
      <p>Produkujesz {co2Emission()} kg CO2</p>
      
    </>
  )
}

export default Calculator