import Sidebar from "@/components/main/Sidebar"

export default function CalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Sidebar />
            <div className="flex flex-col p-[40px] flex-1 gap-5 items-start text-[#29836d] overflow-y-scroll scrollbar-thin">
                {children}
            </div>
        </>
    )
}