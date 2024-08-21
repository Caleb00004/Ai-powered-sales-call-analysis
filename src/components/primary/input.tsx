import { FC, ReactNode } from "react"

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
            <input className="w-full mt-1 p-2 border border-[#D0D5DD] rounded-md" type={type} placeholder={placeholder} name={name} />
        </div>
    )
}

export default Input