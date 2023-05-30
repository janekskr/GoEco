"use client"
import React, { useState } from 'react'
import CustomLink from './CustomLink'

const links = [
  {
    href: "home",
    name: "Dom"
  },
  {
    href: "transport",
    name: "Transport"
  },
  {
    href: "entertainment",
    name: "Telefony, Komputery itd..."
  },
  {
    href: "delivery",
    name: "Przesyłki"
  },
  // {
  //   href: "summary",
  //   name: "Podsumowanie"
  // }
]

const Sidebar = () => {
  const [ selected, setSelected ] = useState<number>()
  return (
    <ul className='bg-green-200 flex flex-col p-[40px] gap-4'>
      { links.map((item, index: number) => (
        <li key={index} onClick={() => setSelected(index)}>
          <CustomLink href={`/calculator/${item.href}`} name={item.name} selected={index == selected} />
        </li>  
      )) 
      }
      <li className='mt-auto'>
        <CustomLink href={`/calculator/summary`} name="Prześlij" selected={true} />
      </li>
    </ul>
  )
}

export default Sidebar