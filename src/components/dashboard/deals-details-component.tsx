import Button from "@/components/primary/Button"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
import Table from "@/components/secondary/Table"
import { dealsData, dealsDataType } from "@/testData"
import { GridColDef, GridEventListener } from "@mui/x-data-grid"
import MenuItem from '@mui/material/MenuItem';
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { useRouter } from "next/router"
import Link from "next/link"
import ArrorwIcon from "../../../public/svgs/arrow2-icon.svg"
import Modal from "@/components/primary/Modal"
import Input from "@/components/primary/input"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers"
import { useGetDealNotesQuery, useGetDealOverviewQuery, useGetDealSalesrepPerformanceQuery, useGetMeetingsQuery } from "../../../api-feature/apiSlice"
import { ApiType } from "../../../api-feature/types"
import { dealMeetingsDataType, dealSalesrepPerformanceType, dealsOverviewType } from "../../../api-feature/deals/deal-type"
import useModal from "../util/useModal"
import { DealOverview, DealReport, DealNotes } from "../ui/deals"

type sectionsType = "overview" | "meetings" | "notes"

interface formType {
    name: string,
    link: string,
    date: Date,
    time: string,
    timezone: string
}

interface overviewApi extends ApiType {
    data: {success: boolean, data: dealsOverviewType}
}

interface performanceApi extends ApiType {
    data: {success: boolean, data: dealSalesrepPerformanceType[]}
}

interface meetingApi extends ApiType {
    data: {success: boolean, data: {meetings: dealMeetingsDataType[]}}
}


const DealdetailsComponent = () => {
    const router = useRouter()
    const {dealID} = router.query
    // @ts-ignore
    const {data: overviewData, status: overviewStatus, error: overviewError} = useGetDealOverviewQuery<overviewApi>(dealID)
    // @ts-ignore
    const {data: performanceData, status: performanceStatus, error: performanceError} = useGetDealSalesrepPerformanceQuery<performanceApi>(dealID)
    // @ts-ignore
    const {data: meetingsData, status: meetingStatus, error: meetingsError} = useGetMeetingsQuery<meetingApi>(dealID)
    // @ts-ignore
    const {data: notesDat, status: noteStatus, error: notesError} = useGetDealNotesQuery(dealID)

    const dealPerformanceRows = performanceData?.data
    const meetingRows = meetingsData?.data?.meetings

    const [section, setSection] = useState<sectionsType>("overview")
    const [dealsSearchInput, setDealsSearchInput] = useState("")
    const [meetingSearchInput, setMeetingSearchInput] = useState("")
    const {modalOpen, closeModal, openModal} = useModal()
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

    const filteredDealsRow = useMemo(() => {
        return dealPerformanceRows?.filter(row => {
            const firstName = row?.user?.firstName.toLowerCase();
            const lastName = row?.user?.lastName.toLowerCase();
            const searchValue = dealsSearchInput.toLowerCase();

            return (
                firstName.includes(searchValue) || lastName.includes(searchValue)
            );
        });
    }, [dealPerformanceRows, dealsSearchInput]);

    const filteredMeetingsRow = useMemo(() => {
        return meetingRows?.filter(row =>
            row?.meetingName.toLowerCase().includes(meetingSearchInput.toLowerCase())
        );
    }, [meetingRows, meetingSearchInput]);

    const handleDealsSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setDealsSearchInput(event.target.value);
    },[]);

    const handleMeetingsSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setMeetingSearchInput(event.target.value);
    },[]);

    const handleChangeSection = (newSection: sectionsType) => {
        setSection(newSection)
    }
    
    const meetingsColumns: GridColDef[] = useMemo(() => {
        return [
            {
                field: "meetingName",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                headerName: "Meeting Name",
            },
            {
                field: "date",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 150,
                headerName: "Date"
            },
            {
                field: "status",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 130,
                headerName: "Status",
            }
        ];
    }, [isLargeScreen]);

    const dealPerformanceColumns: GridColDef[] = useMemo(() => {
        return [
            {
                field: "user",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                headerName: "Name",
                renderCell: (params) => {
                    const {firstName, lastName} = params?.row?.user
                    console.log(params)
                    return (
                        <div className="flex flex-col">
                            <p className="leading-3 mt-5">{firstName} {lastName}</p>
                            <p className="leading-6 text-[12px]">{params?.row?.role}</p>
                        </div>
                    )
                },
            },
            {
                field: "overall",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 150,
                headerName: "Overall"
            },
            {
                field: "status",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 130,
                headerName: "Status",
            }
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
        <>
            <div className="flex flex-col">
                
                <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                >
                    <form onSubmit={handleAddNewDeal} className="relative pt-7 pb-12 px-14 bg-white">
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
                            <DealOverview loading={overviewStatus === "pending"} error={overviewStatus === "rejected"} data={overviewData?.data} />
                            <DealReport loading={overviewStatus === "pending"} error={overviewStatus === "rejected"} data={overviewData?.data}  />
                        </div>
                        <div className="mt-8 border rounded-md overflow-hidden">
                            <Table 
                                loading={performanceStatus === "pending"}
                                filteredRows={filteredDealsRow}
                                columns={dealPerformanceColumns}
                                searchInput={dealsSearchInput}
                                handleSearchChange={handleDealsSearch}
                                csv
                                title="Deal Performance Rating"
                                getRowIdField="id"
                            />
                        </div>                    
                    </>
                }
                {section === "meetings" && 
                    <>
                        <div className="mt-0 border overflow-hidden relative">
                            <Table 
                                loading={meetingStatus === "pending"}
                                filteredRows={filteredMeetingsRow}
                                columns={meetingsColumns}
                                searchInput={meetingSearchInput}
                                handleSearchChange={handleMeetingsSearch}
                                getRowIdField="id"
                            />
                        </div>    
                    </>
                }
                {section === "notes" && 
                    <>
                        {/* @ts-ignore */}
                        <DealNotes notesData={notesData} />  
                    </>
                }
            </div>
        </>
    )
}

export default DealdetailsComponent