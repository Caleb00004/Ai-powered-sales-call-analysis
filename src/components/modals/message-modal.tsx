import Button from "../primary/Button";
import Input from "../primary/input";
import Modal from "../primary/Modal"
import { FC } from "react"

interface props {
    modalOpen: boolean;
    closeModal: () => void;
    message: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const MessageModal:FC<props> = ({ modalOpen, closeModal, message, handleOnChange }) => {
    return (
        <Modal
            isOpen={modalOpen}
            onClose={closeModal}
        >
            <div className="pt-7 pb-12 px-14">
                <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Write Message</p>
                <Input 
                    className="mb-[8px]"
                    value={message}
                    onChange={handleOnChange}
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Module</label>} 
                    placeholder="type message"
                    type="text"
                    name="module"
                />
                <Button>
                    Send
                </Button>
            </div>
        </Modal>
    )
}

export default MessageModal