// import { globalState } from "../../../api-feature/apiSlice"
import SettingsManager from "./manager/settings-manager"
 
const SettingsComponent = () => {
    // const {account_type} = globalState

    return (
        <div>
            <SettingsManager />
            {/* {account_type === "admin" && <p>Admin</p>}
            {account_type === "sales-rep" && <p>Sales Rep</p>} */}
        </div>
    )
}

export default SettingsComponent