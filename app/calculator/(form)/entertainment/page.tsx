'use client'

import CustomInput from '@/components/main/CustomInput';
import NextBackButton from '@/components/main/NextBackButton';
import TitleComponent from '@/components/main/TitleComponent';
import { CalculatorContext } from '@/context/CalculatorContext';
import { useContext } from 'react';


const Calculator = () => {

  const min = 0
  const {input, setInput, phoneEnergyConsumption, phoneCO2Emission} = useContext(CalculatorContext)

  return (
    <>
    <div className="flex flex-col sm:flex-row gap-2 justify-between pb-[10px] border-b-[#29836d] border-b-[2px] w-full items-center">
      <TitleComponent>Telefony, Komputery itd...</TitleComponent>
      <NextBackButton next="delivery" back="transport" />
    </div>
      
      <CustomInput 
        min={min} 
        name="entertainmentInput1" 
        type="number" 
        setInput={setInput} 
        label='Ile godziń używałeś laptopa ?'
        value={input.entertainmentInput1}
      />
      <p>Zużyłeś: {phoneEnergyConsumption(+input.entertainmentInput1)} Kwh</p>
      
    </>
  )
} 

export default Calculator