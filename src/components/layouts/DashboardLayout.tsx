import { FC, ReactNode } from "react"
import SideNav from "../secondary/SideNav"
import TopNav from "../secondary/DashboardTopNav"

interface props {
    children: ReactNode
}

const DashboardLayout:FC<props> = ({children}) => {
    return (
        <>  
            <div className="flex">
                {/* <div className="flex-col flex-1 "> */}
                <div className="w-[50vw] sm:w-[30vw] mdx2:w-[20vw] ">
                    <SideNav />
                </div>
                {/* <div className="flex flex-1 sm:flex-[2.5] mdx2:flex-[4] flex-col"> */}
                <div className="w-[50vw] sm:w-[70vw] mdx2:w-[80vw]">
                    <TopNav />
                    <main className="bg-[#F8F8FA] h-[90vh] pt-5 px-4 overflow-auto ">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout