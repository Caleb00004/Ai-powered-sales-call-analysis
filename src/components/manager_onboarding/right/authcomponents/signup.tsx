import Logo from "@/components/primary/Logo"
import Button from "@/components/primary/Button"
import Google from "../../../../../public/svgs/icons_google.svg"
import Input from "@/components/primary/input"
import { sectionType } from "../rightContainer"
import Microsoft from "../../../../../public/svgs/microsoft_icon.svg"
import { FC } from "react"

interface props {
    changeSection: (newSection: sectionType) => void
}

const Signup:FC<props> = ({changeSection}) => {
    return (
        <>
            <Logo />
            <h1 className="text-[1.5em] sm:text-[2em] mt-3 font-medium">Create an account</h1>
            <div className="flex gap-10 mt-7">
                <div className="hover:bg-[#B3387F] hover:text-white transition-all duration-[0.3s] cursor-pointer border text-[0.9em] text-[#333333] rounded-md  border-[#D4D4D4] flex-1 text-center py-2 flex justify-center items-center gap-2">
                    <Google />
                    <p>Google</p>
                </div>
                <div className="hover:bg-[#B3387F] hover:text-white transition-all duration-[0.3s] cursor-pointer border text-[0.9em] text-[#333333] rounded-md border-[#D4D4D4] flex-1 text-center py-2 flex justify-center items-center gap-2">
                    <Microsoft />
                    <p>Microsoft</p>
                </div>
            </div>
            <div className="py-8 flex justify-center items-center gap-4">
                <div className="border-[0.1px] w-full"></div>
                <p>Or</p>
                <div className="border-[0.1px] w-full"></div>
            </div>
            <div className="mb-6">
                <Input 
                    label={<label className="text-[#333333] font-medium text-[0.9em]">First name</label>} 
                    placeholder="Enter first name"
                    type="text"
                    name="first_name"
                />
                <Input 
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Last name</label>} 
                    placeholder="Enter last name"
                    type="text"
                    name="last_name"
                />
                <Input 
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Email</label>} 
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                />
                <Input 
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Password</label>} 
                    placeholder="Enter password"
                    type="password"
                    name="password"
                />
                <Input 
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Confirm Password</label>} 
                    placeholder="Enter password"
                    type="password"
                    name="password"
                />
            </div>

            <Button>
                Sign up
            </Button>

            <p className="mt-6 text-[0.85em] text-[#475467] font-normal">Already have an account<span  onClick={() => changeSection("signin")} className="cursor-pointer text-[#5272EA] font-medium"> Sign in</span></p>
        </>
    )
}

export default Signup