import Image from "next/image"
import Logo from "@/components/primary/Logo"
import Line from "../../../../../public/Line 1.svg"
import Button from "@/components/primary/Button"
import Google from "../../../../../public/icons_google.svg"
import { FC } from "react"
import { sectionType } from "../rightContainer"
import Input from "@/components/primary/input"
import Microsoft from "../../../../../public/microsoft_icon.svg"

interface props {
    changeSection: (newSection: sectionType) => void
}
    
const Signin:FC<props> = ({changeSection}) => {
    return (
        <>
            <Logo />
            <h1 className="text-[1.5em] sm:text-[2em] mt-3 font-medium">Welcome Back</h1>
            <div className="flex gap-10 mt-7">
                <div className="hover:bg-[#B3387F] hover:text-white transition-all duration-[0.3s] cursor-pointer border text-[0.9em] text-[#333333] rounded-md font-normal border-[#D4D4D4] flex-1 text-center py-2 flex justify-center items-center gap-2">
                    <Google />
                    <p>Google</p>
                    <div className="absolute z-[1]"></div>
                </div>
                <div className="cursor-pointer hover:bg-[#B3387F] hover:text-white transition-all duration-[0.3s] border text-[0.9em] text-[#333333] rounded-md font-normal border-[#D4D4D4] flex-1 text-center py-2 flex justify-center items-center gap-2">
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
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Email</label>} 
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                />

                <Input 
                    label={
                        <div className="flex w-full justify-between">
                            <label className="text-[#333333] font-medium text-[0.9em]" >Password</label>
                            <label onClick={() => changeSection("forgotpassword")} className=" text-[#5272EA] cursor-pointer font-medium text-[0.9em]">Forget Password</label>
                        </div>
                    } 
                    placeholder="Enter password"
                    type="password"
                    name="password"
                />
                {/* <div className="flex flex-col items-start mb-4">
                    <div className="flex w-full justify-between">
                        <label className="text-[#333333] font-medium text-[0.9em]" >Password</label>
                        <label onClick={() => changeSection("forgotpassword")} className=" text-[#5272EA] cursor-pointer font-medium text-[0.9em]">Forget Password</label>
                    </div>
                    <input className="w-full mt-2 p-2 border border-[#D0D5DD] rounded-md" type="email" placeholder="Enter Password" name="password" />
                </div> */}
            </div>
            
            <Button>
                Sign in
            </Button>

            <p className="mt-6 text-[0.85em] text-[#475467] font-normal">Don't have an account <span onClick={() => changeSection("signup")} className="cursor-pointer text-[#5272EA] font-medium">Sign up</span></p>
            
        </>
    )
}

export default Signin
