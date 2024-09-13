import DashboardLayout from "@/components/layouts/DashboardLayout"
import Search from "@/components/secondary/Search"
import Infoicon from "../../../public/svgs/info-icon.svg"
import { Checkbox } from "@mui/material"


const Notifications = () => {
    return (
        <DashboardLayout>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-[20px] font-[600] text-[#333333]">Notifications</h1>
                </div>

                <div className="mt-4 bg-white rounded-lg border px-4 py-5">
                    <div className="flex flex-col gap-3 mdx3:flex-row justify-between">
                        <Search className="bg-transparent w-full py-1 " containerClassName="round bg-[#F5F6FA]" placeholder="Seach Notification" value="" onChange={() => {}} showIcon />
                        <div className="flex gap-2 ml-auto items-center">
                            <div className="flex bg-[#FAFBFD] border rounded-md border-[#D4D4D4]">
                                <Infoicon className="px-2 h-[34px] w-[34px] " />
                                <Infoicon className="px-2 h-[34px] w-[34px] " />
                            </div>
                            <p className="px-3 py-1 border-[2px] border-[#667085] rounded-md text-[#667085] text-[11px]">Mark all as read</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        {[0,3,3,3,3,3,3,3,3].map(item => (
                            <div className="flex flex-col mdx5:flex-row gap-1 mdx5:gap-5 items-start mdx5:items-center text-[14px] text-[#202224] border-b border-b-[#E0E0E0] py-2">
                                <div className="flex items-center">
                                    <Checkbox />
                                    <div className="ml-3 h-[8px] w-[8px] rounded-full bg-blue-700" />
                                    <p className="font-[700] ml-4 ">Genevae Health</p>
                                </div>

                                <div className="flex flex-col sm:flex-row flex-1 w-full justify-between">
                                    <p className="font-[600]">Lorem, ipsum dolor sit amet consectetur adipisicing elitm</p>
                                    <p className="font-[600] ml-auto ">8:38 AM</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Notifications