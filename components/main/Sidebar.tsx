import React from 'react'
import CustomLink from './CustomLink'

const links = [
  {
    href: "/calculator/",
    name: "Dom"
  },
  {
    href: "/calculator/transport",
    name: "Transport"
  },
  {
    href: "/calculator/entertainment",
    name: "Telefony, Komputery itd..."
  },
  {
    href: "/calculator/delivery",
    name: "Przesyłki"
  },
]

const Sidebar = () => {
  return (
    <ul className='bg-green-200 flex flex-col p-[40px] gap-4'>
      { links && links.map((item, index: number) => (
        <li key={index}>
          <CustomLink href={item.href} name={item.name} />
        </li>  
      )) 
      }    
    </ul>
  )
}

export default Sidebar