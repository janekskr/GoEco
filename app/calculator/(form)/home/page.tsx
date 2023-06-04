'use client'

import CustomInput from '@/components/main/CustomInput';
import { useContext } from 'react';
import { CalculatorContext } from '../../../../context/CalculatorContext'
import NextBackButton from '@/components/main/NextBackButton';
import TitleComponent from '@/components/main/TitleComponent';

const Calculator = () => {
  const min = 0
  const { input, setInput } = useContext(CalculatorContext)


  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 justify-between pb-[10px] border-b-[#29836d] border-b-[2px] w-full items-center">
        <TitleComponent>Dom</TitleComponent>
        <NextBackButton next="transport" />
      </div>
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
        spanContent='kg'
      />
      <ul>
        <li>Prąd: {input.homeInput1} kwH</li>
        <li>Węgiel: {input.homeInput2} kg</li>
        <li>Drewno: {input.homeInput3} kg</li>
        <li>Ciepła woda:{input.homeInput4} m3</li>
        <li>Gaz: {input.homeInput5} kg</li>
      </ul>
    </>
  )
}

export default Calculator