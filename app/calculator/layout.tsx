import { CalculatorProvider } from "@/context/CalculatorContext"

export default function CalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <CalculatorProvider>
            <main className="h-[calc(100vh-80px)] flex items-center justify-center">
                <div className='flex w-[90%] h-[80%] bg-[#9dedb6] overflow-hidden rounded-[25px] md:rounded-[35px] shadow-2xl flex-col md:flex-row relative'>
                    {children}
                </div>
            </main>
        </CalculatorProvider>
    )
}
