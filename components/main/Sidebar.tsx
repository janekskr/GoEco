"use client"

import { usePathname } from 'next/navigation'
import { CustomLink } from '.'
import { links } from "../../public/assets/Dummy"

const Sidebar = () => {

    const pathname = usePathname()

    return (
      <ul className="bg-[#bcfdbe] flex-col p-[40px] gap-4 hidden lg:flex">
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

export default Sidebar
