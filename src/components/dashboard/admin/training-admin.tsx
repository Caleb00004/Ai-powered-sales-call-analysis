import Button from "@/components/primary/Button"
import { useRouter } from "next/router"

const AdminTraining = () => {
    const router = useRouter()

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Training Management</h1>
                <div className="w-[160px]">
                    <Button onClick={() => {}} className="py-[6px] text-[13px]">Create New Module</Button>
                </div>
            </div>
        </div>
    )
}

export default AdminTraining