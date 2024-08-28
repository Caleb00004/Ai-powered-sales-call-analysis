import { globalState } from "../../../api-feature/apiSlice"
import DealsManager from "./manager/deals-manager"

const DealsComponent = () => {
    const {account_type} = globalState
    
    return (
        <div>
            {account_type === "manager" && <DealsManager />}
        </div>
    )
}

export default DealsComponent
