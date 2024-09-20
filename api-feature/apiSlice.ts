import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { ACCOUNT_TYPE, AuthResponseType, SkillsType } from "./types";

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
    account_type: "admin",
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
    tagTypes: ['getAvailableSkills'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    
    endpoints: builder => ({
        // AUTHENTICATION - USER
        authSignIn: builder.mutation<AuthResponseType, {email: string, password: string}>({
            query: details => {
                console.log(details)
                return {
                url: "/auth/login",
                method: "POST",
                body: details,
            }},
            invalidatesTags: ["getAvailableSkills"]
        }), 
        authSignUp: builder.mutation({
            query: user => ({
                url: "/auth/register",
                method: "POST",
                body: user,
            }),
            transformResponse: (res) => {
                return res
            },
        }),
        getOTP: builder.mutation({
            query: () => ({
                url: "/auth/send-otp",
                method: "POST",
                body: {},
                headers: {
                    Authorization: `Bearer ${globalState.authorizationToken}`,
                },
            })
        }),
        verifyOTP: builder.mutation({
            query: (body) => ({
                url: "/auth/verify-otp",
                method: "POST",
                body: body,
                headers: {
                    Authorization: `Bearer ${globalState.authorizationToken}`,
                },
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
        })
    })
})

export const {
    useAuthSignUpMutation,
    useAuthSignInMutation,
    useGetOTPMutation,
    useVerifyOTPMutation,
    useGetAvailableSkillsListQuery,
    usePostCreateCompanyMutation
} = apiSlice

