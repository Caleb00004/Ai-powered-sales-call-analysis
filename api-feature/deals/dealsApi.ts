import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { dealSalesrepPerformanceType, dealsDetailsType, dealStagesType, dealsType } from './deal-type';

const dealsEndpoints = ( 
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        'getAvailableSkills',
        'api'
    >) => ({
    getDeals: builder.query<dealsType[], void>({
        query: () => ({
            url: '/deal',
            method: 'GET',
        }),
    }),
    postCreateDeal: builder.mutation<undefined, {name: string, client: string, dealStageId: number, salesReps: number[]}>({
        query: (deal) => ({
            url: '/deal',
            method: 'POST',
            body: deal,
        }),
    }),
    getDealNotes: builder.query<undefined, void>({
        query: (dealId) => ({
            url: `/deal/${dealId}/note`,
            method: 'GET',
        }),
    }),
    postCreateNote: builder.mutation<undefined, {message: string, id: string}>({
        query: (data) => ({
            url: `/deal/${data.id}/note`,
            method: 'POST',
            body: {message: data.message},
        }),
    }),
    getMeetings: builder.query<undefined, void>({
        query: (id) => ({
            url: `/deal/${id}/meeting`,
            method: 'GET',
        }),
    }),
    postScheduleMeeting: builder.mutation<undefined, {id: string, body: {title: string, platform: string, scheduledTime: string}}>({
        query: (data) => ({
            url: `/deal/${data.id}/note`,
            method: 'POST',
            body: data.body,
        }),
    }),
    getDealStages: builder.query({
        query: () => ({
            url: '/deal/stages',
            method: 'GET',
        }),
        transformResponse: res => {
            console.log(res)
            // @ts-ignore
            return res.data as dealStagesType[]
        }
    }),
    getDealOverview: builder.query<{success: boolean, data: dealsDetailsType}, void>({
        query: (dealId) => ({
            url: `/deal/${dealId}/overview`,
            method: 'GET',
        }),
    }),
    getDealSalesrepPerformance: builder.query<{success: boolean, data: dealSalesrepPerformanceType}, void>({
        query: (dealId) => ({
            url: `/deal/${dealId}/deals-sales-rep-performance`,
            method: 'GET',
        }),
    })
});

export default dealsEndpoints;