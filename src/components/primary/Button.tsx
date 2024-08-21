import { FC, ReactNode } from "react"

interface props {
    children: ReactNode,
    onClick?: () => void
}

const Button:FC<props> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="w-full bg-[#B3387F] font-medium py-2 rounded-lg text-white text-[0.9em]">
            {children}
        </button>
    )
}

export default Button