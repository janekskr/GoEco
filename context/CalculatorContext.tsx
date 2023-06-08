'use client'

//Dane na temat produkcji CO2 zawarte w pliku measurements.txt

import React, { createContext, useState } from "react";

interface InputState {
  EnergyUse: string;
  CoalUse: string;
  WoodUse: string;
  HotWater: string;
  GasUse: string;
  UsedFuel: string;
  DistanceDriven: string;
  PackageDistance: string;
  PackageWeight: string;
  LaptopUsage: string;
  HowMuch: number
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
    EnergyUse: "",
    CoalUse: "",
    WoodUse: "",
    HotWater: "",
    GasUse: "",
    UsedFuel: "",
    DistanceDriven: "",
    PackageDistance: "",
    PackageWeight: "",
    HowMuch: 1,
    LaptopUsage: "",
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