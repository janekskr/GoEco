'use client'

import { CustomInput, Header, NextBackButton, ScrollContainer, TitleComponent } from "@/components/main"
import { useContext } from 'react';
import { CalculatorContext } from "@/context/CalculatorContext";
const Calculator = () => {
  const min = 0
  const { input, setInput } = useContext(CalculatorContext)


  return (
    <>
      <Header>  
        <TitleComponent>Dom</TitleComponent>
        <NextBackButton next="transport" />
      </Header>
      <ScrollContainer>
        <CustomInput
          min={min}
          name="EnergyUse"
          type="number"
          setInput={setInput}
          label='Ile zużywasz prądu?'
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
        </ScrollContainer>
    </>
  )
}

export default Calculator