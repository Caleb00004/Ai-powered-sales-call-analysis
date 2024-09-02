import { FC, ReactNode } from "react"
import Navbar from "../secondary/Navbar"
import Footer from "../secondary/Footer"

interface props {
    children: ReactNode
}

const HomeLayout:FC<props> = ({children}) => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <main className="text-white">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout