import Link from "next/link"

interface NextBackButtonProps {
    back?: string;
    next?: string;
}

const NextBackButton = ({ back, next }: NextBackButtonProps) => {
    return (
        <div className="flex items-center rounded-[20px] py-[10px] px-[15px] bg-green-600">
            {
                (back && next) ?
                    <>
                        <Link href={`/calculator/${back}`} className="border-r-[1px] pr-[10px]  border-r-white text-white">BACK</Link>
                        <Link href={`/calculator/${next}`} className="border-l-[1px] pl-[10px] border-l-white text-white">NEXT</Link>
                    </> :
                    back ?
                        <Link href={`/calculator/${back}`} className=" text-white">BACK</Link> :
                        next &&
                        <Link href={`/calculator/${next}`} className=" text-white">NEXT</Link>
            }
        </div>
    )
}

export default NextBackButton