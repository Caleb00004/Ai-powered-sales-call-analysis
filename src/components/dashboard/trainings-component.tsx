import { globalState } from "../../../api-feature/apiSlice"
import Button from "../primary/Button"
import Search from "../secondary/Search"
import MoreIcon from "../../../public/svgs/more-icon.svg"
import FilterIcon from "../../../public/svgs/filter-icon.svg"
import { useRouter } from "next/router"
import { ModulesData } from "@/testData"
import { SetStateAction, useState } from "react"
import Dropdown from "../secondary/Dropdown"

const TrainingsComponent = () => {
    const routeTo = useRouter()
    const [selectedModule, setSelectedModule] = useState({})
    const [openDropdown, setOpenDropdown] = useState(null)

    const handleDropDown = (id: SetStateAction<null>) => {
        setOpenDropdown(openDropdown === id ? null : id); // Toggle the dropdown for clicked item
    };

    return(
        <div className="text-[#333333]">
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Training</h1>
                <div className="flex gap-3">
                    <div className="w-[160px]">
                        <Button onClick={() => routeTo.push("./trainings/userId")} className="py-[6px] bg-white border border-[#B3387F] text-[13px]"><span className="text-[#B3387F]">Personal Training</span></Button>
                    </div>
                    <div className="w-[160px]">
                        <Button onClick={() => routeTo.push("./trainings/progress")} className="py-[6px] text-[13px]">View Team Progress</Button>
                    </div>
                </div>
            </div>

            <div className="flex mt-7 gap-4">
                <div className="bg-white flex-[0.5] h-[75vh] overflow-auto px-3 py-3">
                    <div className="flex justify-between mb-4 items-center">
                        <p className="text-[18px] font-[500]">Modules</p>
                        <div className="flex items-center gap-2">
                            <FilterIcon className="h-4 w-4 text-[#C32782]" />
                            <p className="text-[#5B5B5B] text-[14px]">filter by</p>
                        </div>
                    </div>
                    <Search showIcon className="w-[100%]" value="" onChange={() => {}} />
                    <div className="flex flex-col mt-2 ">
                        {ModulesData.map(item => (
                            // @ts-ignore
                            <div onClick={() => (setSelectedModule(item), handleDropDown(item.id))} className={`relative flex ${item.id === selectedModule.id ? "bg-[#CBF3FF66]" : "bg-none"} text-[15px] font-[500] justify-between items-center cursor-pointer hover:bg-[#CBF3FF66] duration-[0.09s] py-3 px-2`}>
                                <p>{item.name}</p>
                                <div className=" h-4 flex items-center">
                                    <MoreIcon className="rotate-[90deg] scale-[0.7]" />
                                </div>
                                <Dropdown className="z-[3] ml-auto right-0" isOpen={openDropdown === item.id}>
                                    <p className="py-2 px-2 hover:bg-slate-100 cursor-pointer">
                                        Option 1
                                    </p>
                                    <p className="py-2 px-2 hover:bg-slate-100 cursor-pointer">
                                        Option 2
                                    </p>
                                </Dropdown>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-1 flex-[1] flex flex-col overflow-auto">
                    <div className="bg-[#F8F8FA] py-4 font-[800] text-[16px] flex justify-between px-20">
                        <p>Topic</p>
                        <p>Enrolled Team</p>
                    </div>
                    {/* @ts-ignore */}
                    {!selectedModule.id && 
                        <div className=" flex-1 flex items-center justify-center">
                            <p className="font-[500]">Select A Module</p>
                        </div>
                    }
                    {/*  @ts-ignore */}
                    {selectedModule.id && selectedModule?.topics?.map((item, i) =>(
                        <div className="flex py-4 text-[15px] font-[500] justify-between border-b">
                            <div className="flex gap-16 pl-3 flex-1">
                                <p>{i+1}</p>
                                <p>{item?.name}</p>
                            </div>
                            <div className="flex items-center justify-end gap-14 flex-1">
                                <p>{item?.enrolledTeam}</p>
                                <div className=" h-4 flex items-center mr-8">
                                    <MoreIcon className="rotate-[90deg] scale-[0.7]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TrainingsComponent