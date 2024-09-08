import { FC, ReactNode, useState } from "react"
import Navbar from "../secondary/Navbar"
import Footer from "../secondary/Footer"
import MessageIcon from "../../../public/svgs/message.svg"
import Modal from "../primary/Modal"
import Logo from "../primary/Logo"
import SendIcon from "../../../public/svgs/send-icon.svg"

interface props {
    children: ReactNode
}

const HomeLayout:FC<props> = ({children}) => {
    const [modalOpen, setModalOpen] = useState(false)

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };
    
    return (
        <div className="overflow-hidden">
            <Navbar />
            <main className="text-white pt-[4.5em] bg-[#161529] relative">
                <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                >
                    <div className="bg-white relative flex gap-2 py-3">
                        <MessageIcon className="h-12 w-12" />
                        <div className=" flex flex-col items-start ">
                            <Logo classname="w-[100px] h-[25px] -translate-x-2" />
                            <p className="text-[#545454]">Online</p>
                        </div>
                        <p onClick={closeModal} className=" cursor-pointer absolute text-[#545454] right-4 top-3 font-[600]">X</p>
                    </div>

                    <div className="h-[50vh] bg-[#F8F8FA] overflow-auto">

                    </div>
                    <div className="bg-white border flex border-[#D4D4D4]">
                        <div className="relative w-full">
                            <input placeholder="Type Your Mesage here" className="py-2 px-5 w-full text-black"/>
                            <SendIcon className="absolute top-2 right-5 text-[#A3A6A9]" />
                        </div>
                    </div>
                    <div className="bg-[#F0EFEF] text-[#545454] font-[500] text-center text-[14px] py-2">Powered by Durekt</div>
                </Modal>
                <MessageIcon onClick={openModal} className="fixed z-[5] bottom-5 cursor-pointer right-5 h-20 w-20 " />
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout