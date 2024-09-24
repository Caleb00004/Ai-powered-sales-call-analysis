import DashboardLayout from "@/components/layouts/DashboardLayout"
import { useRouter } from "next/router"

const CompanySubscriptions = () => {

    const router = useRouter()
    console.log(router)

    return (
        <DashboardLayout>
            <p>Company Subscription Details</p>
        </DashboardLayout>
    )
}

export default CompanySubscriptions