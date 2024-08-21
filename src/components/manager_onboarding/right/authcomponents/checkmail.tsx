import Button from "@/components/primary/Button"
import Key from "../../../../../public/key_icon.svg"
import Input from "@/components/primary/input"
import { useState, useRef, FC, ChangeEventHandler, ChangeEvent } from "react"
import { sectionType } from "../rightContainer"
import Logo from "@/components/primary/Logo"
import ArrowLeft from "../../../../../public/arrow-left.svg"

interface props {
    changeSection: (newSection: sectionType) => void
}

const CheckMail:FC<props> = ({changeSection}) => {
    const [numberSequence, setNumberSequence] = useState<number[]>([0, 1, 2, 3,4,5])
    const [userInput, setUserInput] = useState({
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: "",
        value6: "",
    })
    const inputRefs = useRef([]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        
        // Update the user input state
        setUserInput(prevState => ({
            ...prevState,
            [`value${index + 1}`]: value,
        }));

        // Shift focus to the next input field if the current one is filled
        if (value && index < numberSequence.length - 1) {
            // @ts-ignore
            inputRefs.current[index + 1].focus();
        }
    };


    return (
        <>
            <Logo />
            <Key className="mx-auto mt-4" />
            <h1 className="text-[1.5em] sm:text-[2em]  mt-1 font-medium text-[#333333]">Check your email</h1>
            <p className="text-[0.9em] mb-8 text-[#5B5B5B] pt-2 font-normal">Enter the 6 digit code sent to Paul********@email.com</p>

            <div className="flex gap-4 justify-center mb-10">
                {numberSequence.map((item, i) => (
                    <input 
                        // @ts-ignore
                        ref={el => inputRefs.current[i] = el} // Attach refs to the input fields
                        autoFocus={(i == 0) && true}
                        // @ts-ignore
                        disabled={userInput[`value${i + 1}`]} 
                        onChange={(e) => handleInputChange(e, i)}
                        type="number" 
                        className=" border-b border-b-[#5272EA] font-medium text-[1.5em] sm:text-[2em] text-[#5272EA] h-[2em] w-[13%] sm:w-[2em] text-center " max={10}
                    />
                ))}
            </div>
            
            <Button>
                Verify
            </Button>

            <p className="mt-8 text-[0.9em] text-[#475467]">Didn't receive the email? <span className="text-[#5272EA] font-medium">Click to resend</span></p>
            <p onClick={() => changeSection("signin")} className="flex justify-center items-center gap-2 cursor-pointer text-[0.9em] text-[#475467] font-medium mt-6"><ArrowLeft /> Back to Sign in</p>
        </>
    )
}

export default CheckMail
