import React from 'react';
import Search from "@/components/secondary/Search"
import { useState } from 'react';
import { callData } from "@/testData"
import { DataGrid, useGridApiRef, GridColDef, useGridApiContext, useGridSelector, gridPageSelector, gridPageCountSelector, gridRowCountSelector } from '@mui/x-data-grid';
import NavIcon from "../../../../public/svgs/next-icon.svg"
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const CustomFooter = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const totalRowCount = useGridSelector(apiRef, gridRowCountSelector);
    const [pageSize, setPageSize] = useState<number>(5);

    const start = page * pageSize + 1;
    const end = Math.min((page + 1) * pageSize, totalRowCount);

    const handleNextPage = () => {
        if (page < pageCount - 1) {
            apiRef.current.setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            apiRef.current.setPage(page - 1);
        }
    };

    const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
        const newSize = event.target.value;
        // @ts-ignore
        setPageSize(newSize);
        // @ts-ignore
        apiRef.current.setPageSize(newSize);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: '#f5f5f5',
                borderTop: '1px solid #ccc',
            }}
        >

            <div>
                <p className='text-[#626262] font-light text-[14px]'>{`Showing ${start} - ${end} of ${totalRowCount} entries`}</p>
            </div>
            <div className='flex gap-4'>
                <div className='flex items-center gap-2 justify-between'>
                    <button className='mr-3 scale-[0.85] cursor-pointer' onClick={handlePreviousPage} disabled={page === 0}><NavIcon /></button>
                    <div className='flex items-center gap-1 text-[#333333]'>
                        <p>Page</p>
                        <div className=' border border-[#D4D4D4] ml-3 mr-1 rounded-md w-14 pl-2 '><p>{page + 1}</p></div>
                        <p>of <span className='pl-1'>{pageCount}</span></p>
                    </div>
                    <button className="rotate-[180deg] ml-2 scale-[0.85]" onClick={handleNextPage} disabled={page >= pageCount - 1}><NavIcon /></button>
                </div>
                
                <div className="flex items-center border border-[#D4D4D4CC] rounded-md pl-4 h-10 gap-3">
                    <span className='text-[#333333] text-[14px] font-[400]'>Entries per page:</span>
                    <Select
                        value={pageSize}
                        onChange={handlePageSizeChange}
                        sx={{ height: "100%", border: "none"}}
                        className=' border-rose-600 w-[70px] text-[13px] font-[500]'
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </div>

            </div>
        </Box>
    );
}

const SalesRepManager = () => {

    const rows = callData
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
        {field: "BA",  description: 'This is used to show BA means lorem ipsum', headerName: "BA", headerClassName: "bg-[#C32782]"},
        {field: "BB", headerName: "BB", headerClassName: "bg-[#C32782]"},
        {field: "BC", headerName: "BC", headerClassName: "bg-[#C32782]"},
        {field: "BD", headerName: "BD", headerClassName: "bg-[#C32782]"},
        {field: "BE", headerName: "BE", headerClassName: "bg-[#C32782]"},
        {field: "BF", headerName: "BF", headerClassName: "bg-[#C32782]"},
        {field: "BG", headerName: "BG", headerClassName: "bg-[#C32782]"},
        {field: "MC", headerName: "MC", headerClassName: "bg-[#C32782]"},
    ];

    const apiRef = useGridApiRef();

    function handleExport() {
        apiRef.current.exportDataAsCsv();
    }

    return (
        <div className="flex flex-col gap-[20px] w-full">
            <div className="bg-white h-[130px] rounded-2xl">

            </div>
            <div className="bg-white p-4 ">
                <h1 className="pb-3 text-[#333333] text-[20px] font-[500]">Durekt Table</h1>
                <div className="flex justify-between">
                    <Search className="w-[15em]" />
                    <div className="flex gap-4 items-center">
                        <div className="border border-[#D4D4D4] rounded-md text-[#5B5B5B] px-2 py-1">
                            <p>Filter by</p>
                        </div>
                        <div onClick={handleExport} className=" cursor-pointer border-[0.1px] rounded-md border-[#C32781] px-2 py-1 text-[#C32781] font-[500]">
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
                            slots={{footer: CustomFooter}}
                            initialState={{
                                pagination: {
                                    paginationModel: { pageSize: 5 }, // Set the number of rows per page to 5
                                },
                            }}
                            columnHeaderHeight={68}
                            pageSizeOptions={([5, 10, 20])}
                            rows={rows} 
                            columns={columns} />
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default SalesRepManager