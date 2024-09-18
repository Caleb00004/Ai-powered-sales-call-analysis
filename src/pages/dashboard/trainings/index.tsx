import DashboardLayout from "@/components/layouts/DashboardLayout"
import TrainingsComponent from "@/components/dashboard/trainings-component"
import { globalState } from "../../../../api-feature/apiSlice"
import { useRouter } from "next/router"
import { useLayoutEffect } from "react"

const Trainings = () => {
    const account_type = globalState.account_type
    const routeTo = useRouter()

    useLayoutEffect(() => {
        if (account_type !== "manager") {
            routeTo.push("/dashboard")
            return
        }
    },[])

    return (
        <DashboardLayout>
            {account_type === "manager" && <TrainingsComponent />}
        </DashboardLayout>
    )
}

export default Trainings