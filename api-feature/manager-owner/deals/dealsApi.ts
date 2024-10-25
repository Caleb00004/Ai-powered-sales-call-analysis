import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { dealSalesrepPerformanceType, dealsOverviewType, dealStagesType, dealsType } from './deal-type';

const dealsEndpoints = ( 
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        'getAvailableSkills' | 'getDeals' | 'getDealNotes' | 'getTeams' | 'getMeetings',
        'api'
    >) => ({
    getDeals: builder.query<dealsType[], void>({
        query: () => ({
            url: '/deal',
            method: 'GET',
        }),
        providesTags: ['getDeals']
    }),
    postCreateDeal: builder.mutation<undefined, {name: string, client: string, dealStageId: number, salesReps: number[]}>({
        query: (deal) => ({
            url: '/deal',
            method: 'POST',
            body: deal,
        }),
        invalidatesTags: ['getDeals']
    }),
    getDealNotes: builder.query<undefined, void>({
        query: (dealId) => ({
            url: `/deal/${dealId}/note`,
            method: 'GET',
        }),
        providesTags: ['getDealNotes']
    }),
    postCreateNote: builder.mutation<undefined, {message: string, id: number}>({
        query: (data) => ({
            url: `/deal/${data.id}/note`,
            method: 'POST',
            body: {message: data.message},
        }),
        invalidatesTags: ['getDealNotes']
    }),
    getMeetings: builder.query<undefined, string>({
        query: (id) => ({
            url: `/deal/${id}/meeting`,
            method: 'GET',
        }),
        providesTags: ["getMeetings"]
    }),
    postScheduleMeeting: builder.mutation<undefined, {id: string, body: {title: string, platform: string, scheduledTime: string}}>({
        query: (data) => ({
            url: `/deal/${data.id}/meeting`,
            method: 'POST',
            body: data.body,
        }),
        invalidatesTags: ["getMeetings"]
    }),
    getDealStages: builder.query<dealStagesType[], void>({
        query: () => ({
            url: '/deal/stages',
            method: 'GET',
        }),
        transformResponse: res => {
            // @ts-ignore
            return res.data as dealStagesType[]
        }
    }),
    getDealOverview: builder.query<{success: boolean, data: dealsOverviewType}, string>({
        query: (dealId) => ({
            url: `/deal/${dealId}/overview`,
            method: 'GET',
        }),
    }),
    getDealSalesrepPerformance: builder.query<{success: boolean, data: dealSalesrepPerformanceType}, string>({
        query: (dealId) => ({
            url: `/deal/${dealId}/deals-sales-rep-performance`,
            method: 'GET',
        }),
    })
});

export default dealsEndpoints;