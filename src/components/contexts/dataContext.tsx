import { createContext, ReactNode } from "react";
import { globalState, useGetAvailableSkillsListQuery } from "../../../api-feature/apiSlice";
import { APISTATUS, ApiType, SkillsType } from "../../../api-feature/types";


interface skillsApiType extends ApiType {
  data: SkillsType[]
}

interface DataContextProps {
    availableSkills: SkillsType[],
    availableSkillsStatus: APISTATUS
}

const dataContext = createContext<DataContextProps>({
    availableSkills: [],
    availableSkillsStatus: "pending"
})
 

function DataContextProvider({ children }: { children: ReactNode }) {
    const {data: availableSkills, status: availableSkillsStatus, error: availableSkillsError} = useGetAvailableSkillsListQuery<skillsApiType>()

    const contextValue: DataContextProps = {
        availableSkills,
        availableSkillsStatus
    }

    return (
        <dataContext.Provider value={contextValue} >{children}</dataContext.Provider>
    )
}

export {dataContext, DataContextProvider}