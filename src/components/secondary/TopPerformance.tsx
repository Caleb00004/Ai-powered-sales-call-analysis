import GradientCircle from "./GradientCircle"
import MoreIcon from "../../../public/svgs/more-icon.svg"
import { FC } from "react"

interface props {
    label?: string,
    className?: string,
    hideLabel?: boolean
}

const TopPerformance:FC<props> = ({label, className, hideLabel}) => {
    return (
        <div className={`rounded-lg flex-1 p-3 ${className ? className : "bg-white flex-1"}`}>
            {!hideLabel && <div className="flex justify-between items-center">
                <h1 className="text-[16px] text-[#333333] font-[600]">{label ? label : "Top 3 Team performance"}</h1>
                <MoreIcon />
            </div>}

            <table className=" w-full ">
                <tbody >
                    <tr>
                        <th className="text-[12px] text-[#333333] font-[600] py-4 text-left">Sales Rep</th>
                        <th className="text-[12px] text-[#333333] font-[600] text-center mdx2:text-left">Overall</th>
                        <th className="text-[12px] text-[#333333] font-[600] text-center">Top Skills</th>
                    </tr>
                </tbody>
                {[0,2,3].map(item => (
                    <tbody className="gap-4 ">
                        <tr>
                            <td className="flex items-center gap-2 mb-3 ">
                                <p className="text-[12px] font-[600]">1</p> 
                                <div className="h-12 w-12 bg-slate-600 rounded-lg"></div>
                                <p className="text-[12px] underline font-[600]">Elizabeth Parker</p>
                            </td>
                            <td className="">
                                <GradientCircle className="mx-auto">
                                    <p className="font-[700] text-white">60</p>
                                </GradientCircle>
                            </td>
                            <td className="" >
                                <GradientCircle className="mx-auto">
                                    <p className="font-[700] text-white">GG</p>
                                </GradientCircle>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default TopPerformance