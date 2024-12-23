import { createContext, ReactNode } from "react";
import { useGetAllSalesrepQuery, useGetAvailableSkillsListQuery, useGetPlatformsQuery, useGetRolesQuery, useGetTeamQuery, useGetTrainingsQuery } from "../../../api-feature/apiSlice";
import { APISTATUS, ApiType, platformType, SkillsType } from "../../../api-feature/types";
import { useContext } from "react";
import { appContext } from "./appContext";
import { SalesrepType } from "../../../api-feature/sales-rep/salesrep-type";
import { teamRoleType, teamType } from "../../../api-feature/team/team-type";
import { trainingModuleType } from "../../../api-feature/training/trainings-type";

interface skillsApiType extends ApiType {
  data: {success: boolean, data:SkillsType[]}
}

interface salesrepApiType extends ApiType {
    data: {data: SalesrepType[], success: boolean}
}

interface teamRolesApiType extends ApiType {
    data: {data: teamRoleType[], success: boolean}
}

interface getTeamsApi extends ApiType {
    data: {data: {data: teamType[], page: number, totalPage: number, totalUser: number}, success: boolean}
}

interface trainingApi extends ApiType {
    data: {data: trainingModuleType[]}, success: boolean
}

interface platformApi extends ApiType {
    data: {data: platformType[], success: boolean}
}

interface DataContextProps {
    availableSkills: SkillsType[],
    availableSkillsStatus: APISTATUS
    salesRepData: SalesrepType[]
    salesRepsataStatus: APISTATUS
    teamRolesData: teamRoleType[]
    teamRolesDataStatus: APISTATUS
    teamData: teamType[]
    teamDataStatus: APISTATUS
    trainingModuleData: trainingModuleType[]
    trainingModuleStatus: APISTATUS,
    platformData: platformType[];
    platformStatus: APISTATUS;
}

const dataContext = createContext<DataContextProps>({
    availableSkills: [],
    availableSkillsStatus: "pending",
    salesRepData: [],
    salesRepsataStatus: "pending",
    teamRolesData: [],
    teamRolesDataStatus: "pending",
    teamData: [],
    teamDataStatus: "pending",
    trainingModuleData: [],
    trainingModuleStatus: "pending",
    platformData: [],
    platformStatus: "pending"
})
 
function DataContextProvider({ children }: { children: ReactNode }) {
    const {loggedIn, accountType} = useContext(appContext)
    const {data: platforms, status: platformStatus, error: platformError} = useGetPlatformsQuery<platformApi>(undefined, {skip: !loggedIn})
    const {data: availableSkillsData, status: availableSkillsStatus, error: availableSkillsError} = useGetAvailableSkillsListQuery<skillsApiType>(undefined, {skip: !loggedIn})
    const {data: modules, status: trainingModuleStatus, error: modulesError} = useGetTrainingsQuery<trainingApi>(undefined, {skip: !loggedIn})
    // Change For Manager and sales rep
    const {data: salesRep, status: salesRepsataStatus, error: salesRepError} = useGetAllSalesrepQuery<salesrepApiType>(undefined, {skip: !loggedIn})
    const {data: teamRoles, status: teamRolesDataStatus, error: teamRolesError} = useGetRolesQuery<teamRolesApiType>(undefined, {skip: !loggedIn})
    // For Manager Accounts
    const {data: teamMembers, status: teamDataStatus, error: teamDataError} = useGetTeamQuery<getTeamsApi>(undefined, {skip: !loggedIn})

    const platformData = platforms?.data
    const salesRepData = salesRep?.data
    const teamRolesData = teamRoles?.data
    const teamData = teamMembers?.data?.data
    const trainingModuleData = modules?.data
    const availableSkills = availableSkillsData?.data
    
    const contextValue: DataContextProps = {
        availableSkills,
        availableSkillsStatus,
        salesRepData,
        salesRepsataStatus,
        teamRolesData,
        teamRolesDataStatus,
        teamData,
        teamDataStatus,
        trainingModuleData,
        trainingModuleStatus,
        platformData,
        platformStatus
    }

    return (
        <dataContext.Provider value={contextValue} >{children}</dataContext.Provider>
    )
}

export {dataContext, DataContextProvider}