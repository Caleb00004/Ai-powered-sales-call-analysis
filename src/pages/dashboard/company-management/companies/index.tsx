import DashboardLayout from "@/components/layouts/DashboardLayout"
import Button from "@/components/primary/Button"
import { useRouter } from "next/router"

const Companies = () => {
    const router = useRouter()

    return (
        <DashboardLayout>
            <h1>All Companies Page</h1>

            <div className="flex flex-col gap-5 w-[200px]">
                <Button onClick={() => router.push("/dashboard/company-management/companies/jffjfj939392")}>Details</Button>
                <Button onClick={() => router.push({pathname: "/dashboard/company-management/companies/subscription", query: {id: "jffjfj939392"}})}>Subscriptions</Button>
            </div>

        </DashboardLayout>
    )
}

export default Companies