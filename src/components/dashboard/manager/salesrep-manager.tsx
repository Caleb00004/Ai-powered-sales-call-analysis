import React, { ChangeEvent, useCallback, useMemo, Suspense, useState } from 'react';
import { callData } from "@/testData"
import { GridColDef, GridEventListener } from '@mui/x-data-grid';
import { Box, LinearProgress, MenuItem, Select } from '@mui/material';
import { getGridNumericOperators } from '@mui/x-data-grid';
import { callDataType } from '@/testData';
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import BookmarkIcon from "../../../../public/svgs/bookmark-icon.svg"
import Button from '@/components/primary/Button';
import { dealsData } from '@/testData';
import PaginationComponent from '@/components/secondary/Pagination';
import NavIcon from "../../../../public/svgs/next-icon.svg"
import PiechartComponent from '@/components/secondary/Piechart';
import ProgressCircle from '@/components/secondary/ProgressCircle';
import GradientCircle from '@/components/secondary/GradientCircle';
import Callicon from "../../../../public/svgs/round-call.svg"
import BriefcaseIcon from "../../../../public/svgs/briefcase-icon.svg"
import Dropdown from '@/components/secondary/Dropdown';

const LazyTable = React.lazy(() => import("@/components/secondary/Table"))

const piechartdata = 
    [
        { id: 0, value: 40, color: "#C32781", label: "Building Trust"},
        { id: 1, value: 45, color: "#00FFB0", label: "Building Value"},
        { id: 2, value: 60, color: "#49D0FF", label: "Conviction"},
        // { id: 3, value: 80, color: "#C32781", label: "Building Trust"},
    ]

const SalesRepManager = () => {
    const [searchInput, setSearchInput] = useState("")
    const [section, setSection] = useState<"table" | "details">("table")
    const [selectedSalesRep, setSelectedSalesRep] = useState({} as callDataType)
    const [displayDropDown, setDisplayDropDown] = useState(false)
    const [displayTrainingDropdown, setDisplayTrainingDropdown] = useState(false)
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
        const rowData = data.row as callDataType
        setSelectedSalesRep(rowData)
    },[])

    const handleDropDown = () => {
        setDisplayDropDown(prev => !prev)
    }

    const handleTrainingDropdown = () => {
        setDisplayTrainingDropdown(prev => !prev)
    }

    const sectionDropdown =   
        <>
            <BookmarkIcon className="scale-[0.8]" />
            <div onClick={handleDropDown}><MoreIcon className=" rotate-[90deg] translate-y-2 scale-[0.7]" /></div>
            <Dropdown isOpen={displayDropDown}>
                <p onClick={() => (setSection("details"), handleDropDown())} className='hover:bg-slate-200 cursor-pointer px-2 py-1'>View User details</p>
                <p className='hover:bg-slate-200 cursor-pointer px-2 py-1'>Schedule Training</p>
                <p className='hover:bg-slate-200 cursor-pointer px-2 py-1'>Message User</p>
            </Dropdown>
        </>
    
    return (
        <div className="flex flex-col gap-[20px] w-full">
            <p onClick={() => setSection("table")} className={`${section === "details" ? "scale-[1] pointer-events-auto mb-5" : "scale-[0] pointer-events-none"} cursor-pointer h-0 transition-all w-[45px] text-[#333333] text-[18px]`}>Back</p>
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
                        handleSelectCell={handleSelectSalesRep as GridEventListener<"cellClick">}
                    />
                </Suspense>
            }
            {
                section === "details" && 
                <div className='py-5'>
                    <div className='flex w-[20em] gap-4 ml-auto'>
                        <Button className='text-[13px] py-1'>Message Elizabeth</Button>
                        <Button className='text-[13px] py-1 bg-transparent border border-[#A4A4A4]' ><p className='text-[#333333]'>Schedule Training</p></Button>
                    </div>
                    <div className='flex flex-col mdx5:flex-row gap-5 mt-5'>
                        <div className='border flex-1 bg-white p-3 pb-10 px-3 rounded-lg'>
                            <h1 className='text-[#333333] text-[20px] font-[600] pb-2'>Area of concern</h1>
                            <PiechartComponent data={piechartdata} />
                        </div>
                        <div className='border flex-1 bg-white pt-3 pb-10 px-3 rounded-lg'>
                            <h1 className='text-[#333333] text-[20px] font-[600] pb-2'>Dureket Report</h1>
                            <p className='text-[#4A4A4A] text-[13.5px] font-[400] mdx5:h-[16.5em] overflow-auto'>Lorem ipsum dolor sit amet consectetur. Arcu ut aliquam neque orci sapien nisl. Ligula rhoncus at nisl scelerisque eget enim ut.
                                At vulputate metus pulvinar leo lorem nec morbi dolor. Tempus fusce vel duis dictum nibh a sed adipiscing in. In egestas aliquam 
                                id egestas morbi cras vivamus. Ac sed vehicula sem sed dui massa. Netus tincidunt odio ultricies viverra sed porttitor vulputate dui. 
                                egestas morbi cras vivamus. Ac sed vehicula sem sed dui. In egestas aliquam id egestas morbi cras vivamusmassa.egestas morbi cras vivamus. 
                                Ac sed vehicula sem sed dui massa. id egestas morbi cras vivamus. Ac sed vehicula sem sed massa. id egestas morbi cras vivamus. Ac sed vehicula sem 
                                sed dui massa. id egestas morbi cras vivamus. Ac sed vehicula sem sed dui massa. In egestas aliquam id egestas morbi cras vivamus</p>
                        </div>
                    </div>
                    <div className='flex flex-col mdx3:flex-row gap-5 mt-5'>
                        <div className='border flex-1 flex flex-col bg-white p-3 pb-10 px-3 rounded-lg'>
                            <h1 className='text-[#333333] text-[20px] font-[600] pb-4'>Assigned Deals</h1>
                            <div className=' h-full'>
                                <PaginationComponent 
                                    items={dealsData}
                                    hidePaginationStatus
                                    itemsPerPage={5}
                                    renderItems={(data) => (
                                        data.map(item => (
                                            <div className="flex h-full transition-all cursor-pointer py-2 justify-between items-center">
                                                {/* @ts-ignore */}
                                                <p className="font-[600] text-[14px] text-[#333333] underline">{item.name}</p>
                                            </div>
                                        ))
                                    )}
                                    footer={({ currentPage, totalPages, handlePageChange, itemsPerPage, handlePageSizeChange, start, end }) => (
                                        <div className='flex flex-col xl:flex-row justify-between gap-4'>
                                            <div className='mt-4 sm:mt-0'>
                                                <p className='text-[#626262] font-light text-[14px]'>{`Showing ${start} - ${end} of ${dealsData.length} entries`}</p>
                                            </div>
                                            <div className='flex items-center gap-2 justify-between'>
                                                <button className='mr-3 scale-[0.85] cursor-pointer hover:bg-slate-300 rounded-lg active:scale-[1.05] transition-all p-1' onClick={() => handlePageChange(currentPage - 1)}  disabled={currentPage === 1}><NavIcon /></button>
                                                <div className='flex items-center gap-1 text-[#333333]'>
                                                    <p>Page</p>
                                                    <div className=' border border-[#D4D4D4] ml-3 mr-1 rounded-md w-14 pl-2 '><p>{currentPage}</p></div>
                                                    <p>of <span className='pl-1'>{totalPages}</span></p>
                                                </div>
                                                <button className="rotate-[180deg] ml-2 scale-[0.85] cursor-pointer hover:bg-slate-300 rounded-lg active:scale-[1.05] transition-all p-1" onClick={() => handlePageChange(currentPage + 1)}  disabled={currentPage === totalPages}><NavIcon /></button>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div className='border flex-1 bg-white pt-3 pb-10 px-3 rounded-lg'>
                            <div className='flex justify-between pb-4'>
                                <h1 className='text-[#333333] text-[20px] font-[600] '>Scheduled Training</h1>
                                <div className='relative flex w-[30%]'>
                                    <div onClick={handleTrainingDropdown} className='border border-[#A4A4A4] w-full relative rounded-lg pl-3 flex items-center text-[14px] text-[#333333]'>
                                        <p>All</p>
                                    </div>
                                    <Dropdown className='-left-5 top-[35px]' isOpen={displayTrainingDropdown}>
                                        <p onClick={handleTrainingDropdown} className='hover:bg-slate-200 cursor-pointer px-2 py-1'>Completed</p>
                                        <p className='hover:bg-slate-200 cursor-pointer px-2 py-1'>In Progress</p>
                                        <p className='hover:bg-slate-200 cursor-pointer px-2 py-1'>Not Started</p>
                                    </Dropdown>
                                </div>
                            </div>
                            <div>
                                <PaginationComponent 
                                    items={dealsData}
                                    hidePaginationStatus
                                    itemsPerPage={5}
                                    renderItems={(data) => (
                                        data.map(item => (
                                            <div className="flex cursor-pointer py-2 text-[14px] justify-between items-center ">
                                                <div className='flex items-center'>
                                                    <MoreIcon className="rotate-[90deg]" />
                                                    <div>
                                                        <p>Sample Topic</p>
                                                        <p className='text-[12px]'>Sample Module Name</p>
                                                    </div>
                                                </div>
                                                <p className='px-3 bg-[#D9D9D94D] text-[#333333] rounded-full'>Not Started</p>
                                            </div>
                                        ))
                                    )}
                                    footer={({ currentPage, totalPages, handlePageChange, itemsPerPage, handlePageSizeChange, start, end }) => (
                                        <div className='flex flex-col xl:flex-row justify-between gap-4 '>
                                            <div className='mt-4 sm:mt-0'>
                                                <p className='text-[#626262] font-light text-[14px]'>{`Showing ${start} - ${end} of ${dealsData.length} entries`}</p>
                                            </div>
                                            <div className='flex items-center gap-2 justify-between'>
                                                <button className='mr-3 scale-[0.85] cursor-pointer hover:bg-slate-300 rounded-lg active:scale-[1.05] transition-all p-1' onClick={() => handlePageChange(currentPage - 1)}  disabled={currentPage === 1}><NavIcon /></button>
                                                <div className='flex items-center gap-1 text-[#333333]'>
                                                    <p>Page</p>
                                                    <div className=' border border-[#D4D4D4] ml-3 mr-1 rounded-md w-14 pl-2 '><p>{currentPage}</p></div>
                                                    <p>of <span className='pl-1'>{totalPages}</span></p>
                                                </div>
                                                <button className="rotate-[180deg] ml-2 scale-[0.85] cursor-pointer hover:bg-slate-300 rounded-lg active:scale-[1.05] transition-all p-1" onClick={() => handlePageChange(currentPage + 1)}  disabled={currentPage === totalPages}><NavIcon /></button>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SalesRepManager