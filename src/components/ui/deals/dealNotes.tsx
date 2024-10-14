import AttachmentIcon from "../../../../public/svgs/attach-icon.svg"
import SendIcon from "../../../../public/svgs/send-icon.svg"
import MoreIcon from "../../../../public/svgs/more-icon.svg"
import { FC, useState } from "react"
import { usePostCreateNoteMutation } from "../../../../api-feature/apiSlice"
import toast from "react-hot-toast"

interface props {
    notesData: [];
    dealId: string
}

const DealNotes:FC<props> = ({notesData, dealId}) => {
    const [note, setNote] = useState("")
    const [createNote] = usePostCreateNoteMutation()
    const [loading, setLoading] = useState(false)

    const handleCreateNote = () => {
        const toastId = toast.loading("loading")

        setLoading(true)

        createNote({message: note, id: dealId}).unwrap()
            .then(fulfilled => {
                setLoading(false)
                toast.dismiss(toastId)
                toast.success("Note Updated")
                console.log(fulfilled)
            })
            .catch(rejected => {
                setLoading(false)
                toast.dismiss(toastId)
                toast.error("Error occured")
                console.log(rejected)
            })
    }

    return (
        <div className="bg-white flex flex-col border pt-6 h-[70vh] sm:h-[75vh]">
            <div className="flex flex-col gap-4 p-3 overflow-auto">
                
                {notesData.map(item => (
                    <div className="flex w-full rounded-lg flex-shrink-0 bg-[#6FA9E21A] px-2 pt-2 pb-4 gap-3 relative">
                        <div onClick={() => console.log("CJJ")}  className=" absolute right-4 rotate-[90deg] scale-[0.8] py-2 cursor-pointer">
                            <MoreIcon  />
                        </div>
                        <div className="bg-slate-600 flex-shrink-0 h-8 w-8 rounded-full  "></div>
                        <div>
                            <div className="flex gap-8 mb-2 items-center ">
                                <p className=" text-[#333333] text-[18px] font-[500]">Elizabeth Andrew</p>
                                <p className="text-[#6D6D6D] text-[13.5px] font-[500]">8:29am. 19/05/2024</p>
                            </div>
                            <p className="text-[#6D6D6D] font-[400] text-[15px] w-[95%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam fugiat optio natus atque nihil dolore ipsam, impedit expedita voluptatibus officia aliquam, doloremque inventore rerum necessitatibus ab rem! Ad, veniam! Iusto?</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white flex items-center gap-3 border-t mt-auto p-3">
                <AttachmentIcon />
                <div className="flex w-full relative">
                    <button disabled={loading} onClick={handleCreateNote} className=" disabled:cursor-not-allowed"><SendIcon className="absolute right-4 bottom-2 cursor-pointer text-[#0073E6]"/></button>
                    <input className="bg-[#F8F9FD] w-full px-4 py-2 rounded-3xl" type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Type your message here..." />
                </div>
            </div>
        </div>  
    )
}

export default DealNotes