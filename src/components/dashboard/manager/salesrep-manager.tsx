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
import { useGetSalesrepPerformanceQuery } from '../../../../api-feature/apiSlice';

const LazyTable = React.lazy(() => import("@/components/secondary/Table"))

const SalesRepManager = () => {
    const {data, status, error} = useGetSalesrepPerformanceQuery()
    console.log(data)
    console.log(status)
    console.log(error)
    const [searchInput, setSearchInput] = useState("")
    const [section, setSection] = useState<"table" | "details">("table")
    const [selectedSalesRep, setSelectedSalesRep] = useState({} as callDataType)
    const [displayDropDown, setDisplayDropDown] = useState(false)
    const viewRef = useRef<HTMLDivElement>(null)
    const rows = callData

    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.meetingName.toLowerCase().includes(searchInput.toLowerCase())
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
        return [
            {field: "meetingName", headerName: "Meeting Name", width: 200, headerClassName: "bg-[#C32782]"},
            {field: "Date", headerName: "Date", headerClassName: "bg-[#C32782]", cellClassName: "date-column--cell",},
            {field: "status", headerName: "Status", headerClassName: "bg-[#C32782]",
                renderCell: (params) => (
                    <Box
                        sx={{
                            color: 'white',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: '4px',
                            textAlign: 'center',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <p className={`w-16 h-[30px] rounded-2xl text-[#333333] text-[13px] font-[500] flex justify-center items-center ${params.value === "Past" ? "bg-[#E1335D33]" : "bg-[#32ea2833]"}`}>{params.value}</p>
                    </Box>
                )
            },
            {field: "overall", headerName: "Overall", headerClassName: "bg-[#C32782]"},
            {field: "BA", filterOperators: customNumericOperators, description: 'This is used to show BA means lorem ipsum', headerName: "BA", headerClassName: "bg-[#C32782]"},
            {field: "BB", filterOperators: customNumericOperators, headerName: "BB", headerClassName: "bg-[#C32782]"},
            {field: "BC", filterOperators: customNumericOperators, headerName: "BC", headerClassName: "bg-[#C32782]"},
            {field: "BD", filterOperators: customNumericOperators, headerName: "BD", headerClassName: "bg-[#C32782]"},
            {field: "BE", filterOperators: customNumericOperators, headerName: "BE", headerClassName: "bg-[#C32782]"},
            {field: "BF", filterOperators: customNumericOperators, headerName: "BF", headerClassName: "bg-[#C32782]"},
            {field: "BG", filterOperators: customNumericOperators, headerName: "BG", headerClassName: "bg-[#C32782]"},
            {field: "MC", filterOperators: customNumericOperators, headerName: "MC", headerClassName: "bg-[#C32782]"},
        ]; 
    }, []) 

    const handleSelectSalesRep = useCallback((data: {id: string, row: {}}) => {
        scrollToView(viewRef)
        const rowData = data.row as callDataType
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
            {selectedSalesRep.meetingName && 
                (section === "table" ?
                <>    
                    <div className="bg-white mdx2:h-[150px] rounded-2xl flex flex-col mdx2:flex-row gap-2 p-3">
                        <div className='flex gap-3 flex-[0.8]'>
                            <div className='bg-slate-700 w-[130px] h-[120px] mdx2:h-full rounded-lg'>

                            </div>
                            <div>
                                <p className='text-[20px] text-[#333333] font-[500] leading-6'>{selectedSalesRep.meetingName}</p>
                                <p className='text-[#828282] text-[14px]'>Senior Project</p>
                                <p className='text-[#828282] text-[14px]'>Manager</p>
                            </div>
                            <div className='flex mdx2:hidden ml-auto flex-[0.1] justify-between relative z-[2] '>
                                {sectionDropdown}
                            </div>
                        </div>
                        <div className='rounded-lg h-full gap-4 flex-[2] flex flex-col items-center mdx2:items-start sm:flex-row pt-4 mdx2:pt-0 '>
                            <div className='flex flex-1'><ProgressCircle type="progress" value={80} size={110} label={<span>Overall<br />Rating</span>} /></div>
                            <div className='flex flex-1'><ProgressCircle type="skill" value={"BT"} size={110} label="BT" /></div>
                            <div className='hidden mdx2:flex flex-[0.1] justify-between relative z-[2] '>
                                {sectionDropdown}
                            </div>
                        </div>
                    </div>
                </>
                    :
                <>
                    <div className="bg-white lg:h-[150px] rounded-2xl flex flex-col lg:flex-row gap-2 p-3">
                        <div className='bg-slate-700 w-[130px] h-[120px] lg:h-full rounded-lg flex-shrink-0 '>

                        </div>
                        <div className='flex-1'>
                            <div className='flex justify-between'>
                                <div>
                                    <p>Elizabeth Parker</p>
                                    <p className='text-[#828282] text-[14px]'>Senior Project</p>
                                </div>
                                <div className='flex justify-between relative z-[2] '>
                                    {sectionDropdown}
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4 lg:mt-0 lg:flex justify-between gap-10 lg:gap-4'>
                                <ProgressCircle type="progress" value={80} textClassname='text-[11px]' size={60} label={<span>Overall<br />Rating</span>} />
                                <div className='flex flex-col sm:flex-row items-center gap-2'>
                                    <GradientCircle size={60}>
                                        <Callicon />
                                    </GradientCircle>
                                    <div>
                                        <p className='text-[#333333] font-[600]'>100k+</p>
                                        <p>Total Calls</p>
                                    </div>
                                </div>
                                <div className='flex flex-col sm:flex-row items-center gap-2'>
                                    <GradientCircle size={60}>
                                        <BriefcaseIcon />
                                    </GradientCircle>
                                    <div>
                                        <p className='text-[#333333] font-[600]'>450</p>
                                        <p>Deals</p>
                                    </div>
                                </div>
                                <ProgressCircle type="skill" value={"BT"} size={60} label="Building Trust" />
                            </div>
                        </div>
                    </div>
                </>
                )        
            }

            {section === "table" && 
                <Suspense fallback={<div>Loading Table...</div>}>
                    <LazyTable
                        searchInput={searchInput}
                        handleSearchChange={handleSearchChange}
                        filteredRows={filteredRows}
                        columns={columns}
                        getRowIdField='id'
                        handleSelectCell={handleSelectSalesRep as GridEventListener<"cellClick">}
                    />
                </Suspense>
            }
            {
                section === "details" && 
                <SalesRepDetails userId={selectedSalesRep.id} />
            }
        </div>
    )
}

export default SalesRepManager