import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createTeambodyType, teamType } from './team-type';
import { successResponseType } from '../../types';

const teamEndpoints = ( 
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        'getAvailableSkills' | 'getDeals' | 'getDealNotes' | 'getTeams' ,
        'api'
    >) => ({
    getTeam: builder.query<teamType, {page?: number, limit?: number, search?: string}>({
        query: ({page = 1, limit = 40, search = ""}) => ({
            url: '/team',
            method: 'GET',
            params: {page: page, limit: limit, search: search}
        }),
        providesTags: ["getTeams"]
    }),
    postInviteTeam: builder.mutation<successResponseType, createTeambodyType>({
        query: (user) => ({
            url: '/team/invite',
            method: 'POST',
            body: user,
        }),
        invalidatesTags: ["getTeams"]
    }),
    acceptInvite: builder.mutation<successResponseType, {token: string, password: string}>({
        query: (data) => ({
            url: '/team/accept-invite',
            method: 'POST',
            body: data,
        }),
    }),
    getRoles: builder.query<void, undefined>({
        query: () => ({
            url: "/team/roles",
            method: "GET",
        })
    }),
    updateRole: builder.mutation<successResponseType, {userId: string | number, position: string, roleIds: number[]}>({
        query: (user) => ({
            url: '/team/update-role-position',
            method: 'POST',
            body: user,
        }),
        invalidatesTags: ["getTeams"]
    }),
});

export default teamEndpoints;