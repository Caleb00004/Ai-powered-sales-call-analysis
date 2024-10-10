import { FC } from "react";
import Modal from "../primary/Modal"
import Input from "../primary/input"
import { Checkbox } from "@mui/material"
import Button from "../primary/Button";
import Xicon from "../../../public/svgs/x-icon.svg"
import { trainingModuleType } from "../../../api-feature/training/trainings-type";

type modalType = "assign-topic" | "assign-training"

interface props {
    modalOpen: boolean;
    modalType: modalType;
    closeModal: () => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleRemoveTeamMember: (memberToRemove: string) => void;
    selectedTopic: {module: string; topic: string}
    assignTopicDetails: {
        module: string,
        topics: string,
        teamMembers: string[]
    }
    selectedModule: trainingModuleType
}

const AssignTrainingModal:FC<props> = ({selectedModule, modalOpen, modalType, closeModal, handleRemoveTeamMember, handleOnChange, selectedTopic, assignTopicDetails}) => {
    return (
        <Modal
            isOpen={modalOpen}
            onClose={closeModal}
        >
            {modalType === "assign-topic" ? 
                <div className="pt-7 pb-12 px-14">
                    <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Assign Topic</p>
                    <Input 
                        disabled
                        className="mb-[8px]"
                        value={selectedTopic.module}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Module</label>} 
                        placeholder="Sample module Name"
                        type="text"
                        name="module"
                    />
                    <Input 
                        disabled
                        className="mb-[8px]"
                        value={selectedTopic.topic}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Topics</label>} 
                        placeholder="Sample Topics Name"
                        type="text"
                        name="topics"
                    />
                    <Input 
                        className="mb-[8px]"
                        value=""
                        onChange={handleOnChange}
                        select
                        options={["Angela", "chris", "John"]}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Team Members</label>} 
                        placeholder="Select Team members"
                        type="text"
                        name="teamMembers"
                    />
                    <div className="flex gap-2 flex-wrap"> 
                        {assignTopicDetails.teamMembers.map(item => (
                            <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{item}</span> <Xicon onClick={() => handleRemoveTeamMember(item)} className="scale-[0.8]" /></p>
                        ))}
                    </div>
                    <Button className="mt-3">
                        Save
                    </Button>
                </div>
                : 
                <div className="pt-7 pb-12 px-14">
                    <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Assign Training</p>
                    <Input 
                        disabled
                        className="mb-[8px]"
                        value={selectedModule.title}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Modules</label>} 
                        placeholder="Sample Module Name"
                        type="text"
                        name="topics"
                    />
                    <div className="my-5">
                        <p className="text-[#333333] font-medium text-[0.9em]">Topics</p>
                        <div className="grid grid-cols-2 w-[20em] ">
                            {selectedModule?.TrainingTopic?.map(item => (
                                <div className="flex text-[14px] items-center gap-0 ">
                                    <Checkbox className="h-6" />
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <Input 
                        className="mb-[8px]"
                        value=""
                        onChange={handleOnChange}
                        select
                        options={["Angela", "chris", "John"]}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Team Members</label>} 
                        placeholder="Select Team members"
                        type="text"
                        name="teamMembers"
                    />
                    <div className="flex gap-2 flex-wrap"> 
                        {assignTopicDetails.teamMembers.map(item => (
                            <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{item}</span> <Xicon onClick={() => handleRemoveTeamMember(item)} className="scale-[0.8]" /></p>
                        ))}
                    </div>

                    <Button className="mt-10">Save</Button>
                </div>
            }
        </Modal>
    )
}

export default AssignTrainingModal