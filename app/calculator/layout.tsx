import { CalculatorProvider } from "@/context/CalculatorContext"


export default function CalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <CalculatorProvider>
            <main className="h-[calc(100vh-80px)] flex items-center justify-center">
            <div className='flex w-[90%] h-[95%] md:h-[80%] bg-[#9dedb6] rounded-[25px] md:rounded-[35px] shadow-2xl overflow-hidden flex-col md:flex-row relative'>
                {children}
            </div>
        </main>
        </CalculatorProvider>
    )
}
