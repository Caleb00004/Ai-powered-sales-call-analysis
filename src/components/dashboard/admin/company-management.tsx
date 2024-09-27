import Button from "@/components/primary/Button"
import Table from "@/components/secondary/Table"
import { useRouter } from "next/router"
import { companiesData } from "@/testData"
import { ChangeEvent, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { GridColDef } from "@mui/x-data-grid"
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"


const CompanyManagementComponent = () => {
    const router = useRouter()
    const rows = companiesData
    const [searchInput, setSearchInput] = useState("")
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);

    useLayoutEffect(() => {
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
                cellClassName: "center-cell-text",
                renderCell: (params) => {
                    const sub = params.row.subscription
                    const status = params.row.status
                    return (
                        <div className="flex flex-col">
                            <p className="leading-3 mt-5">{sub}</p>
                            <p className={`${status === "Active" ? "text-[#3C891A]" : "text-[#E08416]"} leading-6 text-[12px] `}>{status}</p>
                        </div>
                    )
                },
                headerClassName: " font-[700] ", renderHeader: () => (<p className="">Subscription</p>)
            },
            {
                field: 'actions',
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                headerClassName: " font-[700] ",
                renderCell: (params) => (
                    <TableActionsMenu  options={[
                        <MenuItem sx={{fontSize: 14}} onClick={() => {router.push("/dashboard/company-management/kkkdod")}}>View Team Members</MenuItem>,
                        <MenuItem sx={{fontSize: 14}} onClick={() => {}}>View Activity Logs</MenuItem>,
                        <MenuItem sx={{fontSize: 14}} onClick={() => {}}>View Subscription</MenuItem>,
                        <MenuItem sx={{fontSize: 14}} onClick={() => {}}>Suspend Company</MenuItem>,
                        <MenuItem sx={{color: "red", fontSize: 14}} onClick={() => {}}>Delete Company</MenuItem>
                    ]} data={params} />
                ),
                // width: 10,
                sortable: false,
                filterable: false,
                renderHeader: () => (<p>Action</p>)
            },
        ]
    },[isLargeScreen]) 

    return (
        <div>             
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">All Companies</h1>
                <div className="w-[140px]">
                    <Button onClick={() => {}} className="py-[6px] text-[13px]">Add New Company</Button>
                </div>
            </div>
            <br />
            <Table 
                admin
                checkbox
                title=" "
                csv
                disableRowSelectionOnClick
                // columnHeaderHeight={10}
                filteredRows={filteredRows}
                columns={columns}
                searchInput={searchInput}
                handleSearchChange={handleSearchChange}
            />
        </div>
    )
}

export default CompanyManagementComponent