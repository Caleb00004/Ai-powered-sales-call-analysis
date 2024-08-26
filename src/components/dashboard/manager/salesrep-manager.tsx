import React, { ChangeEvent, useState } from 'react';
import Search from "@/components/secondary/Search"
import { callData } from "@/testData"
import { DataGrid, useGridApiRef, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { GridFilterInputValue, getGridNumericOperators } from '@mui/x-data-grid';
import CustomGridFooter from '@/components/secondary/TableFooter';
import FilterIcon from "../../../../public/svgs/filter-icon.svg"


const SalesRepManager = () => {
    const [searchInput, setSearchInput] = useState("")
    const rows = callData
    const filteredRows = rows.filter(row =>
        row.meetingName.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };
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

    const columns: GridColDef[] = [
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

    const apiRef = useGridApiRef();

    function handleExport() {
        apiRef.current.exportDataAsCsv();
    }

    function handleFilter() {
        apiRef.current.showFilterPanel()

    }

    return (
        <div className="flex flex-col gap-[20px] w-full">
            <div className="bg-white h-[130px] rounded-2xl flex gap-2 p-3">
                <div className='flex gap-3 flex-[0.7]'>
                    <div className='bg-slate-700 w-[35%] h-full rounded-lg'>

                    </div>
                    <div>
                        <p>Elizabeth Parker</p>
                        <p>Senior Project</p>
                        <p>Manager</p>
                    </div>
                </div>
                <div className='bg-rose-400 rounded-lg h-full flex-[2]'>
                    <p>.</p>
                </div>
            </div>
            <div className="bg-white p-4 ">
                <h1 className="pb-3 text-[#333333] text-[20px] font-[500]">Durekt Table</h1>
                <div className="flex justify-between">
                    <Search
                        className="w-[14em]" 
                        value={searchInput}
                        onChange={handleSearchChange}
                    />
                    <div className="flex gap-4 items-center">
                        <div onClick={handleFilter} className="cursor-pointer border hover:bg-[#5B5B5B] hover:text-white active:scale-[0.95] transition-all border-[#D4D4D4] flex items-center text-[14px] gap-2 rounded-md text-[#5B5B5B] px-3 py-1">
                            <FilterIcon className="h-5 w-5" />
                            <p>Filter by</p>
                        </div>
                        <div onClick={handleExport} className=" cursor-pointer border-[0.1px] hover:bg-[#C32781] hover:text-white active:scale-[0.95] transition-all rounded-md border-[#C32781] px-3 py-1 text-[14px] text-[#C32781] font-[500]">
                            Export CSV
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden flex-1">
                    <Box
                        m="40px 0 0 0"
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "red",
                                color: "white",
                                borderBottom: "none",
                            },
                            "& .date-column--cell": {
                                whiteSpace: "normal", // Allows text to wrap
                                wordWrap: "break-word", // Breaks long words onto the next line
                                lineHeight: "1.2", // Adjust line height for better readability
                                display: "flex",
                                alignItems: "center",                                
                            }
                        }}
                    >
                        <DataGrid
                            apiRef={apiRef}
                            slots={{footer: CustomGridFooter}}
                            initialState={{
                                pagination: {
                                    paginationModel: { pageSize: 5 }, // Set the number of rows per page to 5
                                },
                            }}
                            columnHeaderHeight={68}
                            pageSizeOptions={([5, 10, 20])}
                            rows={filteredRows} 
                            columns={columns} 
                        />
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default SalesRepManager