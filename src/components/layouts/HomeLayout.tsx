import { FC, ReactNode } from "react"
import Navbar from "../secondary/Navbar"
import Footer from "../secondary/Footer"
// import MessageIcon from "../../public/svgs/message.svg"

interface props {
    children: ReactNode
}

const HomeLayout:FC<props> = ({children}) => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <main className="text-white pt-[4.5em] bg-[#161529]">
                {/* <MessageIcon className="fixed z-[3] bottom-5 cursor-pointer right-5 h-20 w-20 " /> */}
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout