import Sidebar from "@/components/main/Sidebar"

export default function CalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Sidebar />
            <div className="flex overflow-hidden flex-col p-[25px] md:p-[40px] flex-1 gap-5 items-start text-[#29836d]">
                {children}
            </div>
        </>
    )
}