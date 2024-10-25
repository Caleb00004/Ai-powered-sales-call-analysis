import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SalesrepType } from './salesrep-type';
import { successResponseType } from '../types';

const salesRepEndpoints = (
        builder: EndpointBuilder<
            BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
            'getAvailableSkills' | 'getDeals' | 'getDealNotes' | 'getTeams',
            'api'
        >
    ) => ({
        getAllSalesrep: builder.query<SalesrepType, undefined>({
            query: () => ({
                url: "/sales-rep/overall",
                method: "GET",
            }),
        }),
        getSalesrepPerformance: builder.query<undefined, void>({
            query: () => ({
                url: "/sales-rep/company-user-overall-performance",
                method: "GET",
            })
        }),
        getSalesrepDeals: builder.query<undefined, number>({
            query: (id) => ({
                url: `/sales-rep/${id}/assigned-deals`,
                method: "GET",
            })
        }),
        getSalesrepAreaOfConcern: builder.query<undefined, number>({
            query: (id) => ({
                url: `/sales-rep/${id}/areas-of-concern`,
                method: "GET",
            })
        }),
        getSalesrepScheduledTraining: builder.query<undefined, number>({
            query: (id) => ({
                url: `/sales-rep/${id}/scheduled-trainings`,
                method: "GET",
            })
        }),
        getSalesRepActivities: builder.query<undefined, number>({
            query: (id) => ({
                url: `/sales-rep/${id}/activities`,
                method: "GET",
            })
        }),
        postSendSalesrepMessage: builder.mutation<undefined, {userId: number, content: string}>({
            query: ({userId, content}) => ({
                url: `/sales-rep/${userId}/send-message`,
                method: 'POST',
                body: {content: content},
            })
        }),
})

export default salesRepEndpoints