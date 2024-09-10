import React, { useEffect } from "react";
import { GridColDef, GridEventListener, useGridApiRef } from "@mui/x-data-grid";
import Search from "./Search";
import FilterIcon from "../../../public/svgs/filter-icon.svg"
import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import CustomGridFooter from "./TableFooter";
import { ChangeEvent, FC } from "react";

interface props {
    searchInput: string;
    handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    filteredRows: {}[];
    columns: GridColDef[];
    csv?: boolean;
    handleSelectCell?: GridEventListener<"cellClick">;
    title?: string
}

const Table:FC<props> = React.memo(({searchInput, handleSearchChange, filteredRows, columns, csv, handleSelectCell = () => {}, title }) => {
    const apiRef = useGridApiRef();

    function handleExport() {
        apiRef.current.exportDataAsCsv();
    }

    function handleFilter() {
        apiRef.current.showFilterPanel()

    }
    
    return (
        <div className="bg-white p-4  ">
            <h1 className="pb-3 text-[#333333] text-[20px] font-[500]">{title ? title : "Durekt Table"}</h1>
            <div className="flex justify-between">
                <Search
                    className="w-[14em]" 
                    value={searchInput}
                    onChange={handleSearchChange}
                    showIcon
                />
                <div className="flex gap-4 items-center">
                    <div onClick={handleFilter} className="cursor-pointer border hover:bg-[#5B5B5B] hover:text-white active:scale-[0.95] transition-all border-[#D4D4D4] flex items-center text-[14px] gap-2 rounded-md text-[#5B5B5B] px-3 py-1">
                        <FilterIcon className="h-5 w-5" />
                        <p>Filter by</p>
                    </div>
                    {csv && <div onClick={handleExport} className=" cursor-pointer border-[0.1px] hover:bg-[#C32781] hover:text-white active:scale-[0.95] transition-all rounded-md border-[#C32781] px-3 py-1 text-[14px] text-[#C32781] font-[500]">
                        Export CSV
                    </div>}
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
                        rowHeight={75}
                        pageSizeOptions={([5, 10, 20])}
                        rows={filteredRows} 
                        columns={columns} 
                        onCellClick={handleSelectCell}
                        autoHeight
                    />
                </Box>
            </div>
        </div>
    )
});

export default Table