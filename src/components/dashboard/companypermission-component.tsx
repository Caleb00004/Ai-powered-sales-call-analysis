import Button from "../primary/Button"
import FilterIcon from "../../../public/svgs/filter-icon.svg"
import Search from "../secondary/Search"
import { useEffect, useMemo, useState } from "react"
import { Checkbox } from "@mui/material"
import { useRouter } from "next/router"
import { useGetCompaniesQuery } from "../../../api-feature/apiSlice"
import { ApiType } from "../../../api-feature/types"
import { companyType } from "../../../api-feature/manager-owner/company/company-type"
import Loading from "../secondary/LoadingSpinner"

interface companiesApi extends ApiType {
    data: {data: companyType[], success: boolean}
}

const CompanypermissionComponent = () => {
    const routeTo = useRouter()
    const {data, status, error} = useGetCompaniesQuery<companiesApi>()
    const [searchInput, setSearchInput] = useState("")
    const [selectedCompany, setSelectedCompany] = useState({} as companyType)
    const [permissions, setPermissions] = useState({
        owner: false,
        manager: false,
        salesRep: false
    });

    const companyData = data?.data

    const filteredSearch = useMemo(() => {
        return companyData?.filter(item =>
            item.companyName.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [companyData, searchInput]);


    useEffect(() => {
        if (selectedCompany?.roleNames) {
            setPermissions({
                owner: selectedCompany.roleNames.includes("Owner"),
                manager: selectedCompany.roleNames.includes("manager"),
                salesRep: selectedCompany.roleNames.includes("salesRep"),
            });
        }
    }, [selectedCompany.companyId]);

    const updatePermissions = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name as "manager" | "salesRep" | "owner"
        setPermissions(prev => ({...prev, [name]: !prev[name]}))
    }

    return (
        <div>
            <div className="flex flex-col gap-2 sm:flex-row justify-between items-start sm:items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Company and permission</h1>
                <div className="w-[180px] ml-auto">
                    <Button onClick={() => routeTo.push("/company-setup")} className="py-[6px] text-[13px]">Create New Company</Button>
                </div>
            </div>
            
            <div className="flex mt-7 pb-4 mdx5:pb-0 gap-8 flex-col-reverse mdx5:flex-row">
                <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white rounded-lg flex-[0.5] mdx5:h-[75vh] overflow-auto px-3 py-3">
                    <div className="flex justify-between mb-4 items-center">
                        <p className="text-[16px] font-[600] text-[#333333]">COMPANYS</p>
                        {/* <div className="flex items-center gap-2">
                            <FilterIcon className="h-4 w-4 text-[#C32782]" />
                            <p className="text-[#5B5B5B] text-[14px]">filter by</p>
                        </div> */}
                    </div>
                    <Search showIcon className="w-[100%] bg-white" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} />
                    <div className="flex flex-col mt-2 ">
                        {status === "pending" && <div className="h-[10em] flex items-center justify-center"><Loading /></div>}
                        {status === "rejected" && <div className="h-[4em] flex items-center justify-center"><p className="text-red-600 text-center italic">Error occured</p></div>}
                        {status === "fulfilled" && filteredSearch?.map(item => (
                            <div onClick={() => setSelectedCompany(item)} className={`flex ${item?.companyId === selectedCompany?.companyId ? "bg-[#CBF3FF66]" : "bg-none"} border-b border-b-[#D4D4D4] text-[15px] font-[500] justify-start gap-2 items-center cursor-pointer hover:bg-[#CBF3FF66] hover:scale-[1.03] duration-[0.09s] py-3 px-2`}>
                                <p className="text-[#C32782] bg-[#C327821A] px-2 rounded-full py-[7px] text-[17px] font-[700]">BS</p>
                                <p className="text-[#333333] font-[500] text-[16px]">{item?.companyName}</p>
                            </div>
                        ))}
                        {status === "fulfilled" && filteredSearch.length <= 0 && <p className="text-center text-[14px] mt-5 text-[#333333]">No Companies Available</p>}
                    </div>
                </div>
                <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white px-3 py-5 rounded-lg flex-[1] flex flex-col overflow-auto">
                    <h2 className="text-[#333333] text-[16px] mb-1 font-[600]">Permission</h2>
                    <p className="text-[#6D6D6D] text-[14px] font-normal">Select a permission to Switch account/ company</p>
                    
                    {!selectedCompany?.companyId && 
                        <div className=" flex-1 flex items-center justify-center py-3">
                            <p className="font-[500] text-[#333333] text-[16px] ">No Company Selected</p>
                        </div>
                    }
                    {selectedCompany?.companyId && 
                        <div className="flex flex-col mt-4 text-[#333333]">
                            <div className="flex gap-1 border-b border-b-[#D4D4D4] items-center py-2">
                                <Checkbox 
                                    onChange={updatePermissions}
                                    // disabled={!permissions.owner}
                                    disabled={true}
                                    name="owner"
                                    checked={permissions.owner}
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
                                    onChange={updatePermissions}
                                    name="manager"
                                    checked={permissions.manager}
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
                                    onChange={updatePermissions}
                                    name="salesRep"
                                    checked={permissions.salesRep}
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