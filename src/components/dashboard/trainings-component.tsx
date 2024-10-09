import { globalState, useGetTrainingsQuery } from "../../../api-feature/apiSlice"
import Button from "../primary/Button"
import Search from "../secondary/Search"
import MoreIcon from "../../../public/svgs/more-icon.svg"
import FilterIcon from "../../../public/svgs/filter-icon.svg"
import { useRouter } from "next/router"
import { ModulesData } from "@/testData"
import { SetStateAction, useCallback, useState } from "react"
import Dropdown from "../secondary/Dropdown"
import DropdownItem from "../secondary/DropdownItem"
import AssignTrainingModal from "../modals/assigntraining-modal"

type formType = {
    module: string
    topics: string
    teamMembers: string[]
}

type modalType = "assign-topic" | "assign-training"

const TrainingsComponent = () => {
    const {data, status, error} = useGetTrainingsQuery()
    console.log(data)
    console.log(status)
    const routeTo = useRouter()
    const [selectedModule, setSelectedModule] = useState({})
    const [selectedTopic, setSelectedTopic] = useState({module: "", topic: ""})
    const [openModulesDropdown, setOpenModulesDropdown] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState("" as modalType)
    const [openTopicDropdown, setOpenTopicDropdown] = useState(null)
    const [assignTopicDetails, setAssignTopicDetails] = useState<formType>({
        module: "",
        topics: "",
        teamMembers: []
    })

    const handleModulesDropDown = (id: SetStateAction<null>) => {
        setOpenModulesDropdown(openModulesDropdown === id ? null : id); // Toggle the dropdown for clicked item
    };

    const handleTopicDropDown = (id: SetStateAction<null>) => {
        setOpenTopicDropdown(openTopicDropdown === id ? null : id); // Toggle the dropdown for clicked item
    };

    const closeAllDropdowns = () => {
        setOpenModulesDropdown(null)
        setOpenTopicDropdown(null)
    }

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = (string: modalType) => {
        setModalOpen(true);
        setModalType(string)
    };

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name as keyof formType
        const value = e.target.value
        
        if (key === "teamMembers") {
            setAssignTopicDetails((prev) => {
                // Check if the team member is already in the array
                if (!prev.teamMembers.includes(value)) {
                    return {
                        ...prev,
                        [key]: [...prev.teamMembers, value], // Add team member if not present
                    };
                }

                // If the team member is already present, return the state as-is
                return prev;
            });
            return;
        }

        setAssignTopicDetails(prev => ({...prev, [key]: value}))
    }, [])

    const handleRemoveTeamMember = (memberToRemove: string) => {
        setAssignTopicDetails(prev => ({
            ...prev,
            teamMembers: prev.teamMembers.filter(member => member !== memberToRemove)
        }));
    }

    return(
        <>
            <AssignTrainingModal
                selectedModule={selectedModule}
                modalOpen={modalOpen}
                closeModal={closeModal}
                modalType={modalType}
                handleOnChange={handleOnChange}
                handleRemoveTeamMember={handleRemoveTeamMember}
                selectedTopic={selectedTopic}
                assignTopicDetails={assignTopicDetails}
            />
            
            <div className="text-[#333333]">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <h1 className="text-[20px] font-[600] text-[#333333]">Training</h1>
                    <div className="flex gap-3 ml-auto mt-2 sm:mt-0">
                        <div className="w-[160px]">
                            <Button onClick={() => routeTo.push("./trainings/userId")} className="py-[6px] bg-white border border-[#B3387F] text-[13px]"><span className="text-[#B3387F]">Personal Training</span></Button>
                        </div>
                        <div className="w-[160px]">
                            <Button onClick={() => routeTo.push("./trainings/progress")} className="py-[6px] text-[13px]">View Team Progress</Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mdx2:flex-row mt-7 gap-4">
                    <div className="bg-white flex-[0.5] h-[75vh] overflow-auto px-3 py-3">
                        <div className="flex justify-between mb-4 items-center">
                            <p className="text-[18px] font-[500]">Modules</p>
                            <div className="flex items-center gap-2">
                                <FilterIcon className="h-4 w-4 text-[#C32782]" />
                                <p className="text-[#5B5B5B] text-[14px]">filter by</p>
                            </div>
                        </div>
                        <Search showIcon className="w-[100%]" value="" onChange={() => {}} />
                        <div className="flex flex-col mt-2 ">
                            {ModulesData.map(item => (
                                // @ts-ignore
                                <div onClick={() => (setSelectedModule(item))} className={`relative flex ${item.id === selectedModule.id ? "bg-[#CBF3FF66]" : "bg-none"} text-[15px] font-[500] justify-between items-center cursor-pointer hover:bg-[#CBF3FF66] duration-[0.09s] py-3 px-2`}>
                                    <p>{item.name}</p>
                                    {/* @ts-ignore */}
                                    <div onClick={() => (closeAllDropdowns(), handleModulesDropDown(item.id))} className=" h-4 flex items-center">
                                        <MoreIcon className="rotate-[90deg] scale-[0.7]" />
                                    </div>
                                    <Dropdown className="z-[3] mt-2 ml-auto right-0" isOpen={openModulesDropdown === item.id}>
                                        <DropdownItem onClick={() => openModal("assign-training")} text="Assign Training" />
                                        <DropdownItem onClick={() => {}} text="View Description" />
                                        <DropdownItem onClick={() => {}} text="View Team Progresss" />
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white min-h-[30em] mdx2:h-auto p-1 flex-[1] flex flex-col overflow-auto">
                        <div className="bg-[#F8F8FA] py-4 font-[800] text-[16px] flex justify-between px-20">
                            <p>Topic</p>
                            <p>Enrolled Team</p>
                        </div>
                        {/* @ts-ignore */}
                        {!selectedModule.id && 
                            <div className=" flex-1 flex items-center justify-center">
                                <p className="font-[500]">Select A Module</p>
                            </div>
                        }
                        {/*  @ts-ignore */}
                        {selectedModule.id && selectedModule?.topics?.map((item, i) =>(
                            <div className="flex py-4 text-[15px] font-[500] justify-between border-b relative">
                                <div className="flex gap-16 pl-3 flex-1">
                                    <p>{i+1}</p>
                                    <p>{item?.name}</p>
                                </div>
                                <div className="flex items-center justify-end gap-14 flex-1">
                                    <p>{item?.enrolledTeam}</p>
                                    <div onClick={() => (closeAllDropdowns(), handleTopicDropDown(i + 1))} className=" h-4 flex items-center mr-8">
                                        <MoreIcon className="rotate-[90deg] scale-[0.7]" />
                                    </div>
                                </div>
                                <Dropdown className="z-[3] mt-2 ml-auto right-0" isOpen={openTopicDropdown === (i + 1)}>
                                    {/* @ts-ignore */}
                                    <DropdownItem onClick={() => (openModal("assign-topic"), setSelectedTopic({module: selectedModule.name, topic: item.name}), closeAllDropdowns() )} text="Assign Topic" />
                                    <DropdownItem onClick={() => {}} text="View Description" />
                                    <DropdownItem onClick={() => {}} text="View Enrolled Team" />
                                </Dropdown>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default TrainingsComponent