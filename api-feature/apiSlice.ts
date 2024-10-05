import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { ACCOUNT_TYPE, AuthResponseType, SkillsType } from "./types";
import authEndpoints from "./auth/authApi";
import teamRatingEndpoints from "./team-rating";
import salesRepEndpoints from "./sales-rep";
import teamEndpoints from "./team/teamApi";

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
    tagTypes: ['getAvailableSkills',],
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
        // AUTHENTICATION - USER
        ...authEndpoints(builder),
        ...teamRatingEndpoints(builder),
        ...salesRepEndpoints(builder),
        ...teamEndpoints(builder),
        getUserProfile: builder.query({
            query: () => ({
                url: "/user",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${globalState.authorizationToken}`,
                }
            })
        }),
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
        postCreateCompany: builder.mutation<unknown, {name: string, skills: {skillId: number}[]}>({
            query: (body) => ({
                url: "/company",
                method: "POST",
                body: body,
                headers: {
                    Authorization: `Bearer ${globalState.authorizationToken}`,
                }
            })
        }),
        getCompanies: builder.query({
            query: () => ({
                url: "/company/user-companies",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${globalState.authorizationToken}`,
                }
            })
        }),
        postSwitchCompanies: builder.mutation({
            query: (body) => ({
                url: "/company/switch-company",
                method: "POST",
                body: body,
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
    useGetAvailableSkillsListQuery,
    usePostCreateCompanyMutation,
    useGetCompaniesQuery,
    usePostSwitchCompaniesMutation,
    useGetUserProfileQuery,

    // Team Rating
    useGetTopSalesrepQuery,
    useGetOverallRatingQuery,
    useGetTeamRatingQuery,

    // Sales Rep
    useGetAllSalesrepQuery,
    useGetSalesrepPerformanceQuery,
    useGetSalesrepDealsQuery,
    useGetSalesrepAreaOfConcernQuery,

    // Team
    useGetTeamQuery,
    usePostInviteTeamMutation,
    useAcceptInviteMutation,
    useGetRolesQuery,
    useUpdateRoleMutation,
} = apiSlice

