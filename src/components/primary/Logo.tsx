import { FC } from "react"
import Durekt from "../../../public/svgs/Logo.svg"

interface props {
    classname?: string
}

const Logo:FC<props> = ({classname}) => {
    return (
        <Durekt className={`mx-auto scale-[0.8] sm:scale-1 ${classname ? classname : "w-[216px] h-[43px]"}`} />
    )
}

export default Logo