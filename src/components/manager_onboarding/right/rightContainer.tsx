import Signin from "./authcomponents/signin"
import ForgotPassword from "./authcomponents/forgotpassword"
import NewPassword from "./authcomponents/newpassword"
import CheckMail from "./authcomponents/checkmail"
import Signup from "./authcomponents/signup"
import { useState } from "react"
import gsap from "gsap"

export type sectionType = "signin" | "forgotpassword" | "newpassword" | "checkmail" | "signup"

const RightContainer = () => {
    const [section, setSection] = useState<sectionType>("signin")
    
    
    const handleSectionChange = (newsection: sectionType) => {
        const fadeAnimation = gsap.timeline()
            .to(".auth-right-container", {opacity: 0})
            .to(".auth-right-container", {opacity: 1})
        fadeAnimation.play()

        setTimeout(() => {
            setSection(newsection)
        },500)

    }

    return (
        <div className="right-container auth-right-container mdx3:flex-[1.5] min-h-screen flex flex-col items-center  pt-[4.5%] overflow-y-scroll">
            <div className=" w-[90%] mdx2:w-[30em] pt-8 pb-14 mdx3:pt-0 text-center">
                {section === "signin" && <Signin changeSection={handleSectionChange} />}
                {section === "forgotpassword" && <ForgotPassword changeSection={handleSectionChange} />}
                {section === "newpassword" && <NewPassword changeSection={handleSectionChange} />}
                {section === "checkmail" && <CheckMail changeSection={handleSectionChange} />}
                {section === "signup" && <Signup changeSection={handleSectionChange} />}
            </div>
        </div>
    )
}

export default RightContainer