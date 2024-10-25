import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

const companyEndpoints = ( 
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        'getAvailableSkills' | 'getDeals' | 'getDealNotes' | 'getTeams',
        'api'
    >) => ({
    postCreateCompany: builder.mutation<unknown, {name: string, skills: {skillId: number}[]}>({
        query: (body) => ({
            url: "/company",
            method: "POST",
            body: body,
        })
    }),
    getCompanies: builder.query<undefined, void>({
        query: () => ({
            url: "/company/user-companies",
            method: "GET",
        })
    }),
    postSwitchCompanies: builder.mutation({
        query: (body) => ({
            url: "/company/switch-company",
            method: "POST",
            body: body,
        })
    })
});

export default companyEndpoints;