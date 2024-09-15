import ProgressCircle from "@/components/secondary/ProgressCircle"
import MoreIcon from "../../../public/svgs/more-icon.svg"
import { FC } from "react"

interface props {
    className?: string
    label?: string
    hideLabel?: boolean
}

const TeamDistribution:FC<props> = ({className, label, hideLabel}) => {
    return (
        <div className={` p-3 rounded-lg ${className ? className : "flex-[1.07] bg-white"}`}>
            {!hideLabel && 
                <div className="flex pb-8 justify-between text-[#333333] font-[600]">
                    <p>{label ? label : "Team Performance Distribution"}</p>
                    <MoreIcon />
                </div>
            }
            
            <div className="flex flex-col gap-8">
                <ProgressCircle type="progress" value={80} size={110} label="Overall Rating" />
                <ProgressCircle type="skill" value={"BT"} size={110} label="BT" />
            </div>
        </div>
    )
}

export default TeamDistribution