'use client'

//Dane na temat produkcji CO2 zawarte w pliku measurements.txt

import React, { createContext, useState } from "react";

interface InputState {
  homeInput1: string;
  homeInput2: string;
  homeInput3: string;
  homeInput4: string;
  homeInput5: string;
  transportInput1: string;
  transportInput2: string;
  deliveryInput1: string;
  deliveryInput2: string;
  entertainmentInput1: string;
}

interface DelievierySumState {
  weight: number;
  journey: number;
}

interface CalculatorContextProps {
  input: InputState;
  deliverySum: DelievierySumState;
  setDeliverySum: React.Dispatch<React.SetStateAction<DelievierySumState>>
  setInput: React.Dispatch<React.SetStateAction<InputState>>;
  phoneEnergyConsumption: (energy: number) => number;
  phoneCO2Emission: (consumption: number) => number;
  gasConsumption: (consumption: number, km: number) => number;
  gasCO2Emission: (consumption: number, km: number) => number;
  homeCO2Emission: () => number
  all: number
}

interface CalculatorContextProviderProps {
  children: React.ReactNode
}


export const CalculatorContext = createContext<CalculatorContextProps>({} as CalculatorContextProps)

export const CalculatorProvider = ({ children }: CalculatorContextProviderProps) => {
  const [input, setInput] = useState<InputState>({
    homeInput1: "",
    homeInput2: "",
    homeInput3: "",
    homeInput4: "",
    homeInput5: "",
    transportInput1: "",
    transportInput2: "",
    deliveryInput1: "",
    deliveryInput2: "",
    entertainmentInput1: "",
  });
  const [deliverySum, setDeliverySum] = useState({
    weight: 0, 
    journey: 0
  })

  const currentCO2Emission = (input: number) => {
    return input * 0.6571
  };

  const phoneEnergyConsumption = (energy: number) => {
    return energy * 0.006
  };

  const phoneCO2Emission = (consumption: number) => {
    return +(phoneEnergyConsumption(consumption) * 0.6571).toFixed(2)
  };

  const gasConsumption = (consumption: number, km: number) => {
    return consumption * km / 100
  }

  const gasCO2Emission = (consumption: number, km: number) => {
    return +(gasConsumption(consumption, km) * 2.5).toFixed(2)
  }

  const methanCO2Emission = (methanWeight: number) => {
    return methanWeight * 2.68
  }

  const coalCO2Emission = (coalWeight: number) => {
    return coalWeight * 2.5
  }

  const woodCO2Emission = (woodWeight: number) => {
    return woodWeight * 2.5
  }

  const waterCO2Emission = (waterCount: number) => {
    return waterCount * 29.5695
  }

  const homeCO2Emission = () => {
    return +( 
      currentCO2Emission(+input.homeInput1) + 
      coalCO2Emission(+input.homeInput2) + 
      woodCO2Emission(+input.homeInput3) + 
      waterCO2Emission(+input.homeInput4) + 
      methanCO2Emission(+input.homeInput5)
    ).toFixed(2)
  }

  const all = +(gasCO2Emission(+input.transportInput1,+input.transportInput2 ) + homeCO2Emission() + phoneCO2Emission(+input.entertainmentInput1)).toFixed(2)
  return (
    <CalculatorContext.Provider
      value={{
        input,
        deliverySum,
        setDeliverySum,
        setInput,
        phoneEnergyConsumption,
        phoneCO2Emission,
        gasConsumption,
        gasCO2Emission,
        homeCO2Emission,
        all
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}