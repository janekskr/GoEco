import React from 'react'
import CustomLink from './CustomLink'

const links = [
  {
    href: "",
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
  {
    href: "summary",
    name: "Podsumowanie"
  }
]

const Sidebar = () => {
  return (
    <ul className='bg-green-200 flex flex-col p-[40px] gap-4'>
      { links && links.map((item, index: number) => (
        <li key={index}>
          <CustomLink href={`/calculator/${item.href}`} name={item.name} />
        </li>  
      )) 
      }    
    </ul>
  )
}

export default Sidebar