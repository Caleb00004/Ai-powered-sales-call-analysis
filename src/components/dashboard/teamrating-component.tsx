import SkillsExcerpt from "../secondary/SkillsExcerpt"
import TeamDistribution from "../secondary/TeamDistribution"
import TopPerformance from "../secondary/TopPerformance"

const TeamRatingComponent = () => {
    return (
        <div className="text-[#333333]">
            <div className="flex justify-between">
                <p className="font-[600] text-[17px] ">Team Rating</p>
                <div className="text-[#5B5B5B] flex gap-3">
                    <p className="font-[400] text-[16px] ">Custom Date</p>
                        
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mt-6">
                <div className="flex-[0.65] flex flex-col gap-4">
                    <TeamDistribution hideLabel />
                    <div>
                        <h1 className="text-[16px] text-[#333333] font-[500] mb-2">Top 3 Sales Rep Rating</h1>
                        <TopPerformance hideLabel />
                    </div>
                </div>
                <div className="bg-red-400 flex flex-col flex-[1]">
                    <SkillsExcerpt />
                </div>
            </div>
        </div>
    )
} 

export default TeamRatingComponent