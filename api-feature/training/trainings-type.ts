export interface trainingModuleType {
    id: number | string;
    title: string;
    description: string;
    thumbnail: string;
    status: boolean;
    trainingTopic: trainingTopicType[]
}

export interface trainingTopicType {
    id: number | string;
    title: string;
    description: string;
    status: boolean;
    trainingTopicUpload: {url: string; type: string; status: boolean}[]
}