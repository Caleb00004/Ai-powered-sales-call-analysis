import GradientCircle from "../../secondary/GradientCircle"
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import { FC } from "react"
import { SalesrepType } from "../../../../api-feature/sales-rep/salesrep-type"
import { ApiType } from "../../../../api-feature/types"
import { useGetTopSalesrepQuery } from "../../../../api-feature/apiSlice"
import Loading from "../../secondary/LoadingSpinner"
import UserIcon from "../../../../public/svgs/usericon-rectangle.svg"

interface props {
    label?: string,
    className?: string,
    hideLabel?: boolean,
}

interface salesrepApiType extends ApiType {
    data: {data: SalesrepType[], success: boolean}
}

const TopPerformance:FC<props> = ({label, className, hideLabel}) => {
    const {data, status, error} = useGetTopSalesrepQuery<salesrepApiType>()

    return (
        <div className={`rounded-lg flex-1 p-3 ${className ? className : "bg-white flex-1"}`}>
            {!hideLabel && <div className="flex justify-between items-center">
                <h1 className="text-[16px] text-[#333333] font-[600]">{label ? label : "Top 3 Team performance"}</h1>
                <MoreIcon />
            </div>}

            {status === "pending" &&  <Loading customStyle={{display: "flex", marginTop: 14}} />}
            {(status === "fulfilled" && data?.data?.length > 0) && 
                <table className=" w-full ">
                    <tbody >
                        <tr>
                            <th className="text-[12px] text-[#333333] font-[600] py-4 text-left">Sales Rep</th>
                            <th className="text-[12px] text-[#333333] font-[600] text-center mdx2:text-left">Overall</th>
                            <th className="text-[12px] text-[#333333] font-[600] text-center">Top Skills</th>
                        </tr>
                    </tbody>
                    {data?.data?.map((item, i) => (
                        <tbody className="gap-4 ">
                            <tr>
                                <td className="flex items-center gap-2 mb-3 ">
                                    <p className="text-[12px] font-[600]">{i+1}</p> 
                                    <div className="h-12 w-12 rounded-lg"><UserIcon /></div>
                                    <p className="text-[12px] underline font-[600]">{item?.firstName} {item?.lastName}</p>
                                </td>
                                <td className="">
                                    <GradientCircle className="mx-auto">
                                        <p className="font-[700] text-white">{item?.grade}</p>
                                    </GradientCircle>
                                </td>
                                <td className="" >
                                    <GradientCircle className="mx-auto">
                                        <p className="font-[700] text-white text-[13px]">{item?.skillSymbol}</p>
                                    </GradientCircle>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            }
            {(status === "fulfilled" && data?.data?.length == 0) && 
                <div className="text-[14px] text-center text-[#333333] pt-10">
                    <p>No Sales Rep </p>
                    <p>Registered to company</p>
                </div>
            }
            {status === "rejected" && 
                <div className="text-[14px] text-center text-[#333333] pt-10">
                    <p className="text-red-600">Error Occured</p>
                    <p className="text-red-600">Reload Page</p>
                </div>
            }
        </div>
    )
}

export default TopPerformance