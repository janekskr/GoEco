"use client"

import { useState } from "react"

const InformationSectionItem = ({title, content}: {title: string; content: string}) => {
  const [showMore, setShowMore] = useState<boolean>(false)
  return (
    <div className="p-[40px] bg-[#1f6b3c]">
              <h1 className=" text-xl md:text-3xl sm:text-2xl font-bold text-center">
                {title}
              </h1>
              <p className="text-center mt-5 block sm:hidden">
                {
                    showMore ? 
                    content :
                    content.slice(0, 300) + " ..."
                }
              </p>
              <p className="text-center text-lg mt-5 hidden sm:block">
                {content}
              </p>
              <button className=" mx-auto mt-[25px] block sm:hidden px-[20px] py-[10px] shadow-md hocer:shadow-2xl bg-green-800 text-lg font-bold rounded-[20px] text-white" onClick={() => setShowMore(prev => !prev)}>
                Pokaż {showMore ? " mniej" : "więcej"}
              </button>
            </div>
  )
}

export default InformationSectionItem
