import { ChangeEventHandler, FC } from "react"
import Modal from "./Modal"
import Button from "./Button"
import { dealsDataType } from "@/testData"

interface props {
    cellData: dealsDataType
    isOpen: boolean
    onClose: () => void
    handleValueChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const EditTableModal:FC<props> = ({cellData, isOpen, onClose, handleValueChange}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={" px-6 py-9 max-h-[80vh] overflow-auto"}
        >
            <div className="flex flex-col gap-2">
                {Object.entries(cellData).map(([key, value]) => {
                    if (key === "id") return

                    return (
                        <div key={key} className="flex flex-col">
                            <label className="mb-1 font-medium">{key}</label>
                            {key === 'stage' ? (
                                <select
                                name={key}
                                value={value}
                                onChange={handleValueChange}
                                className="p-2 border rounded-md"
                                >
                                <option value="Prospecting">Prospecting</option>
                                <option value="Negotiating">Negotiating</option>
                                <option value="Closing">Closing</option>
                                </select>
                            ) : key === 'status' ? (
                                <select
                                name={key}
                                value={value}
                                onChange={handleValueChange}
                                className="p-2 border rounded-md"
                                >
                                <option value="Open">Open</option>
                                <option value="Closed">Closed</option>
                                </select>
                            ) : (
                                <input
                                type="text"
                                name={key}
                                value={value}
                                onChange={handleValueChange}
                                className="p-2 border rounded-md"
                                />
                            )}
                        </div>
                    )
                })}
            </div>
            <Button className="mt-4" >Update</Button>
        </Modal>
    )
}

export default EditTableModal