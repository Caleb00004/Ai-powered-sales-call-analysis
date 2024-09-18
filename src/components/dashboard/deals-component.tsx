import { globalState } from "../../../api-feature/apiSlice"
import DealsManager from "./manager/deals-manager"
import DealSalesrep from "./sales-rep/deals-salesrep"

const DealsComponent = () => {
    const {account_type} = globalState
    
    return (
        <div>
            {account_type === "manager" && <DealsManager />}
            {account_type === "sales-rep" && <DealSalesrep />}
        </div>
    )
}

export default DealsComponent
