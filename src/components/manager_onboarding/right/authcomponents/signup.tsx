import Logo from "@/components/primary/Logo"
import Button from "@/components/primary/Button"
import Google from "../../../../../public/svgs/icons_google.svg"
import Input from "@/components/primary/input"
import { sectionType } from "../rightContainer"
import Microsoft from "../../../../../public/svgs/microsoft_icon.svg"
import { FC, useState } from "react"

interface props {
    changeSection: (newSection: sectionType) => void
}

const Signup:FC<props> = ({changeSection}) => {
    const [passwordsMatch, setPassWordsMatch] = useState(true)
    const [formDetails, setFormDetails] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    })

     const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name
        const value = e.target.value
        setFormDetails(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = () => {
        if (formDetails.password !== formDetails.confirm_password) {
            setPassWordsMatch(false)
            return
        }

        console.log(formDetails)
    }

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
            <div className="flex flex-col mb-6">
                <Input 
                    value={formDetails.first_name}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">First name</label>} 
                    placeholder="Enter first name"
                    type="text"
                    name="first_name"
                />
                <Input 
                    value={formDetails.last_name}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Last name</label>} 
                    placeholder="Enter last name"
                    type="text"
                    name="last_name"
                />
                <Input 
                    value={formDetails.email}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Email</label>} 
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                />
                <Input 
                    value={formDetails.password}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Password</label>} 
                    placeholder="Enter password"
                    type="password"
                    name="password"
                />
                <Input 
                    value={formDetails.confirm_password}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Confirm Password</label>} 
                    placeholder="Enter password"
                    type="password"
                    name="confirm_password"
                />
                {!passwordsMatch && <p className="-my-2 mr-auto text-[0.8em] italic text-red-600">Passwords don't match</p>}
            </div>

            <Button onClick={handleSubmit}>
                Sign up
            </Button>

            <p className="mt-6 text-[0.85em] text-[#475467] font-normal">Already have an account<span  onClick={() => changeSection("signin")} className="cursor-pointer text-[#5272EA] font-medium"> Sign in</span></p>
        </>
    )
}

export default Signup