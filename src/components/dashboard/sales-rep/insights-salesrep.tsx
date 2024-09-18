import ArrorwIcon from "../../../../public/svgs/arrow2-icon.svg"
import { useState } from "react"
import SkillsExcerpt from "@/components/secondary/SkillsExcerpt"

const InsightSalesrep = () => {


    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">My Rating</h1>
            </div>

            <div className="mt-5 flex flex-col-reverse mdx2:flex-row gap-5 ">
                <SkillsExcerpt />
                 
                <div className="bg-white p-2 flex-[0.5]  border rounded-md">
                    <div className="bg-slate-500 h-[30em] mdx2:h-full flex">
                        <div className="font-[700] rounded-md text-white w-full mb-3 pb-2 pt-3 text-center bg-slate-400 px-2 mx-3 mt-auto">
                            <p className="bg-gradient-to-r from-[#6FA9E2] to-[#B3387F] px-4 py-3 inline-block rounded-full">Null</p>
                            <p className="mt-2 text-[18px]">Potential Rating</p>
                            {/* @ts-ignore */}
                            <p className="bg-green-400 rounded-md py-3 mt-3 text-[25px]">Blank Blank</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default InsightSalesrep