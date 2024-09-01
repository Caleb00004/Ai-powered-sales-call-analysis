import OutlineIcon from "../../../../public/svgs/outline.svg"
import CallIcon from "../../../../public/svgs/call-icon.svg"
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import { DataGrid } from "@mui/x-data-grid"
import { GridRowsProp, GridColDef } from "@mui/x-data-grid"
import { callData } from "@/testData"
import { Box, useTheme } from "@mui/material"
import ProgressDiagram from "@/components/secondary/ProgressDiagram"
// import { tokens } from "@/components/util/theme"

const ManagerDashboard = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    // NOTE: rows = The Data
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
        // { field: 'col1', headerName: 'Column 1', width: 150 },
        // { field: 'col2', headerName: 'Column 2', width: 150 },
        // { field: 'col3', headerName: 'Column 3', width: 150 },
    ];

    return (
        <div> 
            <div className="flex items-center gap-1">
                <h1 className="text-[1.5em] font-[600] text-[#333333]">Overview</h1>
                <OutlineIcon className=" scale-[0.85] translate-y-[1px]" />
            </div>
            <div className="flex justify-between gap-3">
                <div className="grid grid-cols-2 gap-4 w-full flex-[2]">
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold text-[#333333] py-1">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>
                                        <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold text-[#333333] py-1">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold text-[#333333] py-1">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 items-center">
                                <CallIcon />
                                <p className=" text-[14px] font-[600]">Total calls Analyzed</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MoreIcon />
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold text-[#333333] py-1">800</h1>
                        <p className="text-[#828282] text-[12px]">sales calls analyzed this month</p>
                    </div>

                </div>
                <div className="bg-white w-full flex-1 p-3"> 
                    <div className="flex justify-between items-center">
                        <h1 className="text-[16px] text-[#333333] font-[600]">Top 3 Team performance</h1>
                        <MoreIcon />
                    </div>

                    <table className=" w-full ">
                        <tbody >
                            <tr>
                                <th className="text-[12px] text-[#333333] font-[600] py-2 text-left">Sales Rep</th>
                                <th className="text-[12px] text-[#333333] font-[600]">Overall</th>
                                <th className="text-[12px] text-[#333333] font-[600]">Top Skills</th>
                            </tr>
                        </tbody>
                        <tbody className="gap-4 ">
                            <tr>
                                <td className="flex items-center gap-2 ">
                                   <p className="text-[12px] font-[600]">1</p> 
                                   <div className="h-12 w-12 bg-slate-600 rounded-lg"></div>
                                   <p className="text-[12px] underline font-[600]">Elizabeth Parker</p>
                                </td>
                                <td className="">
                                    <div className="flex justify-center items-center bg-gradient-to-r from-[#6FA9E2] to-[#B3387F] mx-auto rounded-full w-12 h-12">
                                        <p className="font-[700] text-white">60</p>
                                    </div>
                                </td>
                                <td className="" >
                                    <div className="flex justify-center items-center bg-gradient-to-r from-[#6FA9E2] to-[#B3387F] mx-auto rounded-full h-12 w-12">
                                        <p className="font-[700] text-white">GG</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <br />
                        <tbody className="gap-4">
                            <tr>
                                <td className="flex items-center gap-2 ">
                                   <p className="text-[12px] font-[600]">1</p> 
                                   <div className="h-12 w-12 bg-slate-600 rounded-lg"></div>
                                   <p className="text-[12px] underline font-[600]">Elizabeth Parker</p>
                                </td>
                                <td className="">
                                    <div className="flex justify-center items-center bg-gradient-to-r from-[#6FA9E2] to-[#B3387F] mx-auto rounded-full w-12 h-12">
                                        <p className="font-[700] text-white">60</p>
                                    </div>
                                </td>
                                <td className="" >
                                    <div className="flex justify-center items-center bg-gradient-to-r from-[#6FA9E2] to-[#B3387F] mx-auto rounded-full h-12 w-12">
                                        <p className="font-[700] text-white">GG</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            <div className="flex mt-4 gap-4">
                <div className=" flex-[2] bg-white p-3 rounded-lg w-[100px]">
                    <div className="flex justify-between ">
                        <p className="text-[16px] text-[#333333] font-[600]">Recent call Analysis</p>
                        <p className=" underline text-[#C32782] text-[14px]">See all</p>
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
                <div className="flex-[1.07] bg-white p-3 rounded-lg">
                    <div className="flex justify-between text-[#333333] font-[600]">
                        <p>Team Performance Distribution</p>
                        <MoreIcon />
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <div className=" flex gap-3 items-center mt-5">
                            <ProgressDiagram />
                            <p className="text-[18px] font-[500]">Overall Rating</p>
                        </div>

                        <div className=" flex gap-3 items-center mt-5">
                            <ProgressDiagram />
                            <p className="text-[18px] font-[500]">Overall Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagerDashboard