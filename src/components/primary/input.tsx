import { FC, ReactNode } from "react"
import LockIcon from "../../../public/svgs/lock_icon.svg"

interface props {
    label: ReactNode, 
    placeholder: string, 
    type: "email" | "text" | "password" ,
    name: string
}

const Input:FC<props> = ({label, placeholder, type, name}) => {
    return (
        <div className="flex flex-col items-start mb-5">
            {label}
            <div className="relative w-full">
                {type === "password" && <LockIcon className="absolute bottom-[25%] right-4" />}
                <input className="w-full mt-1 p-2 border border-[#D0D5DD] rounded-md" type={type} placeholder={placeholder} name={name} />
            </div>
        </div>
    )
}

export default Input