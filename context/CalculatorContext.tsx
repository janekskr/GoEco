'use client'

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

interface CalculatorContextProps {
  input: InputState;
  setInput: React.Dispatch<React.SetStateAction<InputState>>;
  currentCO2Emision: (input: number) => number;
  phoneEnergyConsumption: (energy: number) => number;
  phoneCO2Emission: (consumption: number) => number;
  gasConsumption: (consumption: number, km: number) => number;
  gasCO2Emmision: (consumption: number, km: number) => number;
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

  const currentCO2Emision = (input: number) => {
    return +(input * 0.6571).toFixed(2);
  };

  const phoneEnergyConsumption = (energy: number) => {
    return +(energy * 0.006).toFixed(2);
  };

  const phoneCO2Emission = (consumption: number) => {
    return +(phoneEnergyConsumption(consumption) * 0.6571).toFixed(2);
  };

  //1 litr benzyny = 2.5kg CO2 
  const gasConsumption = (consumption: number, km: number) => {
    return +(consumption * km / 100).toFixed(2)
  }

  const gasCO2Emmision = (consumption: number, km: number) => {
    return +(gasConsumption(consumption, km) * 2.5).toFixed(2)
  }

  return (
    <CalculatorContext.Provider 
      value={{ 
        input, 
        setInput, 
        currentCO2Emision, 
        phoneEnergyConsumption, 
        phoneCO2Emission, 
        gasConsumption, 
        gasCO2Emmision 
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}