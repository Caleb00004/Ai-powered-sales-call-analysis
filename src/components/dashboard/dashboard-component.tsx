import ManagerDashboard from "./manager/dashboard-manager"
import SalesrepDashboard from "./sales-rep/dashboard-salesrep"
import AdminDashboard from "./admin/dashboard-admin"
import { globalState } from "../../../api-feature/apiSlice"

const DashboardComponent = () => {
    const {account_type} = globalState
    
    return (
        <div>
            {account_type === "admin" && <AdminDashboard />}
            {account_type === "manager" && <ManagerDashboard />}
            {account_type === "sales-rep" && <SalesrepDashboard />}
        </div>
    )
}

export default DashboardComponent
