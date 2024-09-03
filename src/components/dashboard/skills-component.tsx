import PaginationComponent from "../secondary/Pagination"
import { skillsData } from "./insights-components"
import { getProgressColor } from "../secondary/Pagination"
import ArrowIcon from "../../../public/svgs/arrow-left.svg"
import FilterIcon from "../../../public/svgs/filter-icon.svg"
import NavIcon from "../../../public/svgs/next-icon.svg"
import { Select, MenuItem } from "@mui/material"


const SkillsComponent = () => {
    return (
        <div className="flex flex-col mdx5:flex-row gap-8 text-[#333333] ">
            <div className="flex-shrink-0 bg-white p-4 border rounded-md flex flex-col mdx5:w-[13em]">
                <div className="flex justify-between">
                    <p className="font-[600] text-[17px] ">Team Skills</p>
                    <p className="font-[600] text-[17px] ">Trend</p>
                </div>
                <div className=" py-1 w-full h-[72vh] sm:h-auto sm:min-h-[75vh]">
                    <PaginationComponent 
                        items={skillsData}
                        hidePaginationStatus
                        footerClassname="gap-1 -translate-x-1"
                        itemsPerPage={10}
                        renderItems={(data) => (
                            data.map(item => (
                                <div className="flex hover:bg-slate-100 mdx4:hover:scale-[1.025]  transition-all cursor-pointer py-2 justify-between border-b  items-center">
                                    <p className="font-[500]">{item.short}</p>
                                    <div className="flex items-center justify-between gap-5 ">
                                        <p className={`${getProgressColor(item.score)} h-6 rounded-md px-8 font-[600]`}>{item.score}</p>
                                        <p className="rotate-[90deg] p-1 scale-[0.9] rounded-full bg-[#2B2A3D99] text-white"><ArrowIcon classname="text-red-400" /></p>
                                    </div>
                                </div>
                            ))
                        )}
                    />
                </div>
            </div>
            <div className="flex-shrink-0 p-2 flex flex-col flex-1 ">
                <div className="flex text-[#333333] font-[600] justify-between py-3 mb-4">
                    <p className=" flex-1   translate-x-9">Sales Rep</p>
                    <div className=" flex  flex-1 justify-around gap-6">
                        <p>Attributes</p>
                        <p>Rating</p>
                    </div>
                    <div className="flex flex-1 justify-end  font-[400] text-[#5B5B5B] items-center gap-2">
                        <FilterIcon className="h-4 w-4 text-[#C32782]" />
                        <p className="text-[#5B5B5B] text-[14px]">filter by</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-5">
                    
                    <PaginationComponent 
                        items={skillsData}
                        hidePaginationStatus
                        footerClassname="gap-1 -translate-x-1"
                        itemsPerPage={5}
                        renderItems={(data) => (
                            data.map(item => (
                                <div className="bg-white w-[40em] mdx4:w-auto mb-2 border flex px-2 py-3 justify-between rounded-lg">
                                    <div className="flex flex-1 items-center gap-2 ">
                                        <p className="text-[16px] font-[500] mr-2">1</p> 
                                        <div className="h-12 w-12 bg-slate-600 rounded-lg"></div>
                                        <p className="text-[16.5px] text-[#333333] underline font-[600]">Elizabeth Parker</p>
                                    </div>
                                    <div className="flex flex-1 ">
                                        <div className="flex items-center justify-center bg-gradient-to-r from-[#6FA9E2] to-[#B3387F] mx-auto rounded-full w-[60px] h-[60px]">
                                            <p className="text-white font-[700] text-[18px]">BO</p>
                                        </div>
                                        <div className="flex items-center justify-center bg-gradient-to-r from-[#6FA9E2] to-[#B3387F] mx-auto rounded-full w-[60px] h-[60px]">
                                            <p className="text-white font-[700] text-[18px]">60</p>
                                        </div>
                                    </div>
                                    <div className=" flex flex-1 items-center gap-5">
                                        <p className="ml-2 bg-[#4CB4FF1A] text-[#327EB5] text-center py-[2px] font-[600] px-8 flex-1 rounded-md">Good</p>
                                        <p className="font-[600] text-[14px] text-[#333333]">GG | 60</p>
                                    </div>
                                </div>
                            ))
                        )}
                        footer={({ currentPage, totalPages, handlePageChange, itemsPerPage, handlePageSizeChange }) => (
                            <div className='flex flex-col sm:flex-row justify-center gap-4'>
                                <div className='flex items-center gap-2 justify-between'>
                                    <button className='mr-3 scale-[0.85] cursor-pointer hover:bg-slate-300 rounded-lg active:scale-[1.05] transition-all p-1' onClick={() => handlePageChange(currentPage - 1)}  disabled={currentPage === 1}><NavIcon /></button>
                                    <div className='flex items-center gap-1 text-[#333333]'>
                                        <p>Page</p>
                                        <div className=' border border-[#D4D4D4] ml-3 mr-1 rounded-md w-14 pl-2 '><p>{currentPage}</p></div>
                                        <p>of <span className='pl-1'>{totalPages}</span></p>
                                    </div>
                                    <button className="rotate-[180deg] ml-2 scale-[0.85] cursor-pointer hover:bg-slate-300 rounded-lg active:scale-[1.05] transition-all p-1" onClick={() => handlePageChange(currentPage + 1)}  disabled={currentPage === totalPages}><NavIcon /></button>
                                </div>
                                
                                <div className="flex items-center border border-[#D4D4D4CC] rounded-md pl-4 h-10 gap-3">
                                    <span className='text-[#333333] text-[14px] font-[400]'>Entries per page:</span>
                                    <Select
                                        value={itemsPerPage}
                                        onChange={handlePageSizeChange}
                                        sx={{ height: "100%", border: "none"}}
                                        className=' border-rose-600 w-[70px] text-[13px] ml-auto font-[500]'
                                    >
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                    </Select>
                                </div>

                            </div>
                        )}
                    />


                </div>
            </div>
        </div>
    )
}

export default SkillsComponent