import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { ACCOUNT_TYPE } from "./types";

export const BASE_URL = "https://localhost:2000"

interface globalStateType {
    userId: string,
    account_type: ACCOUNT_TYPE 
}

export const globalState: globalStateType = {
    userId: "",
    account_type: "sales-rep",
};

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    
    endpoints: builder => ({
        // AUTHENTICATION - USER
        authSignIn: builder.mutation({
            query: details => ({
                url: "/signin",
                method: "POST",
                body: details,
            }),
            transformResponse: (res) => {
                console.log(res)
                return
            },
        }), 
        authLogOut: builder.mutation<unknown, void>({
            query: () => ({
                url: "/logout",
                method: "DELETE",
                // credentials: "include",
            }),
            transformResponse: res => {
                console.log(res)
                return res;
            },
        }),
        authSignUp: builder.mutation({
            query: user => ({
                url: "/signup",
                method: "POST",
                body: user,
            }),
            transformResponse: (res) => {
                console.log(res)
                return
            },
        })
    })
})

export const {
    useAuthSignUpMutation,
    useAuthLogOutMutation,
    useAuthSignInMutation
} = apiSlice

