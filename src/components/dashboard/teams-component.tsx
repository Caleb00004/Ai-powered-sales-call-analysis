import { globalState } from "../../../api-feature/apiSlice"
import TeamsManager from "./manager/teams-manager"
import { useRouter } from "next/router"
import { useLayoutEffect } from "react"

const TeamsComponent = () => {
    const account_type = globalState.account_type
    const routeTo = useRouter()

    useLayoutEffect(() => {
        if (account_type !== "manager") {
            routeTo.push("/dashboard")
            return
        }
    },[])

    return (
        <div>
            {account_type === "manager" && <TeamsManager />}
        </div>
    )
}

export default TeamsComponent