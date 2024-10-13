export interface SalesrepType {
    firstName: string,
    lastName: string,
    grade: number,
    skills: string,
    skillSymbol: string
}

export interface AreaofconcernType {
    grade: number;
    skillName: string;
    skillSymbol: string
}

export interface scheduleTrainingsType {
    progress: string;
    trainingTopic: {
        title: string;
        training: {
            title: string
        }
    }
}

export interface AssignedDealsType {
    name: string
}