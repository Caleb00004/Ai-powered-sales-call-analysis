import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createTeambodyType, teamType } from './team-type';
import { successResponseType } from '../types';

const teamEndpoints = ( 
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        'getAvailableSkills',
        'api'
    >) => ({
    getTeam: builder.query<teamType, void>({
        query: () => ({
            url: '/team',
            method: 'GET',
        }),
    }),
    postInviteTeam: builder.mutation<createTeambodyType, successResponseType>({
        query: (user) => ({
            url: '/team/invite',
            method: 'POST',
            body: user,
        }),
    }),
    acceptInvite: builder.mutation<{token: string, password: string}, successResponseType>({
        query: (user) => ({
            url: '/team/accept-invite',
            method: 'POST',
            body: user,
        }),
    }),
    getRoles: builder.query({
        query: () => ({
            url: "/team/roles",
            method: "GET",
        })
    }),
    updateRole: builder.mutation<{userId: string | number, position: string, roleIds: string | number[]}, successResponseType>({
        query: (user) => ({
            url: '/team/invite',
            method: 'POST',
            body: user,
        }),
    }),
});

export default teamEndpoints;