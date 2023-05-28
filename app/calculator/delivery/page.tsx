'use client'

import CustomInput from "@/components/main/CustomInput"
import { useState } from "react"

const Delivery = () => {
  const [input, setInput] = useState({
    input1: "",
    input2: "",
  })
  const [list, setList] = useState<object[]>([])

  const addTask = () => {
    if (+input.input1 && +input.input2) {
      const task = { journey: +input.input1, weight: +input.input2 }
      setList(prev => [...prev, task])
    }
  }
  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Przesyłki</h1>

      <CustomInput
        min={0}
        name="input1"
        type="number"
        setInput={setInput}
        label='Długość jaką przebyła przesyłka ?'
        value={input.input1}
        spanContent=" kilometrów"
      />
      <CustomInput
        min={0}
        name="input2"
        type="number"
        setInput={setInput}
        label='Ile ważyła twoja przesyłka'
        value={input.input2}
        spanContent=" kilogramów"
      />
      <button onClick={addTask} className="bg-green-700 text-white rounded-lg p-[10px] hover:shadow-2xl">Dodaj Przesyłkę</button>
      <div className="grid grid-cols-1 w-full gap-[20px]">
        <ul className="flex items-center justify-between gap-[50px] py-[10px] text-green-600 text-center border-b-[2px] border-b-green-700">
          <li className="flex-1 text-center font-bold text-large decoration-sky-600 ">Nazwa</li>
          <li className="flex-1 text-center font-bold text-large decoration-sky-600 ">Trasa</li>
          <li className="flex-1 text-center font-bold text-large decoration-sky-600 ">Waga</li>
        </ul>
        {
          list.map((item: any, index) => (
            <ul key={index} className="flex items-center justify-between gap-[50px] bg-green-500 p-[10px] rounded-[10px] shadow-md text-white">
              <li className="flex-1 text-center">Przesyłka {index + 1}</li>
              <li className="flex-1 text-center">{item.journey} km</li>
              <li className="flex-1 text-center">{item.weight} kg</li>
            </ul>
          ))
        }
      </div>
    </>
  )
}

export default Delivery