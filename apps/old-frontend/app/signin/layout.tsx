
export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="overflow-hidden bg-background flex items-center justify-center h-screen">
            <div className="flex h-[600px] shadow rounded-[0.5rem] border flex-row px-0 w-[1000px]">
                <div
                    className="flex flex-col basis-1/2 bg-center bg-cover bg-origin-border h-full p-10 dark:border-r bg-[url('/test.png')]">
                </div>
                <div className="flex h-full basis-1/2 ">
                    {children}
                </div>
            </div>
        </div>

    )
}

