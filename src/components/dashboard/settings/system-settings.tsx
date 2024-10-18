import Button from "@/components/primary/Button"
import Input from "@/components/primary/input"
import BotIcon from "../../../../public/svgs/bot-icon.svg"
import Image from "next/image"
import ChromeIcon from "../../../../public/svgs/chrome-icon.svg"
import DownloadIcon from "../../../../public/svgs/download-icon.svg"
import CheckIcon from "../../../../public/svgs/check-icon.svg"
import { profileType, SkillsType } from "../../../../api-feature/types"
import { FC, useContext, useEffect, useState } from "react"
import useModal from "@/components/util/useModal"
import { dataContext } from "@/components/contexts/dataContext"
import EditSkillsModal from "@/components/modals/editSkills-modal"

interface props {
    data: profileType
}

const SystemSettings:FC<props> = ({data}) => {
    const {availableSkills, availableSkillsStatus} = useContext(dataContext)
    const {modalOpen, openModal, closeModal} = useModal()
    const existingSkills = [
        {
            id: 4,
            name: "Value Over Price",
            symbol: "VP"
        },
        {
            id: 2,
            name: "Becoming Obsessed",
            symbol: "BO"
        },
    ]
    const [topSkills, setTopSkills] = useState([] as {skillId: number}[])
    
    useEffect(() => {
        const newArray = [] as {skillId: number}[]
        existingSkills?.map(item => newArray.push({skillId: item.id}))

        setTopSkills(newArray)
    },[availableSkillsStatus])

    const handleUpdateSkills = (skill: SkillsType) => {
        console.log(skill);
        // Check if the skill is already in the skills array
        const isSkillIncluded = topSkills.some(item => item.skillId === skill.id);

        if (!isSkillIncluded) {
            // If the skill is not included, add it
            setTopSkills(prev => ([
                ...prev, {skillId: skill.id}
            ]));

        } else {
            // If the skill is included, remove it
            setTopSkills(prev => ([
                ...prev.filter(item => item.skillId !== skill.id)
            ]));
        }
    }
    return (
        <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white px-4 mdx2:px-7 py-6 mb-6 rounded-md text-left text-[14px] ">
            
            <EditSkillsModal
                modalOpen={modalOpen}
                closeModal={closeModal}
                availableSkills={availableSkills}
                topSkills={topSkills}
                handleUpdateSkills={handleUpdateSkills}
            />

            <h1 className="text-[16px] mb-3 text-black font-[600]">System Settings</h1>
            <div className="border flex flex-col mdx2:flex-row gap-4 justify-between px-5 py-6 rounded-lg mb-3 items-center border-[#D4D4D4]">
                <div className="mr-auto">
                    <p>Subscription plan</p>
                    <div className="flex justify-center items-center gap-1 bg-[#307EA71A] text-[#307EA7] text-center rounded-full py-1 mt-1">
                        <div className="h-[7px] w-[7px] bg-[#307EA7] rounded-full" />
                        <p className=" "> Personal</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3">
                    <p className="text-[#AE0317] font-[500]">Cancel subscription</p>
                    <div className="w-[150px]">
                        <Button>Upgrade</Button>
                    </div>
                </div>
            </div>

            <div className="border flex flex-col mdx2:flex-row mdx2:gap-[25%] justify-between px-5 py-6 rounded-lg mb-3 items-center border-[#D4D4D4]">
                <Input 
                    label={<p>Company name</p>}
                    placeholder="company name"
                    disabled
                    value={data?.company?.name}
                    onChange={() => {}}
                    name="companyName"
                    type="text"
                />
                <div className="w-[150px]">
                    <Button>Update</Button>
                </div>
            </div>

            <div className="border flex flex-col mdx2:flex-row gap-4 justify-between px-5 py-6 rounded-lg mb-3 items-center border-[#4A4B571A]">
                <p>Top 5 Skills Configuration</p>
                <div className="w-[100px]">
                    <Button onClick={openModal} className=" bg-transparent border border-[#C32781]"><span className="text-[#C32781]">Edit</span></Button>
                </div>
            </div>

            <h1 className="text-[16px] mb-3">Durekt Recording Setting</h1>
            
            <div className="border flex justify-between px-5 py-6 rounded-lg mb-3 items-center border-[#D4D4D4]">
                <p>Auto Record all Scheduled Meetings</p>
            </div>
            
            <div className="border flex justify-between px-5 py-6 rounded-lg mb-3 items-center border-[#D4D4D4]">
                <p>Non-English Language support</p>
            </div>

            <div className="border flex flex-col mdx2:flex-row justify-between px-5 py-6 gap-4 rounded-lg mb-3 items-center border-[#D4D4D4]">
                <div className="flex gap-2">
                    <BotIcon className="flex-shrink-0" />
                    <div>
                        <p className="text-[16px]">Bot Name: <span className="text-[14px]">PowerBi.inc</span></p>
                        <p>The name your Durekt bot will go by during the call</p>
                    </div>
                </div>
                <div className="w-[100px]">
                    <Button className=" bg-transparent border border-[#C32781]"><span className="text-[#C32781]">Edit</span></Button>
                </div>
            </div>

            <div className="border flex flex-col justify-between px-4 mdx2:px-10 py-10 rounded-lg mb-6 gap-6 border-[#D4D4D4]">
                <div className="flex items-center gap-2">
                    <Image className="h-[45px] sm:h-[55px] w-[45px] sm:w-[55px]" height={50000} width={50000} alt="zoom" src={"/images/homepage/zoom.png"} />
                    <p>Zoom: <span className="text-[#1F9624] ml-4 inline-block">Fully Enabled</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <Image className="h-[45px] sm:h-[55px] w-[45px] sm:w-[55px]" height={50000} width={50000} alt="meet" src={"/images/homepage/google.png"} />
                    <p>Meet: <span className="text-[#1F9624] ml-4 inline-block">Fully Enabled</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <Image className="h-[45px] sm:h-[55px] w-[45px] sm:w-[55px]" height={50000} width={50000} alt="kixie" src={"/images/homepage/kixie.png"} />
                    <p>Kixie: <span className="text-[#1F9624] ml-4 inline-block">Fully Enabled</span></p>
                </div>
            </div>

            <div className="border flex flex-col mdx2:flex-row gap-4 justify-between  px-5 py-4 rounded-lg mb-3 items-center border-[#4A4B571A]">
                <div className="flex gap-2 items-center mr-auto">
                    <ChromeIcon className="flex-shrink-0" />
                    <p>Chrome Extension</p>
                </div>
                <div className="flex items-center gap-5">
                    <DownloadIcon className="scale-[0.85]" />
                    <p className="flex gap-2 rounded-md py-1 text-[#1F9624] bg-[#1F96241A] px-3 items-center">Installed <CheckIcon /> </p>
                </div>
            </div>

            <h1 className="text-[16px] mb-3">Delete</h1>

            <div className="border flex flex-col mdx2:flex-row gap-4 justify-between px-5 py-2 rounded-lg mb-3 items-center border-[#4A4B571A] text-[14px]">
                <div className="mr-auto">
                    <p className="mb-2 ">Delete Account</p>
                    <p className="text-[#AE0317] ">Deleting your account is permanent.</p>
                    <p className="text-[#AE0317] ">All data will be lost.</p>
                </div>
                <p className="text-[#AE0317] font-[600]">Delete Account</p>
            </div>

        </div>
    )
}

export default SystemSettings