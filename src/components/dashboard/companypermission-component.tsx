import Button from "../primary/Button"
import FilterIcon from "../../../public/svgs/filter-icon.svg"
import Search from "../secondary/Search"
import { ModulesData } from "@/testData"
import MoreIcon from "../../../public/svgs/more-icon.svg"
import { useState } from "react"
import { Checkbox } from "@mui/material"
import { useRouter } from "next/router"

const companyData = [
    {
        name: "Bles Software",
        permission: "manager"
    },
    {
        name: "Tesla",
        permission: "sales-rep"
    }
]

const CompanypermissionComponent = () => {
    const routeTo = useRouter()
    const [selectedCompany, setSelectedCompany] = useState({})


    console.log(selectedCompany)
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Company and permission</h1>
                <div className="w-[180px]">
                    <Button onClick={() => routeTo.push("/company-setup")} className="py-[6px] text-[13px]">Create New Company</Button>
                </div>
            </div>
            
            <div className="flex mt-7 gap-8">
                <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white rounded-lg flex-[0.5] h-[75vh] overflow-auto px-3 py-3">
                    <div className="flex justify-between mb-4 items-center">
                        <p className="text-[18px] font-[600] text-[#333333]">COMPANYS</p>
                        <div className="flex items-center gap-2">
                            <FilterIcon className="h-4 w-4 text-[#C32782]" />
                            <p className="text-[#5B5B5B] text-[14px]">filter by</p>
                        </div>
                    </div>
                    <Search showIcon className="w-[100%]" value="" onChange={() => {}} />
                    <div className="flex flex-col mt-2 ">
                        {companyData.map(item => (
                            <div onClick={() => setSelectedCompany(item)} className={`flex ${item.id !== selectedCompany.id ? "bg-[#CBF3FF66]" : "bg-none"} border-b border-b-[#D4D4D4] text-[15px] font-[500] justify-start gap-2 items-center cursor-pointer hover:bg-[#CBF3FF66] hover:scale-[1.03] duration-[0.09s] py-3 px-2`}>
                                <p className="text-[#C32782] bg-[#C327821A] px-2 rounded-full py-[7px] text-[17px] font-[700]">BS</p>
                                <p className="text-[#333333] font-[500] text-[16px]">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white px-3 py-5 rounded-lg flex-[1] flex flex-col overflow-auto">
                    <h2 className="text-[#333333] text-[18px] mb-1 font-[600]">Permission</h2>
                    <p className="text-[#6D6D6D] text-[14px] font-normal">Select a permission to Switch account/ company</p>
                    
                    {!selectedCompany.name && 
                        <div className=" flex-1 flex items-center justify-center">
                            <p className="font-[500] text-[#333333] text-[20px] ">No Company Selected</p>
                        </div>
                    }
                    {selectedCompany.name && 
                        <div className="flex flex-col mt-4 text-[#333333]">
                            <div className="flex gap-1 border-b border-b-[#D4D4D4] items-center py-2">
                                <Checkbox 
                                    defaultChecked={selectedCompany.permission === "owner"}
                                    sx={{
                                        '&.Mui-checked': {
                                            color: "#B3387F"
                                        }
                                    }} 
                                />
                                <p>Owner</p>
                            </div>
                            <div className="flex gap-1 border-b border-b-[#D4D4D4] items-center py-2">
                                <Checkbox 
                                    defaultChecked={selectedCompany.permission === "manager"}
                                    sx={{
                                        '&.Mui-checked': {
                                            color: "#B3387F"
                                        }
                                    }} 
                                />
                                <p>Manager</p>
                            </div>
                            <div className="flex gap-1 border-b border-b-[#D4D4D4] items-center py-2">
                                <Checkbox 
                                    defaultChecked={selectedCompany.permission === "sales-rep"}
                                    sx={{
                                        '&.Mui-checked': {
                                            color: "#B3387F"
                                        }
                                    }} 
                                />
                                <p>Sales Rep</p>
                            </div>
                        </div> 
                    }
                   
                </div>

            </div>
        </div>
    )
}

export default CompanypermissionComponent