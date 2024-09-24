import { globalState } from '../apiSlice';
import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { AuthResponseType } from '../types';

const authEndpoints = ( 
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        'getAvailableSkills',
        'api'
    >) => ({
    authSignIn: builder.mutation<AuthResponseType, { email: string; password: string }>({
        query: (details) => ({
        url: '/auth/login',
        method: 'POST',
        body: details,
        }),
        invalidatesTags: ['getAvailableSkills'],
    }),
    authSignUp: builder.mutation({
        query: (user) => ({
        url: '/auth/register',
        method: 'POST',
        body: user,
        }),
        transformResponse: (res) => {
        return res;
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
});

export default authEndpoints;