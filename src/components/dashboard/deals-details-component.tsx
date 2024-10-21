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
import { useGetDealNotesQuery, useGetDealOverviewQuery, useGetDealSalesrepPerformanceQuery, useGetMeetingsQuery } from "../../../api-feature/apiSlice"
import { ApiType } from "../../../api-feature/types"
import { dealMeetingsDataType, dealSalesrepPerformanceType, dealsOverviewType, notesType } from "../../../api-feature/deals/deal-type"
import useModal from "../util/useModal"
import { DealOverview, DealReport, DealNotes } from "../ui/deals"
import ScheduleMeetingModal from "../modals/schedulemeeting-modal."

type sectionsType = "overview" | "meetings" | "notes"
 
interface overviewApi extends ApiType {
    data: {success: boolean, data: dealsOverviewType}
}

interface performanceApi extends ApiType {
    data: {success: boolean, data: dealSalesrepPerformanceType[]}
}

interface meetingApi extends ApiType {
    data: {success: boolean, data: {meetings: dealMeetingsDataType[]}}
}

interface notesApi extends ApiType {
    data: {success: boolean, data: notesType[]}
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
    const {data: notesData, status: noteStatus, error: notesError} = useGetDealNotesQuery<notesApi>(dealID)

    const dealPerformanceRows = performanceData?.data
    const meetingRows = meetingsData?.data?.meetings

    const [section, setSection] = useState<sectionsType>("overview")
    const [dealsSearchInput, setDealsSearchInput] = useState("")
    const [meetingSearchInput, setMeetingSearchInput] = useState("")
    const {modalOpen, closeModal, openModal} = useModal()
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

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
                cellClassName: "date-column--cell",
                headerName: "Date",
                renderCell: (params) => {
                    const {date} = params.row
                    const dateObject = new Date(date);

                    const getDate = dateObject.toLocaleDateString();

                    let time = dateObject.toLocaleTimeString();
                    time = time.split(':').slice(0, 2).join(':') + ' ' + time.split(' ')[1];  // "6:50 PM"


                    //.log(params)
                    return (
                        <div className="flex flex-col">
                            <p className="leading-3 mt-2">{getDate}</p>
                            <p className="leading-6 ">{time}</p>
                        </div>
                    )
                },
            },
            {
                field: "status",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 130,
                headerName: "Status",
            }
        ];
    }, [isLargeScreen, meetingRows]);

    const dealPerformanceColumns: GridColDef[] = useMemo(() => {

        const allSkillKeys = new Set<string>();

        performanceData?.data?.forEach((row) => {
            if (row.skills) {
            Object.keys(row.skills).forEach((key) => allSkillKeys.add(key));
            }
        });
        
        const baseColumns: GridColDef[] = [
            {
                field: "user",
                // flex: 1,
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                headerName: "Name",
                renderCell: (params) => {
                    const {firstName, lastName} = params?.row?.user
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
            }
        ];

        const skillColumns: GridColDef[] = Array.from(allSkillKeys).map((skillKey) => ({
            field: `skills.${skillKey}`,
            headerName: skillKey,
            flex: isLargeScreen ? 0.5 : undefined,
            width: isLargeScreen ? undefined : 100,
            renderCell: (params) => {
            return <span>{params.row.skills[skillKey]}</span>; // Accessing the skill value
            },
        }));

        return [...baseColumns, ...skillColumns];
    }, [isLargeScreen, dealPerformanceRows]);

    return (
        <>
            <div className="flex flex-col">
                
                <ScheduleMeetingModal 
                    // @ts-ignore
                    dealId={dealID}
                    modalOpen={modalOpen}
                    closeModal={closeModal}
                />

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
                                getRowIdField="user.id"
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
                                getRowIdField="meetingName"
                            />
                        </div>    
                    </>
                }
                {section === "notes" && 
                    <>
                        {/* @ts-ignore */}
                        <DealNotes notesData={notesData?.data} dealId={dealID} loading={noteStatus === "pending"} error={noteStatus === "rejected"} />  
                    </>
                }
            </div>
        </>
    )
}

export default DealdetailsComponent