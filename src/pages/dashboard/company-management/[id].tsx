import DashboardLayout from "@/components/layouts/DashboardLayout"
import { useRouter } from "next/router"
import ArrorwIcon from "../../../../public/svgs/arrow2-icon.svg"
import Link from "next/link"
import { ChangeEvent, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react"
import gsap from "gsap"
import Table from "@/components/secondary/Table"
import { companyTeamMember } from "@/testData"
import { GridColDef } from "@mui/x-data-grid"
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"

const CompanyDetails = () => {
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const router = useRouter()
    const rows = companyTeamMember
    const [searchInput, setSearchInput] = useState("")
    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);

    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [rows, searchInput]);

    useEffect(() => {
        gsap.timeline()
            .to(".trainings-txt", {color: "#5B5B5B", fontSize: "13.2px", fontWeight: "400", textDecoration: "underline"})
            .to(".topic-txt", {x: 0, opacity: 1})
    },[])

    useLayoutEffect(() => {
        setIsLargeScreen(window.innerWidth > 940);
    },[])

    const columns: GridColDef[] = useMemo(() => {
        return [
            {field: "name", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                headerName: "Name", headerClassName: "font-[700]", renderHeader: () => (<p>Name/Email</p>),
                renderCell: (params) => {
                    const {name, email} = params.row
                    //.log(params)
                    return (
                        <div className="flex flex-col">
                            <p className="leading-3 mt-5">{name}</p>
                            <p className="leading-6 text-[12px]">{email}</p>
                        </div>
                    )
                },
            },
            {field: "role", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                headerClassName: "font-[700]", renderHeader: () => (<p>Role</p>)
            },
            {field: "permission",
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 150,
                renderHeader: () => (<p>Permission</p>), headerClassName: " font-[700] "},
            {field: "status", 
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                // filterOperators: [statusFilterOperator], 
                renderHeader: () => (<p>Status</p>), headerClassName: " font-[700] ",
                renderCell: (params) => {
                    const data = params.row.status
                    return (
                        <div className=""><p className={`px-4 h-7 mt-5 flex justify-center items-center rounded-lg ${data === "Active" ? "text-[#3C891A] bg-[#3C891A1A]" : "text-[#E08416] bg-[#E189331A]"} `}>{data}</p></div>
                    )
                }
            },
            {
                field: 'actions',
                flex: isLargeScreen ? 0.3 : undefined, 
                width: isLargeScreen ? undefined : 100,
                headerClassName: " font-[700] ",
                renderCell: (params) => (
                    <TableActionsMenu  options={[
                        <MenuItem sx={{fontSize: 14}} onClick={() => {}}>Action 1</MenuItem>,
                        <MenuItem sx={{fontSize: 14}} onClick={() => {}}>Action 2</MenuItem>,
                        <MenuItem sx={{fontSize: 14}} onClick={() => {}}>Action 3</MenuItem>,
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
        <DashboardLayout>
            <div className="flex items-center gap-0 text-[15px]">
                <Link className="trainings-txt text-[20px] font-[600] text-[#333333] " href={"/dashboard/company-management"}><p >All Companies</p></Link>
                {/* <Link className=" cursor-pointer underline text-[#5B5B5B]" href={"/dashboard/trainings"}><p >Trainings</p></Link> */}
                <div className="topic-txt flex items-center -translate-x-16 opacity-0">
                    <ArrorwIcon className="scale-[0.8]" />
                    <p className=" text-[#333333] font-[500] ">company name</p>
                </div>
            </div>

            <div className="mt-8">
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
        </DashboardLayout>
    )
}

export default CompanyDetails