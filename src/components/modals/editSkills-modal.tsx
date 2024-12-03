import Modal from "../primary/Modal"
import Button from "../primary/Button"
import { Checkbox } from "@mui/material";
import { SkillsType } from "../../../api-feature/types";
import { FC, useState } from "react";
import ActivityIndicator from "../secondary/ActivityIndicator";
import toast from "react-hot-toast";

interface props {
    modalOpen: boolean;
    closeModal: () => void;
    handleUpdateSkills: (item: SkillsType) => void;
    availableSkills: SkillsType[]
    topSkills: {skillId: number}[]
}

const EditSkillsModal:FC<props> = ({modalOpen, closeModal, handleUpdateSkills, availableSkills, topSkills}) => {
    const [loading, setLoading] = useState(false)

    const handleUpdate = async () => {
        try {
            setLoading(true)
            // @ts-ignore
            await updateSkills(topSkills).unwrap()
                // @ts-ignore
                .then(fulfilled => {
                    console.log(fulfilled)
                    toast.success("Updated")
                })
                // @ts-ignore
                .catch(rejected => {
                    console.error(rejected)
                    toast.error("work in progress")
                })
        } catch(error) {
            console.error(error)
            toast.error("work in progress")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal 
            isOpen={modalOpen} 
            onClose={loading ? () => {} : closeModal} 
            containerClassname="w-[90%] md:w-[45em] h-[70vh] overflow-auto bg-white "
        >
            <div className="relative">
                <div className="bg-white border-b w-full h-12 sticky top-0 z-[2] flex justify-between items-center px-5">
                    <p className="text-[18px] text-[#333333] font-[600]">Top 5 skils</p>
                    <p onClick={closeModal} className="bg-slate-400 rounded-full px-[7px] text-slate-100 cursor-pointer"><p className="scale-[0.8]">x</p></p>
                </div>
                <div className="flex">
                    <div>
                        {availableSkills.slice(0, 13).map(item => (
                            <div onClick={() => handleUpdateSkills(item)} className=" cursor-pointer hover:bg-slate-100 flex items-center border-b py-3">
                                <Checkbox sx={{
                                    '&.Mui-checked': {
                                        color: "#B3387F"
                                    }
                                    }} 
                                    checked={topSkills.some(skill => skill.skillId === item.id)} onChange={() => console.log(item)} 
                                />
                                <p className="font-[500] pr-5">{item.symbol} = {item.name}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        {availableSkills.slice(13, 25).map(item => (
                            <div onClick={() => handleUpdateSkills(item)} className=" cursor-pointer hover:bg-slate-100 flex items-center border-b py-3">
                                <Checkbox sx={{
                                    '&.Mui-checked': {
                                        color: "#B3387F"
                                    }
                                    }} 
                                    checked={topSkills.some(skill => skill.skillId === item.id)} onChange={() => console.log(item)}
                                />
                                <p className="font-[500] pr-5">{item.symbol} = {item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                    
                <div className="mx-8 my-4">
                    <Button disabled={loading} onClick={handleUpdate} className="h-[2.88em]">{loading ? <ActivityIndicator /> : "Update"}</Button>
                </div>
            </div>
        </Modal>

    )
}

export default EditSkillsModal