import Sidebar from "@/components/main/Sidebar"


export default function CalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    console.log(children)
    return (
        <main className="h-[calc(100vh-80px)] flex items-center justify-center">
            <div className='flex w-[90%] h-[80%] bg-[#9dedb6] rounded-[35px] shadow-2xl overflow-hidden'>
                <Sidebar />
                <div className="flex flex-col p-[40px] flex-1 gap-5 items-start text-[#29836d] overflow-y-scroll scrollbar-thin">
                    {children}
                </div>
            </div>
        </main>

    )
}
