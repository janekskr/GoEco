import React from 'react'
import CustomLink from './CustomLink'
import { usePathname } from 'next/navigation'

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

interface SidebarItemsProps {
  className: string;
}


const SidebarItems = ({className} : SidebarItemsProps) => {
  const pathname = usePathname()

  return (
    <ul className={`bg-[#bcfdbe] flex-col ${className}`}>
        {links.map((item: any, index: number) => (
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

export default SidebarItems