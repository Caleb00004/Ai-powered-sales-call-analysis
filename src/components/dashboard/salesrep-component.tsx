import SalesRepManager from "./manager/salesrep-manager"
import { globalState } from "../../../api-feature/apiSlice"

const SalesRepComponent = () => {
    const {account_type} = globalState

    return(
        <div>
            {account_type === "manager" && <SalesRepManager />}
        </div>
    )
}

export default SalesRepComponent