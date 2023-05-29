'use client'

import { useState, createContext } from "react"

export const CalculatorContext = createContext()

export function CalculatorProvider({ children }) {
    const [input, setInput] = useState({
        homeInput1: '',
        homeInput2: '',
        homeInput3: '',
        homeInput4: '',
        homeInput5: '',
        transportInput1:'',
        transportInput2:'',
        deliveryInput1:'',
        deliveryInput2:'',
        entertainmentInput1:'',
    })
    return (
        <CalculatorContext.Provider value={{ input, setInput }}>
            {children}
        </CalculatorContext.Provider>
    )
}