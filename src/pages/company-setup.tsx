import Button from "@/components/primary/Button"
import Input from "@/components/primary/input"
import Logo from "@/components/primary/Logo"
import { useRouter } from "next/router"
import { useState } from "react"
import Picture from "../../public/svgs/john-doe.svg"
import { Checkbox } from "@mui/material"

const skills = [
    "BO =Becoming Obsessed",
    "BV =Building Value",
    "VP =Value Over Price",
    "MU1 =Mastering Urgency (Comprehensive)",
    "MU2 =Mastering Urgency (Communication)",
    "VP =Value Preservation",
    "MU3 =Mastering Urgency (Implementation)",
    "UIP =Influence of Passion",
    "C =Conviction",
    "FTC =Feeling the Conviction",
    "CC =Convinced Communication",
    "MOH =Mastering Objection Handling",
    "RTS =Rebuttals That Make Sense",
    "SM =Shifting Mindset",
    "POS =Preventing Objections Strategically",
    "CP =Cultivating Perseverance",
    "NUC =Navigating Unexpected Challenges",
    "CR =Cultivating Resilient Mindset",
    "NAS =Navigating Adversity in Sales",
    "MT =Mastering Transitions",
    "MPC =Mastering Purposeful Communication",
    "MG =Mastering Guiding Buyers",
    "NN =Navigating Negativity",
    "BT =Building Trust",
    "BR =Building Relationships",
]

const CompanySetup = () => {
    const [currentStep, setCurrentStep] = useState<1 | 2>(1)
    const [companyDetails, setCompanyDetails] = useState({
        companyName: "",
        topSkills: [""]
    })  
    const routeTo = useRouter()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name
        const value = e.target.value
        setCompanyDetails(prev => ({...prev, [name]: value}))
    }

    const handleSignin = () => {
        console.log(loginDetails)
    }

    const handleChangeStep = (step: 1 | 2) => {
        setCurrentStep(step)
    }

    const handleUpdateSkills = (skill) => {
        if (!(companyDetails.topSkills.includes(skill))) {
            setCompanyDetails(prev => ({...prev, topSkills: [...prev.topSkills, skill]}))
            return
        } else {
            setCompanyDetails(prev => ({...prev, topSkills: [...prev.topSkills.filter(item => item !== skill)]}))
            return
        }
    }

    console.log(companyDetails)

    return (
        <main className="bg-[#F8F8FA] h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center  h-[95vh] py-4 overflow-auto ">
                <h1 className="text-[1.5em] sm:text-[30px] font-[500] mt-3 mb-12 ">Select a Minimum of 5 top skills to Continue</h1>

                <div className="flex gap-10">
                    <div className="bg-white flex flex-col">
                        {skills.slice(0, 12).map(item => (
                            <div onClick={() => handleUpdateSkills(item)} className="flex items-center border-b py-3">
                                <Checkbox checked={companyDetails.topSkills.includes(item)} style={{ }} onChange={() => console.log(item)} />
                                    <p>{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white flex flex-col">
                        {skills.slice(12, 25).map(item => (
                            <div className="flex items-center border-b py-3">
                                <Checkbox onChange={() => console.log(item)} />
                                    <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
            {/* <div className="flex flex-col items-center w-[90%] sm:w-[35em] ">
                <Logo />
                <h1 className="text-[1.5em] sm:text-[30px] font-[500] mt-3 " >Let's Completely Get you Set Up</h1>     

                <div className="w-full" >
                    <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white rounded-md flex flex-col items-center px-[50px] py-8 mt-14">
                        <Picture />
                        <h1 className="text-[#333333] font-[600] text-[20px]">Hello, Evelyn Michael</h1>
                        <p className="text-[#71717A] text-[16px] pt-2">First tell us about your company</p>
                        <Input
                            className="mt-8"
                            value={companyDetails.companyName}
                            onChange={handleOnChange}
                            label={<label className="text-[#333333] font-medium text-[0.9em]">Company name</label>} 
                            placeholder="Enter company name"
                            type="text"
                            name="company_name"
                        />
                    </div>

                    <div className="flex gap-5 mt-4 justify-end items-center">
                        <p className="text-[#333333] font-[700]">Step 1 of 2</p>
                        <div className="w-[100px]">
                            <Button onClick={() => handleChangeStep(1)} className="py-[5px]">Next</Button>
                        </div>
                    </div>
                </div>
            </div> */}
        </main>
    )
}

export default CompanySetup