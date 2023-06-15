"use client"

import { CustomInput, Header, NextBackButton, ScrollContainer, TitleComponent } from "@/components/main"
import { CalculatorContext } from '@/context/CalculatorContext';
import { useContext } from 'react';

const Calculator = () => {

  const min = 0
  const { input, setInput } = useContext(CalculatorContext)

  return (
    <>
      <Header>
        <TitleComponent>Rozrywka</TitleComponent>
        <NextBackButton next="delivery" back="transport" />
      </Header>
      <ScrollContainer>
        <CustomInput
          min={min}
          name="LaptopUsage"
          type="number"
          setInput={setInput}
          label='Ile godziń używałeś laptopa ?'
          value={input.LaptopUsage}
          spanContent=' h'
        />
      </ScrollContainer>
    </>
  )
}

export default Calculator