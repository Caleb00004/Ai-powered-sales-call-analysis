import React, { ChangeEvent, useCallback, useMemo, Suspense, useState } from 'react';
import { callData } from "@/testData"
import { GridColDef, GridEventListener } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { getGridNumericOperators } from '@mui/x-data-grid';
import { callDataType } from '@/testData';
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import BookmarkIcon from "../../../../public/svgs/bookmark-icon.svg"
import Button from '@/components/primary/Button';

const LazyTable = React.lazy(() => import("@/components/secondary/Table"))

const SalesRepManager = () => {
    const [searchInput, setSearchInput] = useState("")
    const [section, setSection] = useState<"table" | "details">("table")
    const [selectedSalesRep, setSelectedSalesRep] = useState({} as callDataType)
    const [displayDropDown, setDisplayDropDown] = useState(false)
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
    
    return (
        <div className="flex flex-col gap-[20px] w-full">
            <p onClick={() => setSection("table")} className={`${section === "details" ? "scale-[1] pointer-events-auto mb-5" : "scale-[0] pointer-events-none"} cursor-pointer h-0 transition-all w-[45px] text-[#333333] text-[18px]`}>Back</p>
            {selectedSalesRep.meetingName && 
                <div className="bg-white mdx2:h-[150px] rounded-2xl flex flex-col mdx2:flex-row gap-2 p-3">
                    <div className='flex gap-3 flex-[0.8]'>
                        <div className='bg-slate-700 w-[130px] h-[120px] mdx2:h-full rounded-lg'>

                        </div>
                        <div>
                            <p className='text-[20px] text-[#333333] font-[500] leading-6'>{selectedSalesRep.meetingName}</p>
                            <p className='text-[#828282] text-[14px]'>Senior Project</p>
                            <p className='text-[#828282] text-[14px]'>Manager</p>
                        </div>
                        <div className='flex mdx2:hidden ml-auto flex-[0.1] justify-between relative  '>
                            <BookmarkIcon />
                            <div onClick={handleDropDown}><MoreIcon className=" rotate-[90deg] translate-y-2 scale-[0.7]" /></div>
                            <div style={{transformOrigin: "right top"}} className={` ${displayDropDown ? "scale-1 pointer-events-auto" : " scale-0 pointer-events-none"} bg-white transition-all absolute top-7 border w-[150px] -left-24 text-[13px] flex flex-col text-[#333333]`}>
                                <p onClick={() => (setSection("details"), handleDropDown())} className='hover:bg-slate-200 cursor-pointer px-2 py-1'>View User details</p>
                                <p className='hover:bg-slate-200 cursor-pointer px-2 py-1'>Schedule Training</p>
                                <p className='hover:bg-slate-200 cursor-pointer px-2 py-1'>Message User</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg h-full flex-[2] flex'>
                        <div className='flex flex-1 h-full bg-rose-600'>JJ</div>
                        <div className='flex flex-1 bg-purple-600'>LL</div>
                        <div className='hidden mdx2:flex flex-[0.1] justify-between relative '>
                            <BookmarkIcon className="scale-[0.8]" />
                            <div onClick={handleDropDown}><MoreIcon className=" rotate-[90deg] translate-y-2 scale-[0.7]" /></div>
                            <div style={{transformOrigin: "right top"}} className={` ${displayDropDown ? "scale-1 pointer-events-auto" : " scale-0 pointer-events-none"} bg-white transition-all absolute top-7 border w-[150px] -left-24 text-[13px] flex flex-col text-[#333333]`}>
                                <p onClick={() => (setSection("details"), handleDropDown())} className='hover:bg-slate-200 cursor-pointer px-2 py-1'>View User details</p>
                                <p className='hover:bg-slate-200 cursor-pointer px-2 py-1'>Schedule Training</p>
                                <p className='hover:bg-slate-200 cursor-pointer px-2 py-1'>Message User</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div className='flex flex-col sm:flex-row gap-5 mt-5'>
                        <div className='border flex-1 bg-white p-3 pb-10 px-3 rounded-lg'>
                            <h1 className='text-[#333333] text-[20px] font-[600] pb-2'>Area of concern</h1>
                        </div>
                        <div className='border flex-1 bg-white pt-3 pb-10 px-3 rounded-lg'>
                            <h1 className='text-[#333333] text-[20px] font-[600] pb-2'>Dureket Report</h1>
                            <p className='text-[#4A4A4A] text-[13.5px] font-[400]'>Lorem ipsum dolor sit amet consectetur. Arcu ut aliquam neque orci sapien nisl. Ligula rhoncus at nisl scelerisque eget enim ut.
                                At vulputate metus pulvinar leo lorem nec morbi dolor. Tempus fusce vel duis dictum nibh a sed adipiscing in. In egestas aliquam 
                                id egestas morbi cras vivamus. Ac sed vehicula sem sed dui massa. Netus tincidunt odio ultricies viverra sed porttitor vulputate dui. 
                                egestas morbi cras vivamus. Ac sed vehicula sem sed dui. In egestas aliquam id egestas morbi cras vivamusmassa.egestas morbi cras vivamus. 
                                Ac sed vehicula sem sed dui massa. id egestas morbi cras vivamus. Ac sed vehicula sem sed massa. id egestas morbi cras vivamus. Ac sed vehicula sem 
                                sed dui massa. id egestas morbi cras vivamus. Ac sed vehicula sem sed dui massa. In egestas aliquam id egestas morbi cras vivamus</p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5 mt-5'>
                        <div className='border flex-1 flex flex-col bg-white p-3 pb-10 px-3 rounded-lg'>
                            <h1 className='text-[#333333] text-[20px] font-[600] pb-4'>Assigned Deals</h1>
                            <div className='flex flex-col gap-4'>
                                <p className=' text-[13px] underline text-[#333333] font-[600]'>Sample deal name</p>
                                <p className=' text-[13px] underline text-[#333333] font-[600]'>Sample deal name</p>
                                <p className=' text-[13px] underline text-[#333333] font-[600]'>Sample deal name</p>
                            </div>
                        </div>
                        <div className='border flex-1 bg-white pt-3 pb-10 px-3 rounded-lg'>
                            <div className='flex justify-between pb-4'>
                                <h1 className='text-[#333333] text-[20px] font-[600] '>Scheduled Training</h1>
                                <div className='border border-[#A4A4A4] w-[30%] rounded-lg pl-3 flex items-center text-[14px] text-[#333333]'>
                                    <p>All</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>Hello</div>
                                <div>Hello</div>
                                <div>Hello</div>
                                <div>Hello</div>
                                <div>Hello</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SalesRepManager