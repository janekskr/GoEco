"use client"

//Dane na temat produkcji CO2 zawarte w pliku measurements.txt

import React, { createContext, useState } from "react";

interface InputState {
  EnergyUse: number;
  CoalUse: number;
  WoodUse: number;
  HotWater: number;
  GasUse: number;
  UsedFuel: number;
  DistanceDriven: number;
  PackageDistance: number;
  PackageWeight: number;
  LaptopUsage: number;
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
  homeCO2Emission: () => number;
  percentage: (number: number) => string;
  all: number
}

interface CalculatorContextProviderProps {
  children: React.ReactNode
}


export const CalculatorContext = createContext<CalculatorContextProps>({} as CalculatorContextProps)

export const CalculatorProvider = ({ children }: CalculatorContextProviderProps) => {
  const [input, setInput] = useState<InputState>({
    EnergyUse: 0,
    CoalUse: 0,
    WoodUse: 0,
    HotWater: 0,
    GasUse: 0,
    UsedFuel: 0,
    DistanceDriven: 0,
    PackageDistance: 0,
    PackageWeight: 0,
    LaptopUsage: 0,
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
      currentCO2Emission(+input.EnergyUse) + 
      coalCO2Emission(+input.CoalUse) + 
      woodCO2Emission(+input.WoodUse) + 
      waterCO2Emission(+input.HotWater) + 
      methanCO2Emission(+input.GasUse)
    ).toFixed(2)
  }

  const all = +(gasCO2Emission(+input.UsedFuel,+input.DistanceDriven ) + homeCO2Emission() + phoneCO2Emission(+input.LaptopUsage)).toFixed(2)
  
  const percentage = (number: number) => {
    if(!all) return ""
    
    return `( ${(number / all * 100).toFixed(2)} % )`
  }

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
        all,
        percentage  
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}