import Modal from "../primary/Modal"
import Input from "../primary/input"
import Button from "../primary/Button"
import { FC } from "react";
import { dealFormType } from "../dashboard/manager/deals-manager";
import ActivityIndicator from "../secondary/ActivityIndicator";
import { dealStagesType } from "../../../api-feature/deals/deal-type";
import Xicon from "../../../public/svgs/x-icon.svg"

interface props {
    modalOpen: boolean;
    closeModal: () => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleAddNewDeal: (e:React.FormEvent<HTMLFormElement>) => void;
    newDealDetails: dealFormType
    dealStagesData: dealStagesType[];
    loading: boolean
    salesRep: {name: string, value: number}[]
    handleRemoveSalesRep: (salesRepToRemove: number) => void
}

const NewdealModal:FC<props> = ({modalOpen, closeModal, loading, handleRemoveSalesRep, handleAddNewDeal, salesRep, dealStagesData, handleOnChange, newDealDetails}) => {

    const dealOptions = [] as {value: string | number, name: string}[]
    dealStagesData?.map(item => dealOptions.push({value: item.id, name: item.name}))

    return (
         <Modal
            isOpen={modalOpen}
            onClose={closeModal}
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
                <Button disabled={loading || (!newDealDetails.name || !newDealDetails.client || !newDealDetails.stage || newDealDetails.saleReps.length === 0 )} type="submit" className="mt-3 disabled:bg-slate-600 disabled:cursor-not-allowed">
                    {loading ? <ActivityIndicator /> : "Save"}
                </Button>
            </form>
        </Modal>
    )
}

export default NewdealModal