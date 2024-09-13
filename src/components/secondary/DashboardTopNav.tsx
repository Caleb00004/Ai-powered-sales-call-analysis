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
import Dropdown from "./Dropdown"
import Modal from "../primary/Modal"
import Logo from "../primary/Logo"
import FaqUI from "./FaqUI"
import Input from "../primary/input"
import Button from "../primary/Button"

const TopNav = () => {
    const [openNav, setOpenNav] = useState(false)
    const [displayDropDown, setDisplayDropDown] = useState(false)
    const [helpDropDown, setHelpDropdown] = useState(false)
    const router = useRouter()
    const routeName = router.pathname.split('/').slice(2).join('/')

    const [modalOpen, setModalOpen] = useState({display: false, type: ""} as {display: boolean, type: "" | "faq" | "support"})

    const closeModal = () => {
        setModalOpen({display: false, type: "" });
    };

    const openModal = (type: "" | "faq" | "support") => {
        setModalOpen({display: true, type: type });
    };

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

    const handleDropDown = () => {
        setDisplayDropDown(prev => !prev)
    }

    const handleHelpDropdown = () => {
        setHelpDropdown(prev => !prev)
    }

    const faqContent = 
        <>
            <Search value="" className="bg-transparent w-full py-2 " showIcon containerClassName="round mb-7 bg-white" onChange={() => {}} placeholder="search" />
            <div className="w-full h-1 bg-[#F8F8FA] relative z-[3] "></div>
            <FaqUI 
                className="border-none mt-0" 
                detailsClassName="text-[#333333] text-[13px] mt-0 "
                containerStyle={{
                    translate: "0px -2px",
                    borderRadius: 0,
                    padding: 0,
                    backgroundColor: "transparent",
                    borderBottom: "1px solid #C4C6C8CC",
                    boxShadow: "none",
                    margin: "none"
                }}
                headerClassName = "text-[14px] translate-y-2"                       
            />
        </>

    const contactSupportContent = 
        <>
            <form>
                <Input className="text-[15px]" type="text" value="" onChange={() => {}} label={<p className="text-[#333333] text-[14px] font-[500]">First Name</p>} placeholder="John " name="firstName" />
                <Input className="text-[15px]" type="text" value="" onChange={() => {}} label={<p className="text-[#333333] text-[14px] font-[500]">Last Name</p>} placeholder="Doe" name="lastName" />
                <Input className="text-[15px]" type="email" value="" onChange={() => {}} label={<p className="text-[#333333] text-[14px] font-[500]">Email</p>} placeholder="johnDoe@gmail.com" name="email" />
                <Input className="text-[15px]" type="text" value="" onChange={() => {}} label={<p className="text-[#333333] text-[14px] font-[500]">Subject</p>} placeholder="Write here" name="subject" />
                <Input className="text-[15px]" type="textarea" value="" onChange={() => {}} label={<p className="text-[#333333] text-[14px] font-[500]">Description</p>} placeholder="Describe your issue" name="description" />

                <Button type="submit" className="mt-10 mb-5" >Submit form</Button>
            </form>
        </>

    return (
        <div className="relative">      
        {/* MODAL */}
        <Modal isOpen={modalOpen.display} onClose={closeModal} className={""}>
            <div>
                <div className="bg-white relative flex justify-between px-5 py-5">
                    <div>
                        <Logo classname="w-[100px] h-[25px] scale-1 mb-1" />
                        <p>FAQ</p>
                    </div>
                    <p onClick={closeModal} className=" cursor-pointer absolute text-[#545454] right-4 top-3 font-[600]">X</p>
                </div>
                <div className="px-4 py-8 bg-[#F8F8FA] overflow-y-scroll max-h-[60vh]">
                   {modalOpen.type === "faq" ? faqContent : contactSupportContent}
                </div>
            </div>
        </Modal>

        {/* NORMAL */}
        <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-b[#D4D4D4] z-[8] relative">
            <div className="hidden sm:block ">
                <Search showIcon value={""} className="w-[14em] mdx4:w-[20em]" onChange={() => {}} />
            </div>

            <div className="flex gap-3 items-center">
                <div className=" cursor-pointer border border-[#D4D4D4] rounded-md relative">
                    <div className="p-1" onClick={handleHelpDropdown}>
                        <HelpIcon />
                    </div>
                    <Dropdown isOpen={helpDropDown} className="mt-4">
                        <p onClick={() => (handleHelpDropdown(), openModal("faq"))} className="py-2 px-2 hover:bg-slate-100 cursor-pointer">FAQ</p>
                        <p onClick={() => (handleHelpDropdown(), openModal("support"))} className="py-2 px-2 hover:bg-slate-100 cursor-pointer">Contact Support</p>
                    </Dropdown>
                </div>
                <Link href={"/dashboard/notifications"} className="border border-[#D4D4D4] rounded-md p-1">
                    <NotificationIcon />
                </Link>
                <div className="flex gap-1 items-center relative cursor-pointer">
                    <div className="flex gap-1 items-center" onClick={handleDropDown}>
                        <div className="bg-slate-600 w-8 h-8 rounded-full">
                        </div>
                        <DropdownIcon />
                    </div>
                    <Dropdown isOpen={displayDropDown} className="mt-4">
                        <Link href={"/dashboard/settings"} className="py-2 px-2 hover:bg-slate-100 cursor-pointer">Settings</Link>
                    </Dropdown>
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