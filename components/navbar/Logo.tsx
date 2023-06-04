import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <Link
            href="/"
            className="
            w-[130px] 
            sm:w-[150px] 
            aspect-[580/102] 
            relative
        "
        >
            <Image
                src="/img/logo.png"
                alt="Logo"
                fill 
                priority
                sizes="(max-width: 768px) 130px,(max-width: 1200px) 150px"
            />
        </Link>
    )
}

export default Logo