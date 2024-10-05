import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SalesrepType } from './salesrep-type';

const salesRepEndpoints = (
        builder: EndpointBuilder<
            BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
            'getAvailableSkills',
            'api'
        >
    ) => ({
        getAllSalesrep: builder.query<SalesrepType, undefined>({
            query: () => ({
                url: "/sales-rep/overall",
                method: "GET",
            }),
        }),
        getSalesrepPerformance: builder.query({
            query: () => ({
                url: "/sales-rep/company-user-overall-performance",
                method: "GET",
            })
        }),
        getSalesrepDeals: builder.query({
            query: (id) => ({
                url: `/sales-rep/${id}/assigned-deals`,
                method: "GET",
            })
        }),
        getSalesrepAreaOfConcern: builder.query({
            query: (id) => ({
                url: `/sales-rep/${id}/areas-of-concern`,
                method: "GET",
            })
        }),
})

export default salesRepEndpoints