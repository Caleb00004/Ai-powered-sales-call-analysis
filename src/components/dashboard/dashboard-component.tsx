import ManagerDashboard from "./manager/dashboard-manager"
import SalesrepDashboard from "./sales-rep/dashboard-salesrep"
import AdminDashboard from "./admin/dashboard-admin"
import { useContext, useEffect } from "react"
import { appContext } from "../contexts/appContext"

const DashboardComponent = () => {
    const {accountType: account_type} = useContext(appContext)

    return (
        <div>
            {account_type === "admin" && <AdminDashboard />}
            {(account_type === "manager" || account_type === "owner") && <ManagerDashboard />}
            {account_type === "sales personel" && <SalesrepDashboard />}
        </div>
    )
}

export default DashboardComponent
