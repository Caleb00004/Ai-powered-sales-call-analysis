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

const SideNav = () => {
    return (
        <div className="bg-[#161529] h-screen flex flex-col ">
            <div className=" mx-auto mt-6">
                <Logo2 />
            </div>
            <div className="flex flex-col text-[#D9D9D9] text-[0.9em] mt-10">
                <Link href={"#"} className="flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white">
                    <DashboardIcon />
                    <p>Dashboard</p>
                </Link>
                <Link href={"#"} className="flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white">
                    <SalesRepIcon />
                    <p>Sales Reps</p>
                </Link>
                <Link href={"#"} className="flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white">
                    <SkillsIcon />
                    <p>Skills</p>
                </Link>
                <Link href={"#"} className="flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white">
                    <TeamIcon />
                    <p>Team Rating</p>
                </Link>
                <Link href={"#"} className="flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white">
                    <InsightsIcon />
                    <p>Insights</p>
                </Link>
                <Link href={"#"} className="flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white">
                    <DealsIcon />
                    <p>Deals</p>
                </Link>
                <Link href={"#"} className="flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white">
                    <ManagerIcon />
                    <p>Managers</p>
                </Link>
                <Link href={"#"} className="flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white">
                    <TrainingIcon />
                    <p>Trainings</p>
                </Link>
            </div>
        </div>
    )
}

export default SideNav