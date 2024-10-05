import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SalesrepType } from '../sales-rep/salesrep-type';
import { ratingType } from './teamrating-type';

const teamRatingEndpoints = (
        builder: EndpointBuilder<
            BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
            'getAvailableSkills',
            'api'
        >
    ) => ({
        getTopSalesrep: builder.query<SalesrepType, void>({
            query: () => ({
                url: "/ratings/top-sales-reps",
                method: "GET",
            })
        }),
        getOverallRating: builder.query<ratingType, void>({
            query: () => ({
                url: "/ratings/overall",
                method: "GET",
            })
        }),
        // Requires Params
        getTeamRating: builder.query({
            query: () => ({
                url: "/ratings",
                method: "GET",
            })
        }),
})

export default teamRatingEndpoints