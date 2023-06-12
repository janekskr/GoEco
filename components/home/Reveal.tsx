"use client"

import { useRef } from "react"
import { motion, useInView } from 'framer-motion'

interface RevealProps {
    children: React.ReactNode;
    from: "left" | "right";
    className?: string;
} 

const Reveal = ({ children, from, className="" }: RevealProps) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    console.log(isInView)
    return (
        <div
            ref={ref}
            className={`${className} overflow-hidden w-fit`}>
            <motion.div
                animate={{ x: isInView && from === "left" ? 0 : 0 }}
                initial={{ x: from === "left" ? -1000 : 1000 }}
                transition={{delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>


    )
}

export default Reveal