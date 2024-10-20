import Modal from "../primary/Modal"
import Input from "../primary/input"
import Button from "../primary/Button"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers"
import { FC, useCallback, useContext, useState } from "react";
import { dataContext } from "../contexts/dataContext";
import { usePostScheduleMeetingMutation } from "../../../api-feature/apiSlice";
import toast from "react-hot-toast";
import ActivityIndicator from "../secondary/ActivityIndicator";

interface props {
    modalOpen: boolean;
    closeModal: () => void;
    dealId: string;
}

interface formType {
    name: string,
    date: string,
    time: string,
    platform?: number
}

const ScheduleMeetingModal:FC<props> = ({modalOpen, closeModal, dealId}) => {
    const [scheduleMeeting] = usePostScheduleMeetingMutation()
    const [loading, setLoading] = useState(false)
    const {platformData, platformStatus} = useContext(dataContext)
    const [meetingDetails, setMeetingDetails] = useState<formType>({
        name: "",
        platform: undefined,
        date: "",   
        time: "",
    })

    const handleScheduleMeeting = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(meetingDetails)
        try {
            setLoading(true)
            const platform = platformData.find(item => item.id == meetingDetails.platform)?.name
            // @ts-ignore
            await scheduleMeeting({id: dealId, body:{title: meetingDetails.name, platform: platform, scheduledTime: `${meetingDetails?.date} ${meetingDetails?.time}`}}).unwrap()
                .then(fulfilled => {
                    toast.success("Meeting scheduled")
                    closeModal()
                })
                .catch(rejected => {
                    console.error(rejected)
                    toast.error("Error occured")
                })
        } catch(error) {
            console.error(error)
            toast.error("Error occured")
        } finally {
            setLoading(false)
        }
    }

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name as keyof formType
        const value = e.target.value

        setMeetingDetails(prev => ({...prev, [key]: value}))
    }, [])

    const platformOptions = [] as {value: string | number, name: string}[]
    platformData?.map(item => platformOptions.push({value: item.id, name: item.name}))

    const padWithZero = (value: number) => String(value).padStart(2, '0');

    return (
        <Modal
            isOpen={modalOpen}
            onClose={loading ? () => {} : closeModal}
        >
            <form onSubmit={handleScheduleMeeting} className="pt-7 pb-12 px-14 ">
                <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Schedule Meeting</p>
                <Input 
                    className="mb-[15px]"
                    value={meetingDetails.name}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Meeting Name</label>} 
                    placeholder="Enter name"
                    type="text"
                    name="name"
                />
                <Input 
                    select
                    options={platformOptions}
                    className="mb-0 text-[#333333] text-[14px]"
                    // @ts-ignore
                    value={meetingDetails?.platform}
                    onChange={handleOnChange}
                    label={
                        <label 
                            className="text-[#333333] font-medium text-[1em] flex gap-3"
                        >
                            Platform 
                            {platformStatus === "pending" && <div className="scale-[0.6] origin-left"><ActivityIndicator color="black" /></div>}
                            {platformStatus === "rejected" && <span className="text-[12px] text-red-600 italic">error occured</span>}
                        </label>
                    } 
                    placeholder="Select Platform"
                    type="text"
                    name="platform"
                />
                <div className="mt-[-0.4em]">
                    <label className="text-[#333333] font-medium text-[0.9em]">Date</label>
                    <DatePicker
                        sx={{ padding: 0, width: '100%', marginTop: '3px' }}

                        onChange={(val) => {
                            // @ts-ignore
                            const year = val?.$y;
                            // @ts-ignore
                            const month = padWithZero(val?.$M + 1); // $M is zero-indexed, so we add 1
                            // @ts-ignore
                            const day = padWithZero(val?.$D);
                            setMeetingDetails((prev) => ({
                            ...prev,
                            date: `${year}-${month}-${day}`,
                            }));
                        }}
                    />
                </div> 

                <div className="flex gap-2">
                    <div className="mt-2 flex-[1]">
                        <label className="text-[#333333] font-medium text-[0.9em]">Time</label>
                        <TimePicker
                            sx={{ padding: 0, width: '100%', marginTop: '3px' }}
                            label="Select Time"
                            onChange={(val) => {
                            // @ts-ignore
                            const hours = padWithZero(val?.$H);
                            // @ts-ignore
                            const minutes = padWithZero(val?.$m);
                            setMeetingDetails((prev) => ({
                                ...prev,
                                time: `${hours}:${minutes}`,
                            }));
                            }}
                        />
                    </div>
                </div>

                <Button disabled={!meetingDetails.date || !meetingDetails.name || !meetingDetails.platform || !meetingDetails.time} type="submit" className="mt-5 h-[2.68em]" >
                    {loading ? <ActivityIndicator /> : "Save"}
                </Button>
            </form>
        </Modal>
    )
}

export default ScheduleMeetingModal