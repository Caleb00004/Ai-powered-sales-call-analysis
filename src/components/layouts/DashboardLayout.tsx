import { FC, ReactNode } from "react"
import SideNav from "../secondary/SideNav"

interface props {
    children: ReactNode
}

const DashboardLayout:FC<props> = ({children}) => {
    return (
        <>  
            <h1>HEad</h1>
            <div className="flex">
                <div className="flex-col flex-1">
                    <SideNav />
                </div>
                <div className="flex flex-[4]">
                    {children}
                </div>
            </div>
        </>
    )
}

export default DashboardLayout