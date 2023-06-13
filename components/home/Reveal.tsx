"use client"

import { useRef } from "react"
import { motion, useInView } from 'framer-motion'

const Reveal = ({ children }: { children: React.ReactNode; }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <div
            ref={ref}
            className="overflow-hidden">
            <motion.div
                animate={isInView && { y: 0, opacity: 1 }}
                initial={{ y: 250, opacity: 0 }}
                transition={{ delay: 0.25, duration: .4 }}
            >
                {children}
            </motion.div>
        </div>


    );
}

export default Reveal