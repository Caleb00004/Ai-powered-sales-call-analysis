import OutlineIcon from "../../../../public/svgs/outline.svg"
import CallIcon from "../../../../public/svgs/call-icon.svg"
import MoreIcon from "../../../../public/svgs/more-icon.svg"

const ManagerDashboard = () => {
    return (
        <div> 
            <div className="flex items-center gap-1">
                <h1 className="text-[1.5em] font-[600] text-[#333333]">Overview</h1>
                <OutlineIcon className=" scale-[0.85] translate-y-[1px]" />
            </div>
            <div className="flex justify-between gap-3">
                <div className="grid grid-cols-2 gap-4 w-full flex-[2]">
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold text-[#333333] py-1">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>
                                        <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold text-[#333333] py-1">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold text-[#333333] py-1">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold text-[#333333] py-1">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>

                </div>
                <div className="bg-white w-full flex-1 p-3"> 
                    <div className="flex justify-between items-center">
                        <h1 className="text-[16px] text-[#333333] font-[600]">Top 3 Team performance</h1>
                        <MoreIcon />
                    </div>

                    <table className=" w-full ">
                        <tbody >
                            <tr>
                                <th className="text-[12px] text-[#333333] font-[600] py-2 text-left">Sales Rep</th>
                                <th className="text-[12px] text-[#333333] font-[600]">Overall</th>
                                <th className="text-[12px] text-[#333333] font-[600]">Top Skills</th>
                            </tr>
                        </tbody>
                        <tbody className="gap-4">
                            <tr>
                                <td className="flex items-center gap-2 ">
                                   <p className="text-[12px]">1</p> 
                                   <div className="h-12 w-12 bg-slate-600 rounded-lg"></div>
                                   <p className="text-[12px] underline font-[600]">Elizabeth Parker</p>
                                </td>
                                <td className="">
                                    <div className="bg-slate-800 mx-auto rounded-full w-12 h-12"></div>
                                </td>
                                <td className="" >
                                    <div className=" bg-slate-800 mx-auto rounded-full h-12 w-12"></div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManagerDashboard