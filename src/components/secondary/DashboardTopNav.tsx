import HelpIcon from "../../../public/svgs/help-icon.svg"
import NotificationIcon from "../../../public/svgs/Notification 2.svg"
import DropdownIcon from "../../../public/svgs/dropdown-icon.svg"
import Search from "./Search"
import Link from "next/link"
import DashboardIcon from "../../../public/svgs/dashboardIcons/dashboard-icon.svg"
import SalesRepIcon from "../../../public/svgs/dashboardIcons/salesrep-icon.svg"
import SkillsIcon from "../../../public/svgs/dashboardIcons/skills-icon.svg"
import TeamIcon from "../../../public/svgs/dashboardIcons/teamrating-icon.svg"
import InsightsIcon from "../../../public/svgs/dashboardIcons/insights-icon.svg"
import DealsIcon from "../../../public/svgs/dashboardIcons/deals-icon.svg"
import ManagerIcon from "../../../public/svgs/dashboardIcons/managers-icon.svg"
import TrainingIcon from "../../../public/svgs/dashboardIcons/trainings-icon.svg"
import { useRouter } from "next/router"
import { useState } from "react"
import gsap from "gsap"

const TopNav = () => {
    const [openNav, setOpenNav] = useState(false)
    const router = useRouter()
    const routeName = router.pathname.split('/').slice(2).join('/')

    const toggleNav = () => {
        const openAnim = gsap.timeline()
            .to(".phone-nav", {y: 0})
            .to(".hamburger-line-top", {rotate: "45deg", y: 1, height: "2px"}, "<")
            .to(".hamburger-line-bottom", {rotate: "-45deg", y: "-5.5px", height: "2px"}, "<")

        const closeAnim = gsap.timeline()
            .to(".phone-nav", {y: "-100%"})
            .to(".hamburger-line-top", {rotate: "0deg", y: 0, height: "1.5px"}, "<")
            .to(".hamburger-line-bottom", {rotate: "0deg", y: 0, height: "1.5px"}, "<")

        openNav && openAnim.play()
        !openNav && closeAnim.reverse()
        
        setOpenNav(prev => !prev)
    }

    return (
        <div className="relative">        
        <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-b[#D4D4D4] z-[8] relative">
            <div className="hidden sm:block ">
                <Search value={""} className="w-[14em] mdx4:w-[20em]" onChange={() => {}} />
            </div>

            <div className="flex gap-3 items-center">
                <div className="border border-[#D4D4D4] rounded-md p-1">
                    <HelpIcon />
                </div>
                <div className="border border-[#D4D4D4] rounded-md p-1">
                    <NotificationIcon />
                </div>
                <div className="flex gap-1 items-center">
                    <div className="bg-slate-600 w-8 h-8 rounded-full">
                    </div>
                    <DropdownIcon />
                </div>
            </div>

            <div onClick={toggleNav} className="flex cursor-pointer sm:hidden flex-col gap-2 py-1">
                <div className="hamburger-line-top w-[1.4em] h-[1.5px] bg-black"></div>
                <div className="hamburger-line-bottom w-[1.4em] h-[1.5px] bg-black"></div>
            </div>
        </div>

        {/* For Mobile */}
        <div className="sm:hidden phone-nav -translate-y-full bg-[#161529] text-[#757474] pt-[5em] text-center h-[100vh] top-0 absolute w-full z-[7]">
            <Link href={"/dashboard"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "" && " text-white"}`}>
                <DashboardIcon />
                <p>Dashboard</p>
            </Link>
            <Link href={"/dashboard/sales-rep"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "sales-rep" && " text-white"}`}>
                <SalesRepIcon />
                <p>Sales Reps</p>
            </Link>
            <Link href={"/dashboard/skills"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "skills" && " text-white"}`}>
                <SkillsIcon />
                <p>Skills</p>
            </Link>
            <Link href={"/dashboard/team-rating"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "team-rating" && " text-white"}`}>
                <TeamIcon />
                <p>Team Rating</p>
            </Link>
            <Link href={"/dashboard/insights"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "insights" && " text-white"}`}>
                <InsightsIcon />
                <p>Insights</p>
            </Link>
            <Link href={"/dashboard/deals"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "deals" && " text-white"}`}>
                <DealsIcon />
                <p>Deals</p>
            </Link>
            <Link href={"/dashboard/teams"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "teams" && " text-white"}`}>
                <ManagerIcon />
                <p>Teams</p>
            </Link>
            <Link href={"/dashboard/trainings"} className={`flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "trainings" && " text-white"}`}>
                <TrainingIcon />
                <p>Trainings</p>
            </Link>
        </div>
        </div>
    )
}

export default TopNav