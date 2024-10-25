import React, { ChangeEvent, useCallback, useMemo, Suspense, useState, useRef } from 'react';
import { callData } from "@/testData"
import { GridColDef, GridEventListener } from '@mui/x-data-grid';
import { Box, LinearProgress, MenuItem, Select } from '@mui/material';
import { getGridNumericOperators } from '@mui/x-data-grid';
import { callDataType } from '@/testData';
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import BookmarkIcon from "../../../../public/svgs/bookmark-icon.svg"
import ProgressCircle from '@/components/secondary/ProgressCircle';
import GradientCircle from '@/components/secondary/GradientCircle';
import Callicon from "../../../../public/svgs/round-call.svg"
import BriefcaseIcon from "../../../../public/svgs/briefcase-icon.svg"
import Dropdown from '@/components/secondary/Dropdown';
import { scrollToView } from '@/components/util/helperFunctions';
import DropdownItem from '@/components/secondary/DropdownItem';
import SalesRepDetails from '@/components/ui/salesrepDetails';
import { useGetSalesRepActivitiesQuery, useGetSalesrepPerformanceQuery } from '../../../../api-feature/apiSlice';
import { ApiType } from '../../../../api-feature/types';
import { SalesRepPerformanceType } from '../../../../api-feature/sales-rep/salesrep-type';
import UserIcon from "../../../../public/svgs/usericon-rectangle.svg"

const LazyTable = React.lazy(() => import("@/components/secondary/Table"))

interface salesPerformanceApi extends ApiType {
    data: {data: SalesRepPerformanceType[], success: boolean}
}

interface activitiesApi extends ApiType {
    data: {data: {report?: string, dealCount: number, meetingCount: string}, success: boolean}
}

const SalesRepManager = () => {
    const [selectedSalesRep, setSelectedSalesRep] = useState({} as SalesRepPerformanceType)
    const {data, status, error} = useGetSalesrepPerformanceQuery<salesPerformanceApi>()
    const {data: activitiesData, status: activitiesStatus, error: activitiesError} = useGetSalesRepActivitiesQuery<activitiesApi>(selectedSalesRep?.user?.id, {skip: !selectedSalesRep?.user?.id})
    const [searchInput, setSearchInput] = useState("")
    const [section, setSection] = useState<"table" | "details">("table")
    const [displayDropDown, setDisplayDropDown] = useState(false)
    const viewRef = useRef<HTMLDivElement>(null)
    const rows = data?.data

    const filteredRows = useMemo(() => {
        return rows?.filter(row =>
            row.user.firstName.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [rows, searchInput]);

    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);
    // HOW TO DEFINE CUSTOM FILTER OPERTORS
    // const customGreaterThanOperator = {
    //     label: 'Greater than',
    //     value: 'greaterThan',
    //     getApplyFilterFn: (filterItem: {value: number}) => {
    //         if (!filterItem.value || isNaN(filterItem.value)) {
    //         return null;
    //         }
    //         return ({ value }) => value != null && value > filterItem.value;
    //     },
    //     InputComponent: GridFilterInputValue,
    // };

    // const customLessThanOperator = {
    // label: 'Less than',
    // value: 'lessThan',
    // getApplyFilterFn: (filterItem) => {
    //     if (!filterItem.value || isNaN(filterItem.value)) {
    //     return null;
    //     }
    //     return ({ value }) => value != null && value < filterItem.value;
    // },
    // InputComponent: GridFilterInputValue,
    // };

    const customNumericOperators = [
        ...getGridNumericOperators(),
        // customGreaterThanOperator,
        // customLessThanOperator,
    ];
    
    const columns: GridColDef[] = useMemo(() => {
        const allSkillKeys = new Set<string>();

        data?.data?.forEach((row) => {
            if (row.skills) {
            Object.keys(row.skills).forEach((key) => allSkillKeys.add(key));
            }
        });

        const baseColumns: GridColDef[] = [
            {field: "user", headerName: "Name", width: 200, renderCell: (params) => (<p>{params.row.user.firstName} {params.row.user.lastName}</p>)},
            {field: "overall", headerName: "Overall"},

            // {field: "Date", headerName: "Date", headerClassName: "bg-[#C32782]", cellClassName: "date-column--cell",},
            // {field: "status", headerName: "Status",
            //     renderCell: (params) => (
            //         <Box
            //             sx={{
            //                 color: 'white',
            //                 display: "flex",
            //                 justifyContent: "center",
            //                 alignItems: "center",
            //                 borderRadius: '4px',
            //                 textAlign: 'center',
            //                 width: '100%',
            //                 height: '100%',
            //             }}
            //         >
            //             <p className={`w-16 h-[30px] rounded-2xl text-[#333333] text-[13px] font-[500] flex justify-center items-center ${params.value === "Past" ? "bg-[#E1335D33]" : "bg-[#32ea2833]"}`}>{params.value}</p>
            //         </Box>
            //     )
            // },
            // {field: "BG", filterOperators: customNumericOperators, headerName: "BG", headerClassName: "bg-[#C32782]"},
            // {field: "MC", filterOperators: customNumericOperators, headerName: "MC", headerClassName: "bg-[#C32782]"},
        ]; 

        const skillColumns: GridColDef[] = Array.from(allSkillKeys).map((skillKey) => ({
            field: `skills.${skillKey}`,
            headerName: skillKey,
            // flex: isLargeScreen ? 0.5 : undefined,
            // width: isLargeScreen ? undefined : 100,
            renderCell: (params) => {
            return <span>{params.row.skills[skillKey]}</span>; // Accessing the skill value
            },
        }));

        return [...baseColumns, ...skillColumns]
    }, [status]) 

    const handleSelectSalesRep = useCallback((data: {id: string, row: {}}) => {
        scrollToView(viewRef)
        const rowData = data.row as SalesRepPerformanceType
        setSelectedSalesRep(rowData)
    },[])

    const handleDropDown = () => {
        setDisplayDropDown(prev => !prev)
    }

    const sectionDropdown =   
        <>
            <BookmarkIcon className="scale-[0.8]" />
            <div onClick={handleDropDown}><MoreIcon className=" rotate-[90deg] translate-y-2 scale-[0.7]" /></div>
            <Dropdown isOpen={displayDropDown}>
                <DropdownItem className='py-1 px-2' onClick={() => (setSection("details"), handleDropDown())} text='View User details' />
                <DropdownItem className='py-1 px-2' onClick={() => {}} text='Schedule Training' />
                <DropdownItem className='py-1 px-2' onClick={() => {}} text="Message User" />
            </Dropdown>
        </>
        
    return (
        <div className="flex relative flex-col gap-[20px] w-full">
            <p onClick={() => setSection("table")} className={`${section === "details" ? "scale-[1] pointer-events-auto mb-5" : "scale-[0] pointer-events-none"} cursor-pointer h-0 transition-all w-[45px] text-[#333333] text-[18px]`}>Back</p>
            <div ref={viewRef} className='h-1 absolute bg-transparent pointer-events-none w-1'/>
            {selectedSalesRep?.user?.id && 
                (section === "table" ?
                <>    
                    <div className="bg-white mdx2:h-[150px] rounded-2xl flex flex-col mdx2:flex-row gap-2 p-3">
                        <div className='flex gap-3 flex-[0.8]'>
                            <div className='w-[130px] p-0 h-[120px] mdx2:h-full rounded-lg relative overflow-hidden'>
                                <UserIcon className="w-full h-full relative z-[2] scale-x-[1.35] scale-y-[1.19] mb-auto " />
                            </div>
                            <div>
                                <p className='text-[20px] text-[#333333] font-[500] leading-6'>{selectedSalesRep?.user?.firstName} {selectedSalesRep?.user?.lastName}</p>
                                <p className='text-[#828282] text-[14px]'>{selectedSalesRep?.role}</p>
                                {/* <p className='text-[#828282] text-[14px]'>Manager</p> */}
                            </div>
                            <div className='flex mdx2:hidden ml-auto flex-[0.1] justify-between relative z-[2] '>
                                {sectionDropdown}
                            </div>
                        </div>
                        <div className='rounded-lg h-full gap-4 flex-[2] flex flex-col items-center mdx2:items-start sm:flex-row pt-4 mdx2:pt-0 '>
                            <div className='flex flex-1'><ProgressCircle type="progress" value={selectedSalesRep?.overall} size={110} label={<span>Overall<br />Rating</span>} /></div>
                            <div className='flex flex-1'><ProgressCircle type="skill" value={Object.keys(selectedSalesRep?.skills)?.[0]} size={110} label={Object.keys(selectedSalesRep?.skills)?.[0]} /></div>
                            <div className='hidden mdx2:flex flex-[0.1] justify-between relative z-[2] '>
                                {sectionDropdown}
                            </div>
                        </div>
                    </div>
                </>
                    :
                <>
                    <div className="bg-white lg:h-[150px] rounded-2xl flex flex-col lg:flex-row gap-2 p-3">
                        <div className='w-[130px] h-[120px] lg:h-full rounded-lg flex-shrink-0  relative overflow-hidden  '>
                            <UserIcon className="w-full h-full relative z-[2] scale-x-[1.35] scale-y-[1.19] mb-auto " />
                        </div>
                        <div className='flex-1'>
                            <div className='flex justify-between'>
                                <div>
                                    <p>{selectedSalesRep?.user?.firstName} {selectedSalesRep?.user?.lastName}</p>
                                    <p className='text-[#828282] text-[14px]'>{selectedSalesRep?.role}</p>
                                </div>
                                <div className='flex justify-between relative z-[2] '>
                                    {sectionDropdown}
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4 lg:mt-0 lg:flex justify-between gap-10 lg:gap-4'>
                                <ProgressCircle type="progress" value={selectedSalesRep?.overall} textClassname='text-[15px]' size={60} label={<span>Overall<br />Rating</span>} />
                                <div className='flex flex-col sm:flex-row items-center gap-2'>
                                    <GradientCircle size={60}>
                                        <Callicon />
                                    </GradientCircle>
                                    <div>
                                        <p className='text-[#333333] font-[600]'>{activitiesData?.data?.meetingCount ?? 0}</p>
                                        <p>Total Calls</p>
                                    </div>
                                </div>
                                <div className='flex flex-col sm:flex-row items-center gap-2'>
                                    <GradientCircle size={60}>
                                        <BriefcaseIcon />
                                    </GradientCircle>
                                    <div>
                                        <p className='text-[#333333] font-[600]'>{activitiesData?.data?.dealCount ?? 0}</p>
                                        <p>Deals</p>
                                    </div>
                                </div>
                                <ProgressCircle type="skill" value={Object.keys(selectedSalesRep?.skills)?.[0]} textClassname='text-[15px]' size={60} label={Object.keys(selectedSalesRep?.skills)?.[0]} />
                            </div>
                        </div>
                    </div>
                </>
                )        
            }

            {section === "table" && 
                <Suspense fallback={<div>Loading Table...</div>}>
                    <LazyTable
                        loading={status === "pending"}
                        searchInput={searchInput}
                        handleSearchChange={handleSearchChange}
                        filteredRows={filteredRows}
                        columns={columns}
                        getRowIdField='user.id'
                        handleSelectCell={handleSelectSalesRep as GridEventListener<"cellClick">}
                    />
                </Suspense>
            }
            {
                section === "details" && 
                <SalesRepDetails userId={selectedSalesRep?.user?.id} activitiesData={activitiesData} activitiesStatus={activitiesStatus} />
            }
        </div>
    )
}

export default SalesRepManager