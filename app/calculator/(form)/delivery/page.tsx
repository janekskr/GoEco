'use client'

import CustomInput from "@/components/main/CustomInput"
import CustomLink from "@/components/main/CustomLink"
import NextBackButton from "@/components/main/NextBackButton"
import TitleComponent from "@/components/main/TitleComponent"
import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext, useState } from "react"
const Delivery = () => {
  const { input, setInput, setDeliverySum } = useContext(CalculatorContext)
  const [list, setList] = useState<object[]>([])

  const addTask = () => {
    if (+input.PackageDistance && +input.PackageWeight) {
      const task = { journey: +input.PackageDistance, weight: +input.PackageWeight }
      setList(prev => [...prev, task ])
      setDeliverySum((prev: any) => ({ ...prev, weight: prev.weight + task.weight, journey: prev.journey + task.journey }))
      input.PackageDistance = ""
      input.PackageWeight = ""
      input.HowMuch = "1"  
    }
  }

  return (
    <>
      <header className="flex flex-col sm:flex-row gap-2 justify-between pb-[10px] border-b-[#29836d] border-b-[2px] w-full items-center">
        <TitleComponent>Przesyłki</TitleComponent>
        <NextBackButton back="entertainment" />
        <CustomLink href={`/calculator/summary`} name="Prześlij" active={true} className="block md:hidden" />
      </header>
      <div className="overflow-y-scroll h-[52vh] w-full px-[15px] sm:h-auto scrollbar-thin flex flex-col gap-[25px]">
        <div className="flex gap-[20px] flex-col items-center w-full lg:items-start">
          <CustomInput
            min={0}
            name="PackageDistance"
            type="number"
            setInput={setInput}
            label='Długość jaką przebyła przesyłka ?'
            value={input.PackageDistance}
            spanContent=" km"
          />
          <CustomInput
            min={0}
            name="PackageWeight"
            type="number"
            setInput={setInput}
            label='Ile ważyła twoja przesyłka ?'
            value={input.PackageWeight}
            spanContent=" kg"
          />

          <button onClick={addTask} className="bg-green-700 text-white rounded-lg p-[10px] hover:shadow-2xl">Dodaj Przesyłkę</button>

        </div>
        <div className="grid grid-cols-1 w-full gap-[20px]">
          <ul className="flex items-center justify-between py-[10px] text-green-600 text-center border-b-[2px] border-b-green-700">
            <li className="flex-1 text-center font-bold text-large">Nazwa</li>
            <li className="flex-1 text-center font-bold text-large">Trasa</li>
            <li className="flex-1 text-center font-bold text-large">Waga</li>
          </ul>
          {
            list.map((item: any, index) => (
              <ul key={index} className="flex items-center justify-between bg-green-500 p-[10px] rounded-[10px] shadow-md text-white">
                <li className="flex-1 text-center">Przesyłka {index + 1}</li>
                <li className="flex-1 text-center">{item.journey} km</li>
                <li className="flex-1 text-center">{item.weight} kg</li>
              </ul>
            ))
          } 
        </div>
      </div>
    </>
  )
}
// const packageAmount = (item:any, index: number, amount:string) =>{
//   const list = []
//   for(let i=0; i<+amount; i++){
//     list.push(

//   )
//   }
//   return list
// }
export default Delivery