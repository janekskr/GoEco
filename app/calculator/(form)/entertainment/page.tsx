'use client'

import CustomInput from '@/components/main/CustomInput';
import NextBackButton from '@/components/main/NextBackButton';
import TitleComponent from '@/components/main/TitleComponent';
import { CalculatorContext } from '@/context/CalculatorContext';
import { useContext } from 'react';


const Calculator = () => {

  const min = 0
  const { input, setInput, phoneEnergyConsumption } = useContext(CalculatorContext)

  return (
    <>
      <header className="flex flex-col sm:flex-row gap-2 justify-between pb-[10px] border-b-[#29836d] border-b-[2px] w-full items-center">
        <TitleComponent>Telefony, Komputery, itd...</TitleComponent>
        <NextBackButton next="delivery" back="transport" />
      </header>
      <div className="overflow-y-scroll h-[52vh] w-full px-[15px] sm:h-auto scrollbar-thin flex flex-col gap-[25px]">
        <CustomInput
          min={min}
          name="entertainmentInput1"
          type="number"
          setInput={setInput}
          label='Ile godziń używałeś laptopa ?'
          value={input.entertainmentInput1}
          spanContent=' h'
        />
        <p>Zużyłeś: {phoneEnergyConsumption(+input.entertainmentInput1)} Kwh</p>
      </div>
    </>
  )
}

export default Calculator