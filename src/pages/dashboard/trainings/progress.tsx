import DashboardLayout from "@/components/layouts/DashboardLayout"
import Link from "next/link"
import Button from "@/components/primary/Button"
import ArrorwIcon from "../../../../public/svgs/arrow2-icon.svg"
import FilterIcon from "../../../../public/svgs/filter-icon.svg"
import Search from "@/components/secondary/Search"
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import { useEffect, useState } from "react"
import gsap from "gsap"
import { TeamProgresData } from "@/testData"

const TrainingProgress = () => {
    const teamMembers = [0, 2, 3, 0, 2,  ]
    const [selectedMember, setSelectedMember] = useState({})

    useEffect(() => {
        gsap.timeline()
            .to(".trainings-txt", {color: "#5B5B5B", fontSize: "14px", fontWeight: "400", textDecoration: "underline"})
            .to(".topic-txt", {x: 0, opacity: 1})
    },[])

    return (
        <DashboardLayout>
            <div className="flex text-[#333333] flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-0 text-[15px]">
                        <Link className="trainings-txt text-[20px] font-[600] text-[#333333] " href={"/dashboard/trainings"}><p >Training</p></Link>
                        {/* <Link className=" cursor-pointer underline text-[#5B5B5B]" href={"/dashboard/trainings"}><p >Trainings</p></Link> */}
                        <div className="topic-txt flex items-center -translate-x-16 opacity-0">
                            <ArrorwIcon className="scale-[0.8]" />
                            <p className=" text-[#333333] font-[500] ">Team Progress</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="font-[500] ">Module:</p>
                        <div className="border border-[#A4A4A4] font-[500] text-[14px] rounded-lg flex justify-between items-center gap-10 pl-2">
                            <p>Sample Module</p>
                            <ArrorwIcon className="scale-[0.9]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-7 gap-4">
                <div className="bg-white flex-[0.5] h-[75vh] overflow-auto px-3 py-3 border">
                    <div className="flex justify-between mb-4 items-center">
                        <p className="text-[18px]">Modules</p>
                        <div className="flex items-center gap-2">
                            <FilterIcon className="h-4 w-4 text-[#C32782]" />
                            <p className="text-[#5B5B5B] text-[14px]">filter by</p>
                        </div>
                    </div>
                    <Search className="w-[100%]" value="" onChange={() => {}} />
                    <div className="flex flex-col mt-2 ">
                        {TeamProgresData.map(item => (
                            <div onClick={() => setSelectedMember(item)} className="flex text-[15px] text-[#333333] font-[500] justify-between items-center cursor-pointer hover:bg-[#CBF3FF66] hover:scale-[1.03] duration-[0.09s] py-3 px-2">
                                <p>{item.name}</p>
                                <div className=" flex items-center">
                                   <p>0/10</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white px-3 flex flex-col py-1 flex-[1] overflow-auto">
                    <div className="bg-white border-b py-4 font-[700] text-[16px] flex justify-between px-0">
                        <p className="flex-1">Topics</p>
                        <div className="flex justify-between flex-1">
                            <p>Progress</p>
                            <p className="mr-4">Assigned Date</p>
                        </div>

                    </div>
                    {/* @ts-ignore */}
                    {!selectedMember.id && 
                        <div className=" flex-1 flex items-center justify-center">
                            <p className="font-[500]">Select A Team Member</p>
                        </div>
                    }
                    {/* @ts-ignore */}
                    {selectedMember.id && selectedMember?.topics.map(item => (
                        <div className="flex py-4 text-[15px] font-[500] justify-between border-b">
                            <div className="flex pl-3 flex-1">
                                <p>{item.name}</p>
                            </div>
                            <div className="flex items-center justify-between flex-1">
                                <p className="bg-[#D9D9D94D] pl-2 pr-5 py-[3px] rounded-xl">{item.progress}</p>
                                <p className="mr-8">11/05/2024</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </DashboardLayout>
    )
}

export default TrainingProgress