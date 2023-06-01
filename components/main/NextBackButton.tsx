'use client'

import Link from "next/link"

interface NextBackButtonProps {
    back?: string;
    next?: string;
}

const NextBackButton = ({ back, next }: NextBackButtonProps) => {
    return (
        <div
            className="
                border-[1px]
                py-2
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
                rounded-full
                border-green-700
            ">
            <div className="flex items-center justify-between">
                {
                    (back && next) ?
                        <>
                            <Link href={`/calculator/${back}`} className="text-sm font-semibold px-6 ">
                                Poprzednie
                            </Link>
                            <Link href={`/calculator/${next}`} className="text-sm font-semibold px-6 border-l-[1px] border-green-700 flex-1 text-center ">
                                Następne
                            </Link>
                        </> :
                        back ?
                            <Link href={`/calculator/${back}`} className="text-sm font-semibold px-6 ">
                                Poprzednie
                            </Link> :
                            next && 
                            <Link href={`/calculator/${next}`} className="text-sm font-semibold px-6 flex-1 text-center ">
                                Następne
                            </Link>
                }
            </div>




            {/* {
                (back && next) ?
                    <>
                        <Link href={`/calculator/${back}`} className="border-r-[1px] pr-[10px]  border-r-white text-white">BACK</Link>
                        <Link href={`/calculator/${next}`} className="border-l-[1px] pl-[10px] border-l-white text-white">NEXT</Link>
                    </> :
                    back ?
                        <Link href={`/calculator/${back}`} className=" text-white">BACK</Link> :
                        next &&
                        <Link href={`/calculator/${next}`} className=" text-white">NEXT</Link>
            } */}
        </div>
    )
}

export default NextBackButton