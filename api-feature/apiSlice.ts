import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { ACCOUNT_TYPE, AuthResponseType, SkillsType, subscriptionType } from "./types";
import {authEndpoints, teamEndpoints, teamRatingEndpoints, trainingEndpoints, dealsEndpoints, salesRepEndpoints, companyEndpoints, skillsEndpoints} from "./index"

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

interface globalStateType {
    userId: string,
    account_type: ACCOUNT_TYPE
    authorizationToken: string
    currentUser: {
        firstName: string,
        lastName: string,
        email: string,
        company: {
            id: number,
            name: string,
            position: string,
            role: string
        }
    }
}

export const globalState: globalStateType = {
    userId: "",
    account_type: "",
    authorizationToken: "",
    currentUser: {
        firstName: "",
        lastName: "",
        email: "",
        company: {
            id: 0,
            name: "",
            position: "",
            role: ""
        }   
    }
};

export const apiSlice = createApi({
    reducerPath: "api",
    tagTypes: ['getAvailableSkills', 'getDeals' , 'getDealNotes', 'getTeams'],
    // baseQuery: fetchBaseQuery({
    //     baseUrl: BASE_URL
    // }),
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            const token = globalState.authorizationToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: builder => ({
        ...authEndpoints(builder),
        ...companyEndpoints(builder),
        ...teamRatingEndpoints(builder),
        ...salesRepEndpoints(builder),
        ...teamEndpoints(builder),
        ...dealsEndpoints(builder),
        ...trainingEndpoints(builder),
        ...skillsEndpoints(builder),
        getAvailableSkillsList: builder.query<SkillsType[], void>({
            query: () => ({
                url: "/company/available-skills",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${globalState.authorizationToken}`,
                }
            }),
            providesTags: ['getAvailableSkills']
        }),
        getInsights: builder.query<undefined, string>({
            query: (userId) => ({
                url: `/user/${userId}/insights`,
                method: "GET"
            })
        }),
        getSubscriptions: builder.query<subscriptionType[] ,void>({
            query: () => ({
                url: `/subscription`,
                method: "GET"
            })
        }),
        getUserProfile: builder.query({
            query: () => ({
                url: "/user",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${globalState.authorizationToken}`,
                }
            })
        })
    })
})

export const {
    useAuthSignUpMutation,
    useAuthSignInMutation,
    useGetOTPMutation,
    useVerifyOTPMutation,
    useGetUserProfileQuery,

    // Companies
    usePostCreateCompanyMutation,
    useGetCompaniesQuery,
    usePostSwitchCompaniesMutation,
    useGetAvailableSkillsListQuery,

    // Team Rating
    useGetTopSalesrepQuery,
    useGetOverallRatingQuery,
    useGetTeamRatingQuery,

    // Sales Rep
    useGetAllSalesrepQuery,
    useGetSalesrepPerformanceQuery,
    useGetSalesrepDealsQuery,
    useGetSalesrepAreaOfConcernQuery,
    useGetSalesrepScheduledTrainingQuery,

    // Team
    useGetTeamQuery,
    usePostInviteTeamMutation,
    useAcceptInviteMutation,
    useGetRolesQuery,
    useUpdateRoleMutation,

    // Deals
    useGetDealsQuery,
    usePostCreateDealMutation,
    useGetDealNotesQuery,
    usePostCreateNoteMutation,
    useGetMeetingsQuery,
    usePostScheduleMeetingMutation,
    useGetDealStagesQuery,
    useGetDealOverviewQuery,
    useGetDealSalesrepPerformanceQuery,

    // Training
    useGetTrainingsQuery,
    useGetTrainingTopicsQuery,
    usePostAssignTopicMutation,
    useGetEnrolledTrainingQuery,
    useGetUserEnrolledTopicQuery,
    useGetUserTopicProgressQuery,
    useGetUserTrainingProgressQuery,

    // Skills
    useGetSalesrepSkillsQuery,
    useGetSkillTrendsQuery,

    // /////////////
    useGetInsightsQuery,
    useGetSubscriptionsQuery
} = apiSlice

