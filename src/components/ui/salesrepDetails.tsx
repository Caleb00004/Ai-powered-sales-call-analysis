import Button from "../primary/Button"
import PiechartComponent from "../secondary/Piechart"
import PaginationComponent from "../secondary/Pagination"
import Dropdown from "../secondary/Dropdown"
import DropdownItem from "../secondary/DropdownItem"
import NavIcon from "../../../public/svgs/next-icon.svg"
import MoreIcon from "../../../public/svgs/more-icon.svg"
import { dealsData } from "@/testData"
import { useState } from "react"

const piechartdata = 
    [
        { id: 0, value: 40, color: "#C32781", label: "Building Trust"},
        { id: 1, value: 45, color: "#00FFB0", label: "Building Value"},
        { id: 2, value: 60, color: "#49D0FF", label: "Conviction"},
        // { id: 3, value: 80, color: "#C32781", label: "Building Trust"},
    ]


const SalesRepDetails = () => {
    const [displayTrainingDropdown, setDisplayTrainingDropdown] = useState(false)
    const handleTrainingDropdown = () => {
        setDisplayTrainingDropdown(prev => !prev)
    }
    return (
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
                                <DropdownItem className='py-1 px-2' onClick={handleTrainingDropdown} text='Completed' />
                                <DropdownItem className='py-1 px-2' onClick={() => {}} text='In Progress' />
                                <DropdownItem className='py-1 px-2' onClick={() => {}} text='Not Started' />
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
                                    <div className="flex cursor-pointer py-2 text-[#333333] text-[14px] justify-between items-center ">
                                        <div className='flex items-center'>
                                            <MoreIcon className="rotate-[90deg]" />
                                            <div>
                                                <p className="font-[600]">Sample Topic</p>
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
    )
}

export default SalesRepDetails