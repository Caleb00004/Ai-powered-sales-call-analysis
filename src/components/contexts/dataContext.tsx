import { createContext, ReactNode } from "react";
import { useGetAllSalesrepQuery, useGetAvailableSkillsListQuery, useGetRolesQuery } from "../../../api-feature/apiSlice";
import { APISTATUS, ApiType, SkillsType } from "../../../api-feature/types";
import { useContext } from "react";
import { appContext } from "./appContext";
import { SalesrepType } from "../../../api-feature/sales-rep/salesrep-type";
import { teamRoleType } from "../../../api-feature/team/team-type";

interface skillsApiType extends ApiType {
    data: SkillsType[]
}

interface salesrepApiType extends ApiType {
    data: {data: SalesrepType[], success: boolean}
}

interface teamRolesApiType extends ApiType {
    data: {data: teamRoleType[], success: boolean}
}

interface DataContextProps {
    availableSkills: SkillsType[],
    availableSkillsStatus: APISTATUS
    salesRepData: SalesrepType[]
    salesRepsataStatus: APISTATUS
    teamRolesData: teamRoleType[]
    teamRolesDataStatus: APISTATUS
}

const dataContext = createContext<DataContextProps>({
    availableSkills: [],
    availableSkillsStatus: "pending",
    salesRepData: [],
    salesRepsataStatus: "pending",
    teamRolesData: [],
    teamRolesDataStatus: "pending"
})
 

function DataContextProvider({ children }: { children: ReactNode }) {
    const {loggedIn, accountType} = useContext(appContext)
    const {data: availableSkills, status: availableSkillsStatus, error: availableSkillsError} = useGetAvailableSkillsListQuery<skillsApiType>(undefined, {skip: !loggedIn})
    // Change For Manager and sales rep
    const {data: salesRep, status: salesRepsataStatus, error: salesRepError} = useGetAllSalesrepQuery<salesrepApiType>(undefined, {skip: !loggedIn})
    const {data: teamRoles, status: teamRolesDataStatus, error: teamRolesError} = useGetRolesQuery<teamRolesApiType>(undefined, {skip: !loggedIn})
    
    console.log(salesRep)
    const salesRepData = salesRep?.data
    const teamRolesData = teamRoles?.data

    console.log(salesRepData)

    const contextValue: DataContextProps = {
        availableSkills,
        availableSkillsStatus,
        salesRepData,
        salesRepsataStatus,
        teamRolesData,
        teamRolesDataStatus
    }

    return (
        <dataContext.Provider value={contextValue} >{children}</dataContext.Provider>
    )
}

export {dataContext, DataContextProvider}