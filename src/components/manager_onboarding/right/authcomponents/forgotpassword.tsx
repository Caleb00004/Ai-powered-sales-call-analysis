import Input from "@/components/primary/input"
import Logo from "@/components/primary/Logo"
import Key from "../../../../../public/key_icon.svg"
import Button from "@/components/primary/Button"
import { sectionType } from "../rightContainer"
import { FC } from "react"
import ArrowLeft from "../../../../../public/arrow-left.svg"

interface props {
    changeSection: (newSection: sectionType) => void
}

const ForgotPassword:FC<props> = ({changeSection}) => {
    return (
        <>
            <Logo />
            <Key className="mx-auto mt-4" />
            <h1 className="text-[1.5em] sm:text-[2em] mt-1 font-medium text-[#333333]">Forgot password?</h1>
            <p className="text-[0.9em] mb-8 text-[#5B5B5B] pt-2 font-normal">No worries, we’ll send you reset instructions.</p>

            <Input 
                label={<label className="text-[#333333] font-medium text-[0.9em]">Email</label>} 
                placeholder="Enter your Email"
                type="email"
                name="email"
            />


            {/* Just For Test Remove onclick */}
            <Button onClick={() => changeSection("newpassword")}>
                Send
            </Button>
            <p onClick={() => changeSection("signin")} className=" cursor-pointer text-[0.9em] text-[#475467] flex justify-center items-center gap-2 font-medium mt-6"><ArrowLeft /> Back to Sign in</p>
        </>        
    )
}

export default ForgotPassword