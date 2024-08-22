import Button from "@/components/primary/Button"
import Logo from "@/components/primary/Logo"
import Key from "../../../../../public/svgs/key_icon.svg"
import Input from "@/components/primary/input"
import { sectionType } from "../rightContainer"
import { FC } from "react"
import ArrowLeft from "../../../../../public/svgs/arrow-left.svg"

interface props {
    changeSection: (newSection: sectionType) => void
}

const NewPassword:FC<props> = ({changeSection}) => {
    return (
        <>
            <Logo />
            <Key className="mx-auto mt-4" />
            <h1 className="text-[1.5em] sm:text-[2em]  mt-1 font-medium text-[#333333]">Set new password</h1>
            <p className="text-[0.9em] mb-8 text-[#5B5B5B] pt-2 font-normal">Your new password must be different from previously used passwords.</p>

            <Input 
                label={<label className="text-[#333333] font-medium text-[0.9em]">Password</label>} 
                placeholder="Enter your password"
                type="password"
                name="password"
            />

            <Input 
                label={<label className="text-[#333333] font-medium text-[0.9em]">Confirm password</label>} 
                placeholder="Confirm your password"
                type="password"
                name="confirmpassword"
            />

            <div className="mt-6">
                {/* Just For Test Remove onclick */}
                <Button onClick={() => changeSection("checkmail")}>
                    Reset Password
                </Button>
            </div>

            <p onClick={() => changeSection("signin")} className="flex justify-center items-center gap-2 cursor-pointer text-[0.9em] text-[#475467] font-medium mt-6"><ArrowLeft /> Back to Sign in</p>

        </>
    )
}

export default NewPassword