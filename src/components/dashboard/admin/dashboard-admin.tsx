import OutlineIcon from "../../../../public/svgs/outline.svg"
import AnalyticsIcon from "../../../../public/svgs/analytics-icon.svg"
import Table from "@/components/secondary/Table"
import { companiesData } from "@/testData"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
import { GridColDef } from "@mui/x-data-grid"
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"

const AdminDashboard = () => {
    const rows = companiesData
    const [searchInput, setSearchInput] = useState("")
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);

    useEffect(() => {
        setIsLargeScreen(window.innerWidth > 940);
    })


    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [rows, searchInput]);

     const columns: GridColDef[] = useMemo(() => {
        return [
            {field: "name", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                headerName: "Name", headerClassName: "font-[700]", renderHeader: () => (<p>Name</p>)},
            {field: "email", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                headerClassName: "font-[700]", renderHeader: () => (<p>Email</p>)
            },
            {field: "dateAdded",
                flex: isLargeScreen ? 0.6 : undefined, 
                width: isLargeScreen ? undefined : 120,
                renderHeader: () => (<p>Date Added</p>), headerClassName: " font-[700] "},
            {field: "status", 
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                // filterOperators: [statusFilterOperator], 
                renderHeader: () => (<p>Status</p>), headerClassName: " font-[700] ",
                renderCell: (params) => {
                    const data = params.row.status
                    console.log(data)
                    return (
                        <p className={`${data === "Active" ? "text-[#3C891A]" : "text-[#E08416]"}`}>{data}</p>
                    )
                }
            },
            {field: "subscription", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                //  filterOperators: getGridNumericOperators() , 
                // cellClassName: "center-cell-text", 
                headerClassName: " font-[700] ", renderHeader: () => (<p>Subscription</p>)
            },
            {
                field: 'actions',
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                headerClassName: " font-[700] ",
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem onClick={() => {}}>Action 1</MenuItem>,
                        <MenuItem onClick={() => {}}>Action 2</MenuItem>,
                        <MenuItem onClick={() => {}}>Action 3</MenuItem>
                    ]} data={params} />
                ),
                // width: 10,
                sortable: false,
                filterable: false,
                renderHeader: () => (<p>Actions</p>)
            },
        ]
    },[isLargeScreen]) 

    return (
        <div>
            <div className="flex items-center gap-1">
                <h1 className="text-[1.5em] font-[600] text-[#333333]">Overview</h1>
                <OutlineIcon className=" scale-[0.85] translate-y-[1px]" />
            </div>

            <div className="flex gap-7 mt-5">
                <div className="bg-white p-4 rounded-2xl flex gap-5 flex-1">
                    <AnalyticsIcon className="flex-shrink-0 scale-[0.9]" />
                    <div>
                        <p className="text-[#A3AED0] text-[14px]">Active Users</p>
                        <p className="text-[#2B3674] text-[20px] font-[700]">12,000</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl flex gap-5 flex-1">
                    <div>
                        <p className="text-[#A3AED0] text-[14px]">Total Call Analyzed</p>
                        <p className="text-[#2B3674] text-[20px] font-[700]">25k+</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl flex gap-5 flex-1">
                    <div>
                        <p className="text-[#A3AED0] text-[14px]">Training Enrolled</p>
                        <p className="text-[#2B3674] text-[20px] font-[700]">250</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl flex gap-5 flex-1">
                    <AnalyticsIcon className="flex-shrink-0 scale-[0.9]" />
                    <div>
                        <p className="text-[#A3AED0] text-[14px]">Active Users</p>
                        <p className="text-[#2B3674] text-[20px] font-[700]">12,00</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-8">
                <div className="bg-slate-200 rounded-2xl p-12 flex-1" />
                <div className="bg-slate-200 rounded-2xl p-12 flex-1" />
            </div>

            <div className="mt-8">
                <Table 
                    admin
                    hideFooter
                    checkbox
                    title={<div className="w-full flex justify-between items-center"><h1 className="text-[#2B3674] font-[700]">Recent Company</h1> <p className="text-[12px] text-[#A3AED0]">See all</p></div>}
                    hideHelpers
                    // columnHeaderHeight={10}
                    filteredRows={filteredRows}
                    columns={columns}
                    searchInput={searchInput}
                    handleSearchChange={handleSearchChange}
                    className=" border-none"
        
                />
            </div>
        </div>
    )
}

export default AdminDashboard