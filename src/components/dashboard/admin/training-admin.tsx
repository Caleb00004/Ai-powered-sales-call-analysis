import Button from "@/components/primary/Button"
import { useRouter } from "next/router"

const AdminTraining = () => {
    const router = useRouter()

    return (
        <div>
            <p>Admin Training</p>

            <Button onClick={() => router.push("/dashboard/training-management/3848843")}>Module Details</Button>
        </div>
    )
}

export default AdminTraining