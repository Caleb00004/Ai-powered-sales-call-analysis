import DashboardLayout from "@/components/layouts/DashboardLayout"
import { useRouter } from "next/router"

const CompanyDetails = () => {

    const router = useRouter()
    console.log(router)

    return (
        <DashboardLayout>
            <p>Company Details</p>
        </DashboardLayout>
    )
}

export default CompanyDetails