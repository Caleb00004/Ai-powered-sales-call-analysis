import ProgressCircle from "@/components/secondary/ProgressCircle"
import MoreIcon from "../../../public/svgs/more-icon.svg"
import { FC } from "react"
import { useGetOverallRatingQuery } from "../../../api-feature/apiSlice"
import { ApiType } from "../../../api-feature/types"
import { ratingType } from "../../../api-feature/team-rating/teamrating-type"
import ActivityIndicator from "./ActivityIndicator"

interface props {
    className?: string
    label?: string
    hideLabel?: boolean
}

interface ratingApiType extends ApiType {
    data: {data: ratingType[], success: boolean}
}

const TeamDistribution:FC<props> = ({className, label, hideLabel}) => {
    const {data, status, error} = useGetOverallRatingQuery<ratingApiType>()

    console.log(data)
    console.log(status)
    console.log(error)

    return (
        <div className={` p-3 rounded-lg ${className ? className : "flex-[1.07] bg-white"}`}>
            {!hideLabel && 
                <div className="flex pb-8 justify-between text-[#333333] font-[600]">
                    <p>{label ? label : "Team Performance Distribution"}</p>
                    <MoreIcon />
                </div>
            }
            {status === "pending" && <ActivityIndicator color="black" />}
            {status === "rejected" && 
                <div className="text-red-600 text-[14px] text-center pt-6">
                    <p>Error Occured</p>
                    <p>Reload Page</p>
                </div>
            }
            {(status === "fulfilled" && data?.data) &&
                <div className="flex flex-col gap-8">
                    <ProgressCircle type="progress" value={80} size={110} label="Overall Rating" />
                    <ProgressCircle type="skill" value={"BT"} size={110} label="BT" />
                </div>
            }
            {(status === "fulfilled" && !data?.data) && 
                <div className="text-[14px] text-[#333333] text-center pt-6">
                    <p>Data Unavailable</p>
                </div> 
            }
            
        </div>
    )
}

export default TeamDistribution