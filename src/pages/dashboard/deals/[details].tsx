import DashboardLayout from "@/components/layouts/DashboardLayout"
import DealsComponent from "@/components/dashboard/deals-component"
import Button from "@/components/primary/Button"
import { ChangeEvent, useCallback, useMemo, useState } from "react"
import Table from "@/components/secondary/Table"
import { dealsData, dealsDataType } from "@/testData"
import { GridColDef, GridEventListener } from "@mui/x-data-grid"
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import MenuItem from '@mui/material/MenuItem';
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { useRouter } from "next/router"
import Link from "next/link"
import AttachmentIcon from "../../../../public/svgs/attach-icon.svg"
import SendIcon from "../../../../public/svgs/send-icon.svg"
import ArrorwIcon from "../../../../public/svgs/arrow2-icon.svg"

type sectionsType = "overview" | "meetings" | "notes"

const Deals = () => {
    const [section, setSection] = useState<sectionsType>("overview")
    const [searchInput, setSearchInput] = useState("")
    const rows = dealsData

    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [rows, searchInput]);

    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);

    const handleChangeSection = (newSection: sectionsType) => {
        setSection(newSection)
    }

    const columns: GridColDef[] = useMemo(() => {
        return [
            {
                field: 'actions',
                headerClassName: "hidden bg-[#C32782]",
                headerName: '',
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem >Action 1</MenuItem>,
                        <MenuItem >Action 2</MenuItem>
                    ]} data={params} />
                ),
                width: 10,
                sortable: false,
                filterable: false,
            },
            {
                field: "name",
                flex: 1,
                headerName: "Name",
                headerClassName: "bg-[#C32782]"
            },
            {
                field: "client",
                flex: 1,
                renderHeader: () => (
                    <div className="flex items-center mdx2:flex-row flex-col">
                        <p>Client/</p><p>Company</p>
                    </div>
                ),
                headerClassName: "bg-[#C32782]"
            },
            {
                field: "stage",
                flex: 1,
                headerName: "Stage",
                headerClassName: "bg-[#C32782]"
            },
            {
                field: "status",
                flex: 1,
                headerName: "Status",
                headerClassName: "bg-[#C32782]"
            },
            {
                field: "assignedSalesRep",
                flex: 1,
                renderHeader: () => (
                    <div className="flex gap-0 mdx2:gap-1 mdx2:flex-row flex-col">
                        <p>Assigned</p><p>Sales Rep</p>
                    </div>
                ),
                headerClassName: "bg-[#C32782]"
            },
        ];
    }, []);

    const notesData = [0, 1, 2, 4, 5, 3, ,3 , 3, 3, 3]

    return (
        <DashboardLayout>
            <div className="flex flex-col">
                
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-0 text-[15px]">
                        <Link className=" cursor-pointer underline text-[#5B5B5B]" href={"/dashboard/deals"}><p >Deals</p></Link>
                        <ArrorwIcon className="scale-[0.8]" />
                        <p className=" text-[#333333] font-[500] ">Deal details</p>
                    </div>
                    <div style={{width: "10em"}}>
                        <Button className=" py-[6px] text-[13px]">Schedule Meeting</Button>
                    </div>
                </div>

                <div className="bg-white flex w-[20em] mt-4 z-[2] translate-y-[1px] pb-0 text-[14px] border-t border-r border-l ">
                    <p onClick={() => handleChangeSection("overview")} className={` ${section === "overview" ? "bg-gradient-to-r font-[700] from-[#6FA9E2] to-[#B3387F] text-white" : "bg-none"} flex-1 py-2 text-[#333333] text-center cursor-pointer`}>Overview</p>
                    <p onClick={() => handleChangeSection("meetings")} className={` ${section === "meetings" ? "bg-gradient-to-r font-[700] from-[#6FA9E2] to-[#B3387F] text-white" : "bg-none"} flex-1 py-2 text-[#333333] text-center cursor-pointer`}>Meetings</p>
                    <p onClick={() => handleChangeSection("notes")} className={` ${section === "notes" ? "bg-gradient-to-r font-[700] from-[#6FA9E2] to-[#B3387F] text-white" : "bg-none"} flex-1 py-2 text-[#333333] text-center cursor-pointer`}>Notes</p>
                </div>
                {section === "overview" && 
                    <>
                        <div className="flex justify-between gap-4">
                            <div className="flex-[1.3] bg-white border p-3 ">
                                <div className="bg-rose-500 h-[100px]"></div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <div className="flex items-center text-[#333333] justify-between">
                                        <p className="font-[600] text-[16px]">Project Name:</p>
                                        <p className="text-[13px] font-[500]">Project A</p>
                                    </div>
                                    <div className="flex items-center text-[#333333] justify-between">
                                        <p className="font-[600] text-[16px]">Client/Company:</p>
                                        <p className="text-[13px] font-[500]">Amazon</p>
                                    </div>
                                    <div className="flex items-center text-[#333333] justify-between">
                                        <p className="font-[600] text-[16px]">Stage:</p>
                                        <p className="text-[13px] font-[500]">Prospecting</p>
                                    </div>
                                    <div className="flex items-center text-[#333333] justify-between">
                                        <p className="font-[600] text-[16px]">Status:</p>
                                        <p className="text-[13px] font-[500]">Open</p>
                                    </div>
                                    <div className="flex items-center text-[#333333] justify-between">
                                        <p className="font-[600] text-[16px]">Status:</p>
                                        <p className="text-[13px] font-[500]">Open</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white border p-3">
                                    <h1 className='text-[#333333] text-[20px] font-[600] pb-4'>Dureket Report</h1>
                                    <p className='text-[#4A4A4A] text-[13.5px] font-[400]'>Lorem ipsum dolor sit amet consectetur. Arcu ut aliquam neque orci sapien nisl. Ligula rhoncus at nisl scelerisque eget enim ut.
                                        At vulputate metus pulvinar leo lorem nec morbi dolor. Tempus fusce vel duis dictum nibh a sed adipiscing in. In egestas aliquam 
                                        id egestas morbi cras vivamus. Ac sed vehicula sem sed dui massa. Netus tincidunt odio ultricies viverra sed porttitor vulputate dui. 
                                        egestas morbi cras vivamus. Ac sed vehicula sem sed dui. In egestas aliquam id egestas morbi cras vivamusmassa.egestas morbi cras</p>
                            </div>
                        </div>
                        <div className="mt-8 border rounded-md overflow-hidden">
                            <Table 
                                filteredRows={filteredRows}
                                columns={columns}
                                searchInput={searchInput}
                                handleSearchChange={handleSearchChange}
                                csv
                                title="Specified Sales Rep Performance"
                            />
                        </div>                    
                    </>
                }
                {section === "meetings" && 
                    <>
                        <div className="mt-0 border overflow-hidden relative">
                            <Table 
                                filteredRows={filteredRows}
                                columns={columns}
                                searchInput={searchInput}
                                handleSearchChange={handleSearchChange}
                            />
                        </div>    
                    </>
                }
                {section === "notes" && 
                    <>
                        <div className="bg-white flex flex-col border pt-6 h-[75vh]">
                            <div className="flex flex-col gap-4 p-3 overflow-auto">
                                
                                {notesData.map(item => (
                                    <div className="flex w-full rounded-lg flex-shrink-0 bg-[#6FA9E21A] px-2 pt-2 pb-4 gap-3 relative">
                                        <div onClick={() => console.log("CJJ")}  className=" absolute right-4 rotate-[90deg] scale-[0.8] py-2 cursor-pointer">
                                            <MoreIcon  />
                                        </div>
                                        <div className="bg-slate-600 flex-shrink-0 h-8 w-8 rounded-full  "></div>
                                        <div>
                                            <div className="flex gap-8 mb-2 items-center ">
                                                <p className=" text-[#333333] text-[20px] font-[500]">Elizabeth Andrew</p>
                                                <p className="text-[#6D6D6D] text-[13.5px] font-[500]">8:29am. 19/05/2024</p>
                                            </div>
                                            <p className="text-[#6D6D6D] font-[400] text-[15px] w-[95%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam fugiat optio natus atque nihil dolore ipsam, impedit expedita voluptatibus officia aliquam, doloremque inventore rerum necessitatibus ab rem! Ad, veniam! Iusto?</p>
                                        </div>
                                    </div>
                                ))}

    
                            </div>
                            <div className="bg-white flex items-center gap-3 border-t mt-auto p-3">
                                <AttachmentIcon />
                                <div className="flex w-full relative">
                                    <SendIcon className="absolute right-4 bottom-2 cursor-pointer" />
                                    <input className="bg-[#F8F9FD] w-full px-4 py-2 rounded-3xl" type="text" placeholder="Type your message here..." />
                                </div>
                            </div>
                        </div>  
                    </>
                }
            </div>
        </DashboardLayout>
    )
}

export default Deals