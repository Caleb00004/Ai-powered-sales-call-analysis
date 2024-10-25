import React, { ReactNode, useEffect } from "react";
import { GridColDef, GridEventListener, GridRowHeightParams, GridRowHeightReturnValue, useGridApiRef } from "@mui/x-data-grid";
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
    title?: string | ReactNode
    columnHeaderHeight?: number
    rowHeight?: number
    className?: string,
    getRowHeight?: (params: GridRowHeightParams) => GridRowHeightReturnValue,
    admin?: boolean
    checkbox?: boolean
    hideFooter?: boolean
    hideHelpers?: boolean
    disableRowSelectionOnClick?: boolean
    hideHeader?: boolean
    loading: boolean
    getRowIdField: string
}

const Table:FC<props> = React.memo(({searchInput, getRowIdField, loading, getRowHeight, disableRowSelectionOnClick, checkbox, hideFooter, hideHeader, hideHelpers, columnHeaderHeight, admin, rowHeight, className, handleSearchChange, filteredRows, columns, csv, handleSelectCell = () => {}, title }) => {
    const apiRef = useGridApiRef();

    function handleExport() {
        apiRef.current.exportDataAsCsv();
    }

    function handleFilter() {
        apiRef.current.showFilterPanel()

    }

    const getNestedFieldValue = (obj: Record<string, any>, path: string): any => {
        return path?.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    return (
        <div className="bg-white p-4 rounded-2xl  ">
            {!hideHeader && <h1 className="pb-3 text-[#333333] text-[20px] font-[500]">{title ? title : "Durekt Table"}</h1>}
            {!hideHelpers && <div className="flex flex-col sm:flex-row justify-between gap-3">
                <Search
                    className="w-full sm:w-[14em]" 
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
            </div>}

            <div className="overflow-hidden flex-1">
                <Box
                    m={hideHelpers ? "10px 0 0 0" : "40px 0 0 0"}
                    sx={{
                       "& .MuiDataGrid-root .MuiDataGrid-container--top [role=row]": !admin ? {
                            background: "linear-gradient(to right, #5F5FC9, #C32782)",
                            color: "white",
                        } : {
                            backgroundColor: "#F4F7FE",
                            borderRadius: "20px"
                        },
                        "& .center-cell-text": {
                            textAlign: "center" ,
                            backgroundColor: "transparent"
                        },
                        "& .date-column--cell": {
                            whiteSpace: "normal", // Allows text to wrap
                            wordWrap: "break-word", // Breaks long words onto the next line
                            lineHeight: "1.2", // Adjust line height for better readability
                            display: "flex",
                            alignItems: "center",                                
                        },
                        "& .fullLength-column--cell": {
                             whiteSpace: "normal", // Ensures text wraps
                            wordWrap: "break-word", // Allows long words to wrap
                            display: "block", // Ensures the cell can stretch vertically
                        },
                        "& .MuiDataGrid-root .MuiDataGrid-cell": admin ? {
                            borderTop: "none !important",
                        }: {},
                        "& .MuiCheckbox-root": {
                            color: `#333333 !important`,
                            transform: "scale(0.8)",       // Reduce size to 80% (adjust as needed)
                        }
                    }}
                >
                    <DataGrid
                        sx={admin ? {
                            border: "none",
                        }: {}}
                        loading={loading}
                        getRowId={(row) => 
                            typeof getRowIdField === "function" 
                            // @ts-ignore
                            ? getRowIdField(row) // If a custom function is provided, use it
                            : getNestedFieldValue(row, getRowIdField) // Otherwise, handle both direct and nested fields
                        }
                        checkboxSelection={checkbox}
                        disableRowSelectionOnClick={disableRowSelectionOnClick}
                        hideFooter={hideFooter}
                        className={className}
                        apiRef={apiRef}
                        slots={{footer: CustomGridFooter}}
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 5 }, // Set the number of rows per page to 5
                            },
                        }}
                        columnHeaderHeight={columnHeaderHeight ? columnHeaderHeight : 68}
                        rowHeight={rowHeight ? rowHeight : 75}
                        getRowHeight={getRowHeight ? getRowHeight : undefined} // will take a higher precedence over "rowHeight" if defined
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