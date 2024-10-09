import DashboardLayout from "@/components/layouts/DashboardLayout"
import DealsComponent from "@/components/dashboard/deals-component"
import Button from "@/components/primary/Button"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
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
import Modal from "@/components/primary/Modal"
import Input from "@/components/primary/input"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers"
import ProgressCircle from "@/components/secondary/ProgressCircle"

type sectionsType = "overview" | "meetings" | "notes"

interface formType {
    name: string,
    link: string,
    date: Date,
    time: string,
    timezone: string
}

const Deals = () => {
    const [section, setSection] = useState<sectionsType>("overview")
    const [searchInput, setSearchInput] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [scheduleMeetingDetails, setScheduleMeetingDetails] = useState<formType>({
        name: "",
        link: "",
        date: new Date,
        time: "",
        timezone: ""
    })

    useEffect(() => {
        // Function to update screen size state
        const updateScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 940);
        };
        // Initial check
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);


    const rows = dealsData

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };

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
                headerName: '',
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem >Action 1</MenuItem>,
                        <MenuItem >Action 2</MenuItem>
                    ]} data={params} />
                ),
                // width: 10,
                flex: isLargeScreen ? 0.2 : undefined, 
                width: isLargeScreen ? undefined : 10,
                sortable: false,
                filterable: false,
            },
            {
                field: "name",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                headerName: "Name",
            },
            {
                field: "client",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 150,
                renderHeader: () => (
                    <div className="flex items-center mdx2:flex-row flex-col">
                        <p>Client/</p><p>Company</p>
                    </div>
                ),
            },
            {
                field: "stage",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 130,
                headerName: "Stage",
            },
            {
                field: "status",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 130,
                headerName: "Status",
            },
            {
                field: "assignedSalesRep",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 200,
                renderHeader: () => (
                    <div className="flex gap-0 mdx2:gap-1 mdx2:flex-row flex-col">
                        <p>Assigned</p><p>Sales Rep</p>
                    </div>
                ),
            },
        ];
    }, [isLargeScreen]);

    const notesData = [0, 1, 2, 4, 5, 3, ,3 , 3, 3, 3]
    
    const handleAddNewDeal = () => {

    }

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name as keyof formType
        const value = e.target.value

        setScheduleMeetingDetails(prev => ({...prev, [key]: value}))
    }, [])

    return (
        <DashboardLayout>
            <div className="flex flex-col">
                
                <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                >
                    <form onSubmit={handleAddNewDeal} className="relative pt-7 pb-12 px-14">
                        <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Schedule Meeting</p>
                        <Input 
                            className="mb-[8px]"
                            value={scheduleMeetingDetails.name}
                            onChange={handleOnChange}
                            label={<label className="text-[#333333] font-medium text-[0.9em]">Meeting Name</label>} 
                            placeholder="Enter name"
                            type="text"
                            name="name"
                        />
                        <Input 
                            className="mb-[8px]"
                            value={scheduleMeetingDetails.link}
                            onChange={handleOnChange}
                            label={<label className="text-[#333333] font-medium text-[0.9em]">Meeting Link</label>} 
                            placeholder="Enter link"
                            type="text"
                            name="link"
                        />
                        
                        <div>
                            <label className="text-[#333333] font-medium text-[0.9em]">Date</label>
                            <DatePicker sx={{padding: 0, width: "100%", marginTop: "3px" }} value={undefined} onChange={(newValue) => console.log(newValue)} />
                        </div> 

                        <div className="flex gap-2">
                            <div className="mt-2 flex-[1]">
                                <label className="text-[#333333] font-medium text-[0.9em]">Time</label>
                                <TimePicker
                                    sx={{padding: 0, width: "100%", marginTop: "3px" }} 
                                    label="Select Time"
                                    value={undefined}
                                    onChange={(newValue) => console.log(newValue)}
                                />
                            </div>
                            <div className="flex-[0.6] bg-red-500 flex justify-end items-end">
                                {/* <Input 
                                    select
                                    options={["(UTC-10:00) Hawaii", "(UTC-09:00) Alaska", "(UTC-12:00) International Date Line West", "(UTC+03:30) Tehran"]}
                                    className="mb-0"
                                    value={""}
                                    onChange={handleOnChange}
                                    label={<label className="text-[#333333] font-medium text-[0.9em]">Timezone</label>} 
                                    placeholder="Enter link"
                                    type="text"
                                    name="link"
                                /> */}
                            </div>
                        </div>

                        <Button type="submit" className="mt-5" >
                            Save
                        </Button>
                    </form>
                </Modal>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div className="flex items-center gap-0 text-[15px]">
                        <Link className=" cursor-pointer underline text-[#5B5B5B]" href={"/dashboard/deals"}><p >Deals</p></Link>
                        <ArrorwIcon className="scale-[0.8]" />
                        <p className=" text-[#333333] font-[500] ">Deal details</p>
                    </div>
                    <div style={{width: "10em", marginLeft: "auto"}}>
                        <Button onClick={openModal} className=" py-[6px] text-[13px]">Schedule Meeting</Button>
                    </div>
                </div>

                <div className="bg-white flex w-[20em] mt-4 z-[2] translate-y-[1px] pb-0 text-[14px] border-t border-r border-l ">
                    <p onClick={() => handleChangeSection("overview")} className={` ${section === "overview" ? "bg-gradient-to-r font-[700] from-[#6FA9E2] to-[#B3387F] text-white" : "bg-none"} flex-1 py-2 text-[#333333] text-center cursor-pointer`}>Overview</p>
                    <p onClick={() => handleChangeSection("meetings")} className={` ${section === "meetings" ? "bg-gradient-to-r font-[700] from-[#6FA9E2] to-[#B3387F] text-white" : "bg-none"} flex-1 py-2 text-[#333333] text-center cursor-pointer`}>Meetings</p>
                    <p onClick={() => handleChangeSection("notes")} className={` ${section === "notes" ? "bg-gradient-to-r font-[700] from-[#6FA9E2] to-[#B3387F] text-white" : "bg-none"} flex-1 py-2 text-[#333333] text-center cursor-pointer`}>Notes</p>
                </div>
                {section === "overview" && 
                    <>
                        <div className="flex flex-col mdx2:flex-row justify-between gap-4">
                            <div className="flex-[1.3] bg-white border p-3 ">
                                <div className=""><div className='flex flex-1'><ProgressCircle type="progress" value={89} size={110} label={<span>Overall<br />Deal Health</span>} /></div></div>
                                <div className="flex flex-col gap-4 mt-4">
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
                                        <p className="text-[13px] bg-[#ECF1EB] text-[#2E7E0B] font-[600] py-[3px] px-3">Open</p>
                                    </div>
                                    <div className="flex items-center text-[#333333] justify-between">
                                        <p className="font-[600] text-[16px]">Date Created:</p>
                                        <p className="text-[13px] font-[500]">12/05/2024</p>
                                    </div>
                                    <div className="flex items-center text-[#333333] justify-between">
                                        <p className="font-[600] text-[16px]">Date Modified:</p>
                                        <p className="text-[13px] font-[500]">12/05/2024</p>
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
                                getRowIdField="id"
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
                                getRowIdField="id"
                            />
                        </div>    
                    </>
                }
                {section === "notes" && 
                    <>
                        <div className="bg-white flex flex-col border pt-6 h-[70vh] sm:h-[75vh]">
                            <div className="flex flex-col gap-4 p-3 overflow-auto">
                                
                                {notesData.map(item => (
                                    <div className="flex w-full rounded-lg flex-shrink-0 bg-[#6FA9E21A] px-2 pt-2 pb-4 gap-3 relative">
                                        <div onClick={() => console.log("CJJ")}  className=" absolute right-4 rotate-[90deg] scale-[0.8] py-2 cursor-pointer">
                                            <MoreIcon  />
                                        </div>
                                        <div className="bg-slate-600 flex-shrink-0 h-8 w-8 rounded-full  "></div>
                                        <div>
                                            <div className="flex gap-8 mb-2 items-center ">
                                                <p className=" text-[#333333] text-[18px] font-[500]">Elizabeth Andrew</p>
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
                                    <SendIcon className="absolute right-4 bottom-2 cursor-pointer text-[#0073E6]" />
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