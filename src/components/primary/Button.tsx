import { FC, ReactNode } from "react"

interface props {
    children: ReactNode,
    onClick?: () => void,
    className?: string,
    type?: "submit" | "reset" | "button" | undefined
    disabled?: boolean
}

const Button:FC<props> = ({children, onClick, className, type, disabled}) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={`w-full bg-[#B3387F] disabled:cursor-not-allowed font-medium py-2 enabled:active:scale-[0.97] transition-transform rounded-lg text-white text-[0.9em] ${className}`}>
            {children}
        </button>
    )
}

export default Button