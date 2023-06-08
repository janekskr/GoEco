'use client'

import CustomInput from '@/components/main/CustomInput';
import { useContext } from 'react';
import { CalculatorContext } from '@/context/CalculatorContext';
import NextBackButton from '@/components/main/NextBackButton';
import TitleComponent from '@/components/main/TitleComponent';

const Calculator = () => {
  const { input, setInput, gasConsumption } = useContext(CalculatorContext)
  const min = 0

  return (
    <>
      <header className="flex flex-col sm:flex-row gap-2 justify-between pb-[10px] border-b-[#29836d] border-b-[2px] w-full items-center">
        <TitleComponent>Transport</TitleComponent>
        <NextBackButton back="home" next="entertainment" />
      </header>
      <div className="overflow-y-scroll h-[52vh] w-full px-[15px] sm:h-auto scrollbar-thin flex flex-col gap-[25px]">
        <CustomInput
          min={min}
          name="transportInput1"
          type="number"
          setInput={setInput}
          label='Jakie jest twoje średnie spalanie na 100km ?'
          value={input.transportInput1}
          spanContent=" l / 100km"
        />

        <CustomInput
          min={min}
          name="transportInput2"
          type="number"
          setInput={setInput}
          label='Ile kilometrów przejechałeś ?'
          value={input.transportInput2}
          spanContent=" km"
        />

        <p>Spaliłeś: {gasConsumption(+input.transportInput1, +input.transportInput2)} Litrów paliwa</p>
      </div>
    </>
  )
}

export default Calculator