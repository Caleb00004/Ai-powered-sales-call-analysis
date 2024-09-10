import Button from "@/components/primary/Button"
import { Box, MenuItem, Select, useMediaQuery } from "@mui/material"
import { AuditLogData } from "@/testData"
import Table from "@/components/secondary/Table"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
import { GridColDef, GridRowHeightParams } from "@mui/x-data-grid"

const AuditTrail = () => {
    const [searchInput, setSearchInput] = useState("")
    const rows = AuditLogData
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

    useEffect(() => {
        // Function to update screen size state
        const updateScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 940);
        };

        // Initial check
        updateScreenSize();

        // Add resize event listener
        window.addEventListener('resize', updateScreenSize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.user.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [rows, searchInput]);

    
    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);

    const getRowHeight = (params: GridRowHeightParams) => {
        const activity = params.model.activity;
        const charPerLine = 50; // Approximate number of characters per line, adjust as needed
        const numberOfLines = Math.ceil(activity.length / charPerLine); // Estimate number of lines

        // Base height per line is around 24px (can adjust based on font size)
        const baseHeightPerLine = 30;

        return Math.max(75, numberOfLines * baseHeightPerLine); // Set minimum height to 75px
    };
        
    const columns: GridColDef[] = useMemo(() => {
        return [
            {field: "timeStamp", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                renderHeader: () => (
                    <div className="font-[700]">
                        Timestamp
                    </div>
                ),  headerClassName: "bg-[#7279881A] rounded-tl-2xl rounded-bl-lg text-[#333333]"},
            {field: "user", 
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 150,
                renderHeader: () => (
                    <div className="font-[700]">
                        User
                    </div>
                ), headerClassName: "bg-[#7279881A] text-[#333333]"},
            {field: "activity", 
                flex: isLargeScreen ? 1 : undefined,
                width: isLargeScreen ? undefined : 300,
                renderHeader: () => (
                    <div className="font-[700]">
                        Activity
                    </div>
                ), headerClassName: "bg-[#7279881A] text-[#333333]", cellClassName: "fullLength-column--cell",
                renderCell: (params) => (
                    <Box
                        sx={{
                            whiteSpace: "normal",   // Allows text to wrap
                            wordWrap: "break-word", // Breaks long words
                            lineHeight: "1.2",      // Adjusts the line height
                            maxHeight: "none",      // Ensure the cell can grow in height
                            display: "block",       // Display block to allow wrapping
                        }}
                    >
                        {params.value}
                    </Box>
                )                
            },
        ]; 
    }, [isLargeScreen]) 



    return (
        <div>
            <div className="border bg-white px-5 sm:px-7 py-6 mb-6 rounded-md text-left ">
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div className="w-full text-[#6B6C70] ">
                        <p className=' text-[14px] font-[400]'>User type</p>
                        <Select
                            // onChange={handlePageSizeChange}
                            value={"all"}
                            sx={{color: "#6B6C70", fontSize: "14px"}}
                            className=' w-full text-[13px] h-10 font-[500] mt-2 rounded-lg'
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"manager"}>Manager</MenuItem>
                            <MenuItem value={"sales-rep"}>Sales Rep</MenuItem>
                        </Select>
                    </div>

                    <div className=" w-full text-[#6B6C70] ">
                        <p className=' text-[14px] font-[400]'>User type</p>
                        <Select
                            // onChange={handlePageSizeChange}
                            value={"all"}
                            sx={{color: "#6B6C70", fontSize: "14px"}}
                            className='w-full h-10 font-[500] mt-2 rounded-lg'
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"manager"}>Manager</MenuItem>
                            <MenuItem value={"sales-rep"}>Sales Rep</MenuItem>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-end justify-between gap-5 mt-5">
                    <div className="w-full">
                        <p  className=' text-[14px] font-[400] text-[#6B6C70]'>Period</p>
                        <div className="border p-2 rounded-lg mt-1">
                            <span>Start to Stop</span>
                        </div>
                    </div>
                    <div className="w-full flex gap-4  ">
                        <div className="flex justify-between md:pl-10 w-full gap-3">
                            <Button className="bg-transparent border border-[#B3387F] "><p className="text-[#B3387F]">Clear all</p></Button>
                            <Button>Generate</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className=" text-left overflow-auto w-[99%] ">
                    <Table 
                        title="Audit Log"
                        searchInput={searchInput}
                        handleSearchChange={handleSearchChange}
                        filteredRows={filteredRows}
                        columns={columns}
                        csv
                        columnHeaderHeight={37}
                        className=" border-none"
                        getRowHeight={getRowHeight}
                        // handleSelectCell={handleSelectSalesRep as GridEventListener<"cellClick">}
                    />
                </div>
            </div>
        </div>
    )
}

export default AuditTrail