import { globalState } from "../../../api-feature/apiSlice"
import DealsManager from "./manager/deals-manager"
import DealSalesrep from "./sales-rep/deals-salesrep"
import { useContext } from "react"
import { appContext } from "../contexts/appContext"

const DealsComponent = () => {
    const {accountType: account_type} = useContext(appContext)

    return (
        <div>
            {(account_type === "manager" || account_type === "owner") && <DealsManager />}
            {account_type === "sales personel" && <DealSalesrep />}
        </div>
    )
}

export default DealsComponent
