import Link from "next/link"

interface NextBackButtonProps {
    back?: string;
    next?: string;
}

const BackLink = ({ back }: {back: string;}) => {
    return (
        <Link href={`/calculator/${back}`} className="text-sm font-semibold px-3 sm:px-6 sm:text-lg">
            Poprzednie
        </Link>
    )
}

const NextLink = ({ next, className }: {next: string; className?: string;}) => {
    return (
        <Link href={`/calculator/${next}`} className={`text-sm font-semibold px-3 sm:px-6 border-green-700 flex-1 text-center sm:text-base lg:text-lg ${className} `}>
            Następne
        </Link>
    )
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
                            <BackLink back={back} />
                            <NextLink next={next} className="border-l-[1px]"/>
                        </> :
                        back ?
                            <BackLink back={back} /> :
                            next &&
                            <NextLink next={next} />
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