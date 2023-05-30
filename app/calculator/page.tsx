'use client'

import CustomInput from '@/components/main/CustomInput';
import { useContext } from 'react';
import {CalculatorContext} from '../../context/CalculatorContext'

const Calculator = () => {
  const min = 0
  const {input, setInput, currentCO2Emision} = useContext(CalculatorContext)


  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Dom</h1>
      <CustomInput
        min={min}
        name="homeInput1" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz prądu ?'
        value={input.homeInput1}
        spanContent=' kwH'
      />
      <CustomInput
        min={min}
        name="homeInput2" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz węgla?'
        value={input.homeInput2}
        spanContent=' kg'
      />
      <CustomInput
        min={min}
        name="homeInput3" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz drewna opałowego?'
        value={input.homeInput3}
        spanContent=' kg'
      />
      <CustomInput
        min={min}
        name="homeInput4" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz ciepłej wody?'
        value={input.homeInput4}  
        spanContent=' m3'
      />
      <CustomInput
        min={min}
        name="homeInput5" 
        type="number" 
        setInput={setInput} 
        label='Ile zużywasz gazu?'
        value={input.homeInput5}
        spanContent=' kwH'
      />
      {/* <p>{ecoTest(+input.homeInput1)}</p>  */}
      <ul>
        <li>Prąd: {input.homeInput1} kwH</li>
        <li>Węgiel: {input.homeInput2} kg</li>
        <li>Drewno: {input.homeInput3} kg</li>
        <li>Ciepła woda:{input.homeInput4} m3</li>
        <li>Gaz: {input.homeInput5} kwH</li>
      </ul>
      <p>Produkujesz {currentCO2Emision(+input.homeInput1)} kg CO2</p>
    </>
  )
}

export default Calculator