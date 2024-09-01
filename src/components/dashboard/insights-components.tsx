import Button from "../primary/Button"
import ArrorwIcon from "../../../public/svgs/arrow2-icon.svg"
import PaginationComponent from "../secondary/Pagination"
import { useState } from "react"
import { getProgressColor } from "../secondary/Pagination"

export const skillsData = [
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
]

const InsightsComponent = () => {
    const [selectedSalesRep, setSelectedSalesRep] = useState(null) 
    const [openDropDown, setOpenDropDown] = useState(false)

    const testSalesRepList = [
        {
            name: "john donald",
            id: 1
        },
        {
            name: "michael purr",
            id: 2
        },
        {
            name: "Giveon john",
            id: 3
        },
        {
            name: "victor akpan",
            id: 4
        },
        {
            name: "aquila akpan",
            id: 5
        },
                {
            name: "john donald",
            id: 6
        },
        {
            name: "michael purr",
            id: 7
        },
        {
            name: "Giveon john",
            id: 8
        },
        {
            name: "victor akpan",
            id: 9
        },
        {
            name: "aquila akpan",
            id: 10
        },
    ]

    const handleDropDown = () => {
        setOpenDropDown(prev => !prev)
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Rating</h1>
                <div className="flex items-center gap-2 relative">
                    <p className="font-[500] ">Sales Rep:</p>
                    <div onClick={handleDropDown} className="border cursor-pointer border-[#A4A4A4] font-[500] text-[14px] rounded-lg flex justify-between items-center gap-10 pl-2">
                        <p>{selectedSalesRep ? selectedSalesRep.name : "Select sales-rep"}</p>
                        <ArrorwIcon className="scale-[0.9]" />
                    </div>

                    <div className={`${openDropDown ? "h-auto max-h-[50vh] opacity-1" : "h-0 max-h-0 opacity-[0.4]"} bg-white text-[14px] transition-all text-[#333333] font-[500] absolute w-full overflow-auto top-0 mt-9`}>
                        {testSalesRepList.map(item => (
                            <p onClick={() => {handleDropDown(), setSelectedSalesRep(item)}} className="py-2 border-b pl-2 hover:bg-slate-100 cursor-pointer">{item.name}</p>
                        ))}
                    </div>  
                </div>

            </div>

            <div className="mt-5 flex gap-5 ">
                <div className="bg-white min-h-[80vh] px-3 py-6 border rounded-md flex-[1]">
                    <PaginationComponent 
                        items={skillsData}
                        itemsPerPage={10}
                        renderItems={(data) => (
                            data.map((item, index) => (
                                <div className="flex text-[#333333] font-[500] justify-between py-3 border-b" key={index}>
                                    <p className="flex flex-1 "><span className="mr-7">{index + 1}</span> {item.short} = {item.name} </p>
                                    <div className="flex gap-4 items-center flex-1">
                                        <div className="relative w-[100%] h-4 bg-gray-200 ">
                                            <div className={`h-4 ${getProgressColor(item.score)}`} style={{ width: `${item.score}%` }}>
                                            </div>
                                        </div>
                                        <p>{item.score}</p>
                                    </div>
                                </div>                                
                            ))
                        )}
                    />
                </div>  
                <div className="bg-white p-2 flex-[0.5]  border rounded-md">
                    <div className="bg-slate-500 h-full flex">
                        {selectedSalesRep && <div className="font-[700] rounded-md text-white w-full mb-3 pb-2 pt-3 text-center bg-slate-400 px-2 mx-3 mt-auto">
                            <p className="bg-gradient-to-r from-[#6FA9E2] to-[#B3387F] px-4 py-3 inline-block rounded-full">87</p>
                            <p className="mt-2 text-[18px]">Potential Rating</p>
                            <p className="bg-green-400 rounded-md py-3 mt-3 text-[25px]">{selectedSalesRep.name}</p>
                        </div>}
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default InsightsComponent