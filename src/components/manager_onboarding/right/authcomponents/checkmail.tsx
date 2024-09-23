import Button from "@/components/primary/Button"
import Key from "../../../../../public/svgs/key_icon.svg"
import React, { useState, useRef, FC, ChangeEventHandler, ChangeEvent, useLayoutEffect, useEffect } from "react"
import { sectionType } from "../rightContainer"
import Logo from "@/components/primary/Logo"
import ArrowLeft from "../../../../../public/svgs/arrow-left.svg"
import { useGetOTPMutation, useVerifyOTPMutation} from "../../../../../api-feature/apiSlice"
import { useRouter } from "next/router"
import toast from "react-hot-toast"
interface props {
    changeSection: (newSection: sectionType) => void
}

const CheckMail:FC<props> = React.memo(({changeSection}) => {
    const router = useRouter()
    const [numberSequence, setNumberSequence] = useState<number[]>([0, 1, 2, 3,4,5])
    const [verifyOTP] = useVerifyOTPMutation()
    const [getOTP] = useGetOTPMutation()
    const [userInput, setUserInput] = useState<{ [key: string]: string }>({
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: "",
        value6: "",
    })
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const allFieldsFilled = Object.values(userInput).every(value => value !== "");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;

        // Only update the state if the current input is empty and the new value is a single digit
        if (userInput[`value${index + 1}`] === "" && value.length === 1) {
            setUserInput(prevState => ({
                ...prevState,
                [`value${index + 1}`]: value,
            }));

            // Shift focus to the next input field if the current one is filled
            if (index < numberSequence.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const { key } = e;

        if (key === 'Backspace') {
            if (userInput[`value${index + 1}`] !== "") {
                // Clear the current input field immediately
                setUserInput(prevState => ({
                    ...prevState,
                    [`value${index + 1}`]: "",
                }));
            } else if (index > 0) {
                // If the current field is already empty, move to the previous field and clear it
                inputRefs.current[index - 1]?.focus();
                setUserInput(prevState => ({
                    ...prevState,
                    [`value${index}`]: "",
                }));
            }
        }
    };

    const handleGetOTP = () => {
        try {
            getOTP({}).unwrap()
                .then(fulfilled => (
                    console.log(fulfilled)
                ))
                .catch(rejected => {
                    toast.error("Error generating code")
                    console.log(rejected)
                })
        } catch(error) {
            toast.error("Error generating code")
            console.log(error)
        }
    }

    const handleVerifyOTP = () => {
        let code = ""
        Object.values(userInput).map(value => {code = code + value})
        console.log(code)
        try {
            verifyOTP({code: code}).unwrap()
                .then(fulfilled => (
                    console.log(fulfilled),
                    toast.success("Code Verified"),
                    router.push("/company-setup")
                ))
                .catch(rejected => {
                    toast.error("Error occured")
                    console.log(rejected)
                })
        } catch(error) {
            toast.error("Error occured")
            console.log(error)
        }
    }
    
    useEffect(() => {
        console.log("COMPONENT RAN")
        handleGetOTP()
    },[])


    return (
        <>
            <Logo />
            <Key className="mx-auto mt-4" />
            <h1 className="text-[1.5em] sm:text-[2em]  mt-1 font-medium text-[#333333]">Check your email</h1>
            <p className="text-[0.9em] mb-8 text-[#5B5B5B] pt-2 font-normal">Enter the 6 digit code sent to *********@gmail.com</p>

            <div className="flex gap-4 justify-center mb-10">
                {numberSequence.map((item, i) => (
                    <input 
                        // @ts-ignore
                        ref={el => inputRefs.current[i] = el} // Attach refs to the input fields
                        autoFocus={i === 0}
                        value={userInput[`value${i + 1}`]} // Bind the input value to state
                        onChange={(e) => handleInputChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        type="number" 
                        className="border-b border-b-[#5272EA] font-medium text-[1.5em] sm:text-[2em] text-[#5272EA] h-[2em] w-[13%] sm:w-[2em] text-center"
                        max={10}
                    />
                ))}
            </div>
            
            <Button disabled={!allFieldsFilled} className="disabled:cursor-not-allowed" onClick={handleVerifyOTP}>
                Verify
            </Button>

            <p onClick={handleGetOTP} className="mt-8 text-[0.9em] text-[#475467]">Didn't receive the email? <span className="text-[#5272EA] font-medium">Click to resend</span></p>
            {/* <p onClick={() => changeSection("signin")} className="flex justify-center items-center gap-2 cursor-pointer text-[0.9em] text-[#475467] font-medium mt-6"><ArrowLeft /> Back to Sign in</p> */}
        </>
    )
})

export default CheckMail
