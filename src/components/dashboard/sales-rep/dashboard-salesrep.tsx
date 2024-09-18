import Button from "@/components/primary/Button"
import Dropdown from "@/components/secondary/Dropdown"
import DropdownItem from "@/components/secondary/DropdownItem"
import GradientCircle from "@/components/secondary/GradientCircle"
import PaginationComponent from "@/components/secondary/Pagination"
import PiechartComponent from "@/components/secondary/Piechart"
import ProgressCircle from "@/components/secondary/ProgressCircle"
import { callDataType } from '@/testData';
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import BookmarkIcon from "../../../../public/svgs/bookmark-icon.svg"
import { dealsData } from '@/testData';
import NavIcon from "../../../../public/svgs/next-icon.svg"
import Callicon from "../../../../public/svgs/round-call.svg"
import BriefcaseIcon from "../../../../public/svgs/briefcase-icon.svg"


const piechartdata = 
    [
        { id: 0, value: 40, color: "#C32781", label: "Building Trust"},
        { id: 1, value: 45, color: "#00FFB0", label: "Building Value"},
        { id: 2, value: 60, color: "#49D0FF", label: "Conviction"},
        // { id: 3, value: 80, color: "#C32781", label: "Building Trust"},
    ]

const SalesrepDashboard = () => {
    return (
        <div>
            <div className="bg-white border xl:h-[180px] rounded-2xl flex flex-col gap-2 p-3">
                <h1 className="text-[1.5em] font-[600] text-[#333333]">Welcome Back!</h1>
                <div className="flex flex-col xl:flex-row gap-5 h-full">
                    <div className="flex gap-4 ">
                        <div className='bg-slate-700 w-[130px] h-[120px] xl:h-full rounded-lg flex-shrink-0 '>
                        </div>
                        <div className='flex justify-between my-auto'>
                            <div>
                                <p className="text-[20px] text-[#333333] font-[500]">Elizabeth Parker</p>
                                <p className='text-[#828282] text-[14px]'>Senior Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex items-center'>
                        <div className='grid w-full grid-cols-2 mt-4 lg:mt-0 mdx2:flex justify-between gap-10 lg:gap-4 text-[#333333]'>
                            <ProgressCircle type="progress" value={80} textClassname='text-[1.2em]' size={50} label={<span >Overall<br />Rating</span>} />
                            <div className='flex flex-col sm:flex-row items-center gap-2'>
                                <GradientCircle size={50}>
                                    <Callicon />
                                </GradientCircle>
                                <div>
                                    <p className='text-[#333333] font-[600]'>100k+</p>
                                    <p className="text-[14px] text-[#6D6D6D]">Total Calls</p>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row items-center gap-2'>
                                <GradientCircle size={50}>
                                    <BriefcaseIcon />
                                </GradientCircle>
                                <div>
                                    <p className='text-[#333333] font-[600]'>450</p>
                                    <p className="text-[14px] text-[#6D6D6D]">Deals</p>
                                </div>
                            </div>
                            <ProgressCircle type="skill" value={"BT"} size={50} textClassname="text-[1.2em]" label={<span className="text-[14px] text-[#6D6D6D]">Building Trust</span>} />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='py-5'>
                <div className='flex flex-col mdx5:flex-row gap-5 mt-5'>
                    <div className='border flex-1 bg-white p-3 pb-10 px-3 rounded-lg'>
                        <div className="flex justify-between mb-10">
                            <h1 className='text-[#333333] text-[20px] font-[600] pb-2'>Area of concern</h1>
                            <div>
                                <Button className="bg-white border border-[#C32781] rounded-md px-7 py-[4px]"><p className="text-[#C32781]">View Insight</p></Button>
                            </div>
                        </div>
                        <PiechartComponent data={piechartdata} />
                    </div>
                    <div className='border flex-1 bg-white pt-3 pb-10 px-3 rounded-lg'>
                        <h1 className='text-[#333333] text-[20px] font-[600] pb-6'>Dureket Report</h1>
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
                        <div className="flex justify-between mb-0">
                            <h1 className='text-[#333333] text-[20px] font-[600] pb-4'>Newest Assigned Deals</h1>
                            <div>
                                <Button className="bg-white border border-[#C32781] rounded-md px-7 py-[4px]"><p className="text-[#C32781]">View All</p></Button>
                            </div>
                        </div>
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
                                footer={() => <></>}
                            />
                        </div>
                    </div>
                    <div className='border flex-1 bg-white pt-3 pb-10 px-3 rounded-lg'>
                        <div className="flex justify-between mb-3">
                            <h1 className='text-[#333333] text-[20px] font-[600] '>Newest Scheduled Training</h1>
                            <div>
                                <Button className="bg-white border border-[#C32781] rounded-md px-7 py-[4px]"><p className="text-[#C32781]">View All</p></Button>
                            </div>
                        </div>
                        <div>
                            <PaginationComponent 
                                items={dealsData}
                                hidePaginationStatus
                                itemsPerPage={5}
                                renderItems={(data) => (
                                    data.map((item, i) => (
                                        <div className="flex cursor-pointer text-[#333333] py-2 text-[14px] justify-between items-center ">
                                            <div className='flex '>
                                                <p className="text-[17px] pr-3">{i+1}.</p>
                                                {/* <MoreIcon className="rotate-[90deg]" /> */}
                                                <div>
                                                    <p className="font-[600]">Sample Topic</p>
                                                    <p className='text-[12px]'>Sample Module Name</p>
                                                </div>
                                            </div>
                                            <progress value={20} />
                                        </div>
                                    ))
                                )}
                                footer={() => <></>}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesrepDashboard