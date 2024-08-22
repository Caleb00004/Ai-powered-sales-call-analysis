import { FC, ReactNode } from "react"

interface props {
    children: ReactNode,
    onClick?: () => void,
    className?: string
}

const Button:FC<props> = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={`w-full bg-[#B3387F] font-medium py-2 rounded-lg text-white text-[0.9em] ${className}`}>
            {children}
        </button>
    )
}

export default Button