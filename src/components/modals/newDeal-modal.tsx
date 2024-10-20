import Modal from "../primary/Modal"
import Input from "../primary/input"
import Button from "../primary/Button"
import { FC, useCallback, useState } from "react";
import { dealFormType } from "../dashboard/manager/deals-manager";
import ActivityIndicator from "../secondary/ActivityIndicator";
import { dealStagesType } from "../../../api-feature/deals/deal-type";
import Xicon from "../../../public/svgs/x-icon.svg"
import { usePostCreateDealMutation } from "../../../api-feature/apiSlice";
import toast from "react-hot-toast";

interface props {
    modalOpen: boolean;
    closeModal: () => void;
    dealStagesData: dealStagesType[];
    salesRep: {name: string, value: number}[]
}

const NewdealModal:FC<props> = ({modalOpen, closeModal, salesRep, dealStagesData}) => {
    const [createDeal] = usePostCreateDealMutation()
    const [loading, setLoading] = useState(false)
    const [newDealDetails, setNewDealDetails] = useState<dealFormType>({
        name: "",
        client: "",
        stage: "",
        saleReps: []
    })

    
    const handleRemoveSalesRep = (salesRepToRemove: number) => {
        setNewDealDetails(prev => ({
            ...prev,
            saleReps: prev.saleReps.filter(member => member !== salesRepToRemove)
        }));
    }
    
    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name as keyof dealFormType
        const value = e.target.value
        
        if (key === "saleReps") {
            console.log(e)
            console.log(key)
            console.log(value)
            setNewDealDetails((prev) => {
                // Check if the team member is already in the array
                if (!prev.saleReps.includes(Number(value))) {
                    return {
                        ...prev,
                        [key]: [...prev.saleReps, Number(value)], // Add team member if not present
                    };
                }

                // If the team member is already present, return the state as-is
                return prev;
            });
            return;
        }

        setNewDealDetails(prev => ({...prev, [key]: value}))
    }, [])

    const handleAddNewDeal = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const stage = Number(newDealDetails.stage)
        
        try {
            createDeal({name: newDealDetails.name, client: newDealDetails.client, dealStageId: stage, salesReps: newDealDetails.saleReps}).unwrap()
                .then(fulfilled => {
                    setLoading(false)
                    toast.success("Deal Created")
                    closeModal()
                    setNewDealDetails({
                        name: "",
                        client: "",
                        stage: "",
                        saleReps: []
                    })
                })
                .catch(rejected => {
                    setLoading(false)
                    toast.error("Error occured")
                })
        } catch(error) {
            setLoading(false)
            toast.error("Error occured")
        }

    }
    const dealOptions = [] as {value: string | number, name: string}[]
    dealStagesData?.map(item => dealOptions.push({value: item.id, name: item.name}))

    return (
         <Modal
            isOpen={modalOpen}
            onClose={loading ? () => {} : closeModal}
        >
            <form onSubmit={handleAddNewDeal} className="pt-7 pb-12 px-14">
                <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Deal</p>
                <Input 
                    className="mb-[8px]"
                    value={newDealDetails.name}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Name</label>} 
                    placeholder="Enter name"
                    type="text"
                    name="name"
                />
                <Input 
                    className="mb-[8px]"
                    value={newDealDetails.client}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Client/Company</label>} 
                    placeholder="Enter company name"
                    type="text"
                    name="client"
                />
                <Input 
                    className="mb-[8px]"
                    value={newDealDetails.stage}
                    onChange={handleOnChange}
                    select
                    options={dealOptions}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Stage</label>} 
                    placeholder="Select Stage"
                    type="text"
                    name="stage"
                />
                <Input 
                    className="mb-[8px]"
                    value=""
                    onChange={handleOnChange}
                    select
                    options={salesRep}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Assigned sales rep</label>} 
                    placeholder="Select sales rep"
                    type="text"
                    name="saleReps"
                />
                <div className="flex gap-2 flex-wrap"> 
                    {newDealDetails.saleReps.map(itemValue => (
                        <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{salesRep.find(item => item.value === Number(itemValue))?.name}</span> <Xicon onClick={() => handleRemoveSalesRep(itemValue)} className="scale-[0.8]" /></p>
                    ))}
                </div>
                <Button disabled={loading || (!newDealDetails.name || !newDealDetails.client || !newDealDetails.stage || newDealDetails.saleReps.length === 0 )} type="submit" className="mt-3 disabled:bg-slate-600 disabled:cursor-not-allowed h-[2.68em]">
                    {loading ? <ActivityIndicator /> : "Save"}
                </Button>
            </form>
        </Modal>
    )
}

export default NewdealModal