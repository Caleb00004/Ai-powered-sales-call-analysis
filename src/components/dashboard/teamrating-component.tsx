import { useGetTeamRatingQuery } from "../../../api-feature/apiSlice"
import { teamRatingType } from "../../../api-feature/team-rating/teamrating-type"
import { ApiType } from "../../../api-feature/types"
import SkillsExcerpt from "../secondary/SkillsExcerpt"
import TeamDistribution from "../ui/dashboard/TeamDistribution"
import TopPerformance from "../ui/dashboard/TopPerformance"

interface teamratingApi extends ApiType {
    data: {data: {data: teamRatingType[], page: number, totalPage: number, totalUser: number}}, success: boolean
}

const TeamRatingComponent = () => {
    const {data, status, error} = useGetTeamRatingQuery<teamratingApi>({start: "", end: ""})

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
                <div className=" flex flex-col flex-[1]">
                    {/* @ts-ignore */}
                    <SkillsExcerpt data={data?.data?.data} status={status} />
                </div>
            </div>
        </div>
    )
} 

export default TeamRatingComponent