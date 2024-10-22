import OutlineIcon from "../../../../public/svgs/outline.svg"
import CallIcon from "../../../../public/svgs/call-icon.svg"
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import { DataGrid } from "@mui/x-data-grid"
import { GridRowsProp, GridColDef } from "@mui/x-data-grid"
import { callData } from "@/testData"
import { Box } from "@mui/material"
import TeamDistribution from "@/components/ui/dashboard/TeamDistribution"
import TopPerformance from "@/components/ui/dashboard/TopPerformance"

const ManagerDashboard = () => {
    const rows = callData.slice(0, 4)

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
        {field: "BA", headerName: "BA", headerClassName: "bg-[#C32782]"},
        {field: "BB", headerName: "BB", headerClassName: "bg-[#C32782]"},
        {field: "BC", headerName: "BC", headerClassName: "bg-[#C32782]"},
        {field: "BD", headerName: "BD", headerClassName: "bg-[#C32782]"},
        {field: "BE", headerName: "BE", headerClassName: "bg-[#C32782]"},
        {field: "BF", headerName: "BF", headerClassName: "bg-[#C32782]"},
        {field: "BG", headerName: "BG", headerClassName: "bg-[#C32782]"},
        {field: "MC", headerName: "MC", headerClassName: "bg-[#C32782]"},
    ];

    return (
        <div> 
            <div className="flex items-center gap-1">
                <h1 className="text-[1.5em] font-[600] text-[#333333]">Overview</h1>
                <OutlineIcon className=" scale-[0.85] translate-y-[1px]" />
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-3 mt-4">
                <div className="grid sm:grid-cols-2 gap-4 w-full flex-[2]">
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon className="flex-shrink-0" />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            {/* <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div> */}
                        </div>
                        <h1 className="text-[29px] font-semibold text-[#333333] pt-2 pb-4">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon className="flex-shrink-0" />
                                <p className=" text-[14px] font-[600]">Average Performance Score</p>
                            </div>
                            {/* <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div> */}
                        </div>
                        <h1 className="text-[29px] font-semibold text-[#333333] pt-2 pb-4">87%</h1>
                        <p className="text-[#828282] text-[12px]">Average performance grade of all analyzed calls</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon className="flex-shrink-0" />
                                <p className=" text-[14px] font-[600]">Top Performer</p>
                            </div>
                            {/* <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div> */}
                        </div>
                        <h1 className="text-[29px] font-semibold text-[#333333] pt-2 pb-4">Elizabeth Parker</h1>
                        <p className="text-[#828282] text-[12px]">Highest-performing salesperson</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon className="flex-shrink-0" />
                                <p className=" text-[14px] font-[600]">Improvement Areas</p>
                            </div>
                            {/* <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div> */}
                        </div>
                        <h1 className="text-[29px] font-semibold text-[#333333] pt-2 pb-4">10</h1>
                        <p className="text-[#828282] text-[12px]">Calls flagged for needing improvement.</p>
                    </div>

                </div>
                <TopPerformance />
            </div>

            <div className="flex flex-col mdx2:flex-row mt-12 gap-4">
                <div className=" flex-[2] bg-white p-3 rounded-lg mdx2:w-[100px]">
                    <div className="flex justify-between ">
                        <p className="text-[16px] text-[#333333] font-[600]">Recent call Analysis</p>
                    </div>
                    <div className="mt-4 ">
                        <Box
                            m="40px 0 0 0"
                            sx={{
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "red",
                                    color: "white",
                                    borderBottom: "none",
                                },
                                "& .MuiDataGrid-footerContainer": {
                                    borderTop: "none",
                                    display: "none",
                                    color: "red"
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
                            <DataGrid autoHeight rows={rows} columns={columns} />
                        </Box>
                    </div>
                </div>
                <TeamDistribution />
            </div>
        </div>
    )
}

export default ManagerDashboard