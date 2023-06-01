"use client"
import React, { useState, useEffect } from 'react'
import CustomLink from './CustomLink'
import {usePathname} from 'next/navigation'

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
  }
]

const Sidebar = () => {

  const pathname = usePathname()
  const [ selected, setSelected ] = useState<number>()

  useEffect(() => console.log(pathname), [pathname])
  return (
    <ul className='bg-green-200 flex flex-col p-[40px] gap-4'>
      { links.map((item, index: number) => (
        <li key={index}>
          <CustomLink href={`/calculator/${item.href}`} name={item.name} active={pathname == `/calculator/${item.href}`} />
        </li>  
      )) 
      }
      <li className='mt-auto'>
        <CustomLink href={`/calculator/summary`} name="Prześlij" active={true} />
      </li>
    </ul>
  )
}

export default Sidebar