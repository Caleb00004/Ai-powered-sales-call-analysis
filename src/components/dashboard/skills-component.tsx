import { globalState } from "../../../api-feature/apiSlice"
import SkillsManager from "./manager/skills-manager"
import { useRouter } from "next/router"
import { useLayoutEffect } from "react"

const SkillsComponent = () => {
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
            {account_type === "manager" && <SkillsManager />}
        </div>
    )
}

export default SkillsComponent