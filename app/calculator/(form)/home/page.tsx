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
      <header className="flex flex-col sm:flex-row gap-2 justify-between pb-[10px] border-b-[#29836d] border-b-[2px] w-full items-center">
        <TitleComponent>Dom</TitleComponent>
        <NextBackButton next="transport" />
      </header>
      <div className="overflow-y-scroll h-[52vh] w-full px-[15px] sm:h-auto scrollbar-thin flex flex-col gap-[25px]">
        <CustomInput
          min={min}
          name="EnergyUse"
          type="number"
          setInput={setInput}
          label='Ile zużywasz prądu ?'
          value={input.EnergyUse}
          spanContent=' kwH'
        />
        <CustomInput
          min={min}
          name="CoalUse"
          type="number"
          setInput={setInput}
          label='Ile zużywasz węgla?'
          value={input.CoalUse}
          spanContent=' kg'
        />
        <CustomInput
          min={min}
          name="WoodUse"
          type="number"
          setInput={setInput}
          label='Ile zużywasz drewna opałowego?'
          value={input.WoodUse}
          spanContent=' kg'
        />
        <CustomInput
          min={min}
          name="HotWater"
          type="number"
          setInput={setInput}
          label='Ile zużywasz ciepłej wody?'
          value={input.HotWater}
          spanContent=' m3'
        />
        <CustomInput
          min={min}
          name="GasUse"
          type="number"
          setInput={setInput}
          label='Ile zużywasz gazu?'
          value={input.GasUse}
          spanContent='kg'
        />
        {/* <ul>
          <li>Prąd: {input.homeInput1} kwH</li>
          <li>Węgiel: {input.homeInput2} kg</li>
          <li>Drewno: {input.homeInput3} kg</li>
          <li>Ciepła woda:{input.homeInput4} m3</li>
          <li>Gaz: {input.GasUse} kg</li>
        </ul> */}
      </div>
    </>
  )
}

export default Calculator