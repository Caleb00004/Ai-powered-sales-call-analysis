import { FC, ReactNode } from "react"

interface props {
    children: ReactNode,
    onClick?: () => void,
    className?: string,
    type?: "submit" | "reset" | "button" | undefined
    disabled?: boolean
    color?: string;
}

const Button:FC<props> = ({children, onClick, className, type, color, disabled}) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={`w-full disabled:cursor-not-allowed font-medium py-2 enabled:active:scale-[0.97] transition-transform rounded-lg text-white text-[0.9em] ${color ? color : "bg-[#B3387F]"} ${className} `}>
            {children}
        </button>
    )
}

export default Button