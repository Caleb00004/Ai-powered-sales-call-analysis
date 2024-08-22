import { FC, ReactNode } from "react"
import Navbar from "../secondary/Navbar"
import Footer from "../secondary/Footer"

interface props {
    children: ReactNode
}

const HomeLayout:FC<props> = ({children}) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default HomeLayout