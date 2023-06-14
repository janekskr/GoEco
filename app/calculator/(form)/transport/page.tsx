'use client'

import { CustomInput, Header, NextBackButton, TitleComponent, ScrollContainer } from "@/components/main"
import { useContext } from 'react';
import { CalculatorContext } from '@/context/CalculatorContext';

const Calculator = () => {
  const { input, setInput } = useContext(CalculatorContext)
  const min = 0

  return (
    <>
      <Header>
        <TitleComponent>Transport</TitleComponent>
        <NextBackButton back="home" next="entertainment" />
      </Header>
      <ScrollContainer  >
        <CustomInput
          min={min}
          name="UsedFuel"
          type="number"
          setInput={setInput}
          label='Jakie jest twoje średnie spalanie na 100km ?'
          value={input.UsedFuel}
          spanContent=" l / 100km"
        />

        <CustomInput
          min={min}
          name="DistanceDriven"
          type="number"
          setInput={setInput}
          label='Ile kilometrów przejechałeś ?'
          value={input.DistanceDriven}
          spanContent=" km"
        />
      </ScrollContainer >
    </>
  )
}

export default Calculator