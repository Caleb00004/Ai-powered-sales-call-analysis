import DashboardLayout from "@/components/layouts/DashboardLayout"
import ArrorwIcon from "../../../../public/svgs/arrow2-icon.svg"
import Link from "next/link"
import Button from "@/components/primary/Button"
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { useRouter } from "next/router"
import Table from "@/components/secondary/Table"
import { GridColDef } from "@mui/x-data-grid"
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"
import { dealsData } from "@/testData"

const PersonalTraining = () => {
    const carouselContainer = useRef<HTMLDivElement | null>(null)
    const tran = [0, 1, 2, 0, 1, 2, 0, 1, 2, ]
    const [searchInput, setSearchInput] = useState("")
    const rows = dealsData
    const routeTo = useRouter()

    useEffect(() => {
        gsap.timeline()
            .to(".trainings-txt", {color: "#5B5B5B", fontSize: "14px", fontWeight: "400", textDecoration: "underline"})
            .to(".topic-txt", {x: 0, opacity: 1})
    },[])

    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);

    const scrollRight = () => {
        if (carouselContainer.current) {
            const carouselItemWidth = carouselContainer.current.clientWidth - 18;
            carouselContainer.current.scrollLeft += carouselItemWidth;
        }
    }

    const scrollLeft = () => {
        if (carouselContainer.current) {
            const carouselItemWidth = carouselContainer.current.clientWidth - 18;
            carouselContainer.current.scrollLeft -= carouselItemWidth;
        }
    }

     const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [rows, searchInput]);

    
    const columns: GridColDef[] = useMemo(() => {
        return [
            {field: "name", flex: 1, headerName: "Name", headerClassName: "bg-[#C32782]"},
            {field: "client", flex: 1, renderHeader: () => ( 
                <div className="flex items-center mdx2:flex-row flex-col">
                    <p>Client/</p><p>Company</p>
                </div>
                ),
                headerClassName: "bg-[#C32782]"
            },
            {field: "stage", flex: 0.6, headerName: "Stage", headerClassName: "bg-[#C32782]"},
            {field: "status", flex: 0.5, headerName: "Status", headerClassName: "bg-[#C32782]"},
            {field: "assignedSalesRep", flex: 1, renderHeader: () =>  (<div className="flex gap-1 flex-col "><p>Assigned <br />Sales Rep</p></div>), headerClassName: " bg-[#C32782]"},
            {
                field: 'actions',
                flex: 0.5,
                headerClassName: "bg-[#C32782]",
                headerName: 'Actions',
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem onClick={() => {}}>Action</MenuItem>
                    ]} data={params} />
                ),
                width: 10,
                sortable: false,
                filterable: false,
            },
        ]
    },[])

    return (
        <DashboardLayout>
            <div className="flex text-[#333333] flex-col">
                <div className="flex  flex-col">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-0 text-[15px]">
                            <Link className="trainings-txt text-[20px] font-[600] " href={"/dashboard/trainings"}><p >Training</p></Link>
                            <div className="topic-txt flex items-center -translate-x-16 opacity-0">
                                <ArrorwIcon className="scale-[0.8]" />
                                <p className=" font-[500] ">Personal Training</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 ">
                    <div className="flex justify-between">
                        <h1 className="text-[20px] font-[600] text-[#333333]">Training in progress (10)</h1>
                        <div className="flex gap-2">
                            <div onClick={scrollLeft} className="bg-white hover:bg-slate-200 cursor-pointer scale-[0.9] rounded-md active:scale-[0.8] transition-all">
                                <ArrorwIcon className=" rotate-[180deg]" />
                            </div>
                            <div onClick={scrollRight} className="bg-[#B3387F] hover:bg-[#712451] cursor-pointer scale-[0.9] rounded-md active:scale-[0.8] transition-all">
                                <ArrorwIcon  className="text-white"/>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white scroll-smooth border px-5 py-3 mt-3 flex overflow-hidden gap-4"  ref={carouselContainer} >
                        {tran.map(item => (
                            <div onClick={() => routeTo.push("/dashboard/trainings/topic")} className="w-[32.3%] flex-shrink-0">
                                <div className="bg-slate-300 h-[10em] rounded-xl">
                                </div>
                                <p className="bg-[#C3278233] text-[12px] rounded-2xl mt-2 font-[600] inline-block pr-12 pl-1 py-1 text-[#C32782]">Module Name</p>
                                <p className="font-[600] leading-5 py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi dignissimos iste natus placeat ad incidunt.</p>
                                <p className="text-[#0E0E9E] font-[500]">In Progress</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    <Table 
                        title="Enrolled Training"
                        filteredRows={filteredRows}
                        columns={columns}
                        searchInput={searchInput}
                        handleSearchChange={handleSearchChange}
                    />
                </div>

            </div>
        </DashboardLayout>
    )
}

export default PersonalTraining