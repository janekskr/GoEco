'use client'

import CustomInput from '@/components/main/CustomInput';
import { CalculatorContext } from '@/context/CalculatorContext';
import { useContext } from 'react';


const Calculator = () => {

  const min = 0
  const {input, setInput, phoneEnergyConsumption, phoneCO2Emission} = useContext(CalculatorContext)

  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Telefony, Komputery itd...</h1>
      <CustomInput 
        min={min} 
        name="entertainmentInput1" 
        type="number" 
        setInput={setInput} 
        label='Ile godziń używałeś laptopa ?'
        value={input.entertainmentInput1}
      />
      <p>Zużyłeś: {phoneEnergyConsumption(+input.entertainmentInput1)} Kwh</p>
      <p>Wyprodukowałeś: {phoneCO2Emission(+input.entertainmentInput1)} kilogramów CO2</p>
      <div className='grid grid-cols-3 gap-4 place-items-end h-56 ...'>
        <a href="/calculator/">BACK</a>
        <a href="/calculator/delivery">NEXT</a>
      </div>

    </>
  )
} 

export default Calculator