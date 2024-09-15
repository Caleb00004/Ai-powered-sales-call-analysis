import { FC } from "react"
import PaginationComponent, { getProgressColor } from "./Pagination"

export const skillsData = [
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
]

interface props {
    className?: string
}

const SkillsExcerpt:FC<props> = ({className}) => {
    return (
        <div className={`bg-white mdx3:min-h-[80vh] px-3 py-6 border rounded-md  ${className ? className : "flex-[0.8] mdx5:flex-[1]"}`}>
            <PaginationComponent 
                items={skillsData}
                itemsPerPage={10}
                renderItems={(data) => (
                    data.map((item, index) => (
                        <div className="flex flex-col mdx4:flex-row text-[#333333] font-[500] justify-between py-3 border-b" key={index}>
                            {/* @ts-ignore */}
                            <p className="flex flex-1 "><span className="mr-7">{index + 1}</span> {item.short} = {item.name} </p>
                            <div className="flex gap-4 items-center flex-1">
                                <div className="relative w-[100%] h-4 bg-gray-200 ">
                                    {/* @ts-ignore */}
                                    <div className={`h-4 ${getProgressColor(item.score)}`} style={{ width: `${item.score}%` }}>
                                    </div>
                                </div>
                                {/* @ts-ignore */}
                                <p>{item.score}</p>
                            </div>
                        </div>                                
                    ))
                )}
            />
        </div>
    )
}

export default SkillsExcerpt