import Link from "next/link"
import Logo2 from "../../../public/svgs/Logo_white.svg"
import Button from "../primary/Button"
import { useState } from "react"
import gsap from "gsap"

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)

    const toggleNav = () => {
        const openAnim = gsap.timeline()
            .to(".phone-nav", {y: 0})
            .to(".hamburger-line-top", {rotate: "45deg", y: 1, height: "2px"}, "<")
            .to(".hamburger-line-bottom", {rotate: "-45deg", y: "-5.5px", height: "2px"}, "<")

        const closeAnim = gsap.timeline()
            .to(".phone-nav", {y: "-100%"})
            .to(".hamburger-line-top", {rotate: "0deg", y: 0, height: "1px"}, "<")
            .to(".hamburger-line-bottom", {rotate: "0deg", y: 0, height: "1px"}, "<")

        openNav && openAnim.play()
        !openNav && closeAnim.reverse()
        
        setOpenNav(prev => !prev)
    }

    return (
        <nav className=" bg-[#161529] text-white border-b border-b-white" >
            <div className="z-[4] bg-[#161529] relative py-6 mdx3:py-4 flex justify-between items-center px-6">
                <div>
                    <Logo2 />
                </div>
                {/* WEB NAV */}
                <div className="hidden mdx4:flex gap-5 ">
                    <Link href={"#"} >Home</Link>
                    <Link href={"#"} >Features</Link>
                    <Link href={"#"} >Pricing</Link>
                    <Link href={"#"} >About us</Link>
                    <Link href={"#"} >Contact</Link>
                </div>
                <div className="hidden mdx4:flex gap-3 z-[2]">
                    <Button className="w-[120px] font-light bg-transparent hover:bg-[#B3387F] cursor-pointer transition-all">Sign in</Button>
                    <Button className="font-light w-[120px] ">Sign up</Button>
                </div>
                {/* FOR MOBILE */}
                <div onClick={toggleNav} className="flex cursor-pointer mdx4:hidden flex-col gap-2 py-1">
                    <div className="hamburger-line-top w-[1.4em] h-[1px] bg-white"></div>
                    <div className="hamburger-line-bottom w-[1.4em] h-[1px] bg-white"></div>
                </div>
            </div>

            {/* MOBILE NAV */}
            <div className="phone-nav flex -translate-y-full flex-col mdx4:hidden absolute bg-[#161529] top-0 h-[100vh] w-full z-[3] pt-[6em]" >
                <div className="flex flex-col items-center gap-6">
                    <Link href={"#"} >Home</Link>
                    <Link href={"#"} >Features</Link>
                    <Link href={"#"} >Pricing</Link>
                    <Link href={"#"} >About us</Link>
                    <Link href={"#"} >Contact</Link>
                    
                    <div className="flex flex-col gap-3">
                        <Button className="w-[120px] font-light bg-transparent hover:bg-[#B3387F] cursor-pointer transition-all">Sign in</Button>
                        <Button className="font-light w-[120px] ">Sign up</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar