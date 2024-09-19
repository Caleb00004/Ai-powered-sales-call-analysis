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
import gsap from "gsap"
import { useEffect } from "react"
import { globalState } from "../../../api-feature/apiSlice"

const SideNav = () => {
    const router = useRouter()
    const splitName = router.pathname.split('/')
    const routeName = splitName[2]
    const ACCOUNT_TYPE = globalState.account_type
    // const routeName = router.pathname.split('/').slice(2).join('/')
    
    const shakeAnimation = (iconClass: Element) => {
        gsap.timeline({ defaults: { duration: 0.2 } })
            .fromTo(iconClass, { rotate: 18 }, { rotate: -18, repeat: 1, yoyo: true })
            .to(iconClass, { rotate: 0 });
    };

    useEffect(() => {
        // Select all links and add hover event listener
        const links = document.querySelectorAll('.sidebar-link');
        
        links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('.sidenav-icon');
            if (icon) {
            shakeAnimation(icon);
            }
        });
        });  

        // Clean up the event listeners on unmount
        return () => {
        links.forEach(link => {
            link.removeEventListener('mouseenter', () => {});
        });
        };
    }, []);

    return (
        <div className="bg-[#161529] h-screen flex flex-col ">
            <div className=" mx-auto mt-6">
                <Logo2 />
            </div>
            <div className="flex flex-col text-[#D9D9D9] text-[0.9em] mt-10">
                <Link href={"/dashboard"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${router.pathname === "/dashboard" && "bg-[#2B2A3D] text-white"}`}>
                    <DashboardIcon className="sidenav-icon" />
                    <p>Dashboard</p>
                </Link>
                {ACCOUNT_TYPE === "admin" && 
                    <>
                        <div className="">
                            <Link href={"#"} className={`sidebar-link py-3 px-4 flex items-center gap-3 hover:bg-[#2B2A3D] hover:text-white ${routeName === "sales-rep" && "bg-[#2B2A3D] text-white"}`}>
                                <SalesRepIcon className="sidenav-icon" />
                                <p>Company Management</p>
                            </Link>
                            <div className="mt-0 text-[#D9D9D9] transition-all origin-top h-[6.4em]">
                                <div className="flex py-3 px-4 items-center gap-2 hover:bg-[#2B2A3D]">
                                    <div className="h-3 w-3 rounded-full border" />
                                    <p>Companies</p>
                                </div>
                                <div className="flex py-3 px-4 items-center gap-2 hover:bg-[#2B2A3D]">
                                    <div className="h-3 w-3 rounded-full border" />
                                    <p>Activity Logs</p>
                                </div>
                            </div>
                        </div>
                        <Link href={"#"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "sales-rep" && "bg-[#2B2A3D] text-white"}`}>
                            <SalesRepIcon className="sidenav-icon" />
                            <p>System Performance</p>
                        </Link>
                        <Link href={"#"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "sales-rep" && "bg-[#2B2A3D] text-white"}`}>
                            <SalesRepIcon className="sidenav-icon" />
                            <p>Subscriptions</p>
                        </Link>
                        <Link href={"#"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "sales-rep" && "bg-[#2B2A3D] text-white"}`}>
                            <SalesRepIcon className="sidenav-icon" />
                            <p>Training Management</p>
                        </Link>
                        <Link href={"#"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "sales-rep" && "bg-[#2B2A3D] text-white"}`}>
                            <SalesRepIcon className="sidenav-icon" />
                            <p>Account Settings</p>
                        </Link>
                    </>
                }
                {ACCOUNT_TYPE === "manager" && <Link href={"/dashboard/sales-rep"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "sales-rep" && "bg-[#2B2A3D] text-white"}`}>
                    <SalesRepIcon className="sidenav-icon" />
                    <p>Sales Reps</p>
                </Link>}
                {ACCOUNT_TYPE === "manager" && <Link href={"/dashboard/skills"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "skills" && "bg-[#2B2A3D] text-white"}`}>
                    <SkillsIcon className="sidenav-icon" />
                    <p>Skills</p>
                </Link>}
                {ACCOUNT_TYPE !== "admin" &&
                    <>
                        <Link href={"/dashboard/team-rating"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "team-rating" && "bg-[#2B2A3D] text-white"}`}>
                            <TeamIcon className="sidenav-icon" />
                            <p>Team Rating</p>
                        </Link>
                        <Link href={"/dashboard/insights"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "insights" && "bg-[#2B2A3D] text-white"}`}>
                            <InsightsIcon className="sidenav-icon" />
                            <p>Insights</p>
                        </Link>
                        <Link href={"/dashboard/deals"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "deals" && "bg-[#2B2A3D] text-white"}`}>
                            <DealsIcon className="sidenav-icon" />
                            <p>Deals</p>
                        </Link>
                    </>
                }
                {ACCOUNT_TYPE === "manager" && <Link href={"/dashboard/teams"} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "teams" && "bg-[#2B2A3D] text-white"}`}>
                    <ManagerIcon className="sidenav-icon" />
                    <p>Teams</p>
                </Link>}
                {ACCOUNT_TYPE !== "admin" && <Link href={`${ACCOUNT_TYPE === "manager" ? "/dashboard/trainings" : "/dashboard/trainings/112"}`} className={`sidebar-link flex items-center gap-3 hover:bg-[#2B2A3D] py-3 px-4 hover:text-white ${routeName === "trainings" && "bg-[#2B2A3D] text-white"}`}>
                    <TrainingIcon className="sidenav-icon" />
                    <p>Trainings</p>
                </Link>}
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