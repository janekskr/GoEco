import Sidebar from "@/components/sidebar/Sidebar"


export default function CalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="h-[calc(100vh-80px)] flex items-center justify-between">
            <div className='flex w-[90%] h-[80%] bg-[#9dedbe] rounded-[35px] shadow-2xl overflow-hidden'>
                <Sidebar />
                <div className="flex flex-col p-[35px] flex-1 gap-5 items-start">
                    {children}
                </div>
            </div>
        </main>

    )
}
