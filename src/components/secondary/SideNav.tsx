import Link from "next/link"
import Logo2 from "../../../public/svgs/Logo_white.svg"
import DashboardIcon from "../../../public/svgs/dashboardIcons/dashboard-icon.svg"
import SalesRepIcon from "../../../public/svgs/dashboardIcons/salesrep-icon.svg"
import SkillsIcon from "../../../public/svgs/dashboardIcons/skills-icon.svg"
import TeamIcon from "../../../public/svgs/dashboardIcons/teamrating-icon.svg"
import InsightsIcon from "../../../public/svgs/dashboardIcons/insights-icon.svg"
import DealsIcon from "../../../public/svgs/dashboardIcons/deals-icon.svg"
import ManagerIcon from "../../../public/svgs/dashboardIcons/managers-icon.svg"
import TrainingIcon from "../../../public/svgs/dashboardIcons/trainings-icon.svg"
import ArrowIcon from "../../../public/svgs/arrow2-icon.svg"
import { useRouter } from "next/router"

const SideNav = () => {
    const router = useRouter()
    const routeName = router.pathname.split('/').slice(2).join('/')

    console.log(routeName)

    return (
        <div className="bg-[#161529] h-screen flex flex-col ">
            <div className=" mx-auto mt-6">
                <Logo2 />
            </div>
            <div className="flex flex-col text-[#D9D9D9] text-[0.9em] mt-10">
                <Link href={"/dashboard"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "" && "bg-[#2B2A3D] text-white"}`}>
                    <DashboardIcon />
                    <p>Dashboard</p>
                </Link>
                <Link href={"/dashboard/sales-rep"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "sales-rep" && "bg-[#2B2A3D] text-white"}`}>
                    <SalesRepIcon />
                    <p>Sales Reps</p>
                </Link>
                <Link href={"/dashboard/skills"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "skills" && "bg-[#2B2A3D] text-white"}`}>
                    <SkillsIcon />
                    <p>Skills</p>
                </Link>
                <Link href={"/dashboard/team-rating"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "team-rating" && "bg-[#2B2A3D] text-white"}`}>
                    <TeamIcon />
                    <p>Team Rating</p>
                </Link>
                <Link href={"/dashboard/insights"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "insights" && "bg-[#2B2A3D] text-white"}`}>
                    <InsightsIcon />
                    <p>Insights</p>
                </Link>
                <Link href={"/dashboard/deals"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "deals" && "bg-[#2B2A3D] text-white"}`}>
                    <DealsIcon />
                    <p>Deals</p>
                </Link>
                <Link href={"/dashboard/teams"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "teams" && "bg-[#2B2A3D] text-white"}`}>
                    <ManagerIcon />
                    <p>Teams</p>
                </Link>
                <Link href={"/dashboard/trainings"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "trainings" && "bg-[#2B2A3D] text-white"}`}>
                    <TrainingIcon />
                    <p>Trainings</p>
                </Link>
            </div>
            <Link href={"/dashboard/company-permission"} className=" border border-[#D9D9D9] rounded-[150px] flex justify-between mt-auto mb-6 pl-3 pr-1 py-2 mx-2 ">
                <div>
                    <p className="text-white text-[14px] font-[500]">Bles Sofware</p>
                    <p className=" text-[#D9D9D9] text-[12px]" >Add or switch company</p>
                </div>
                <ArrowIcon className="text-white" />
            </Link>
        </div>
    )
}

export default SideNav