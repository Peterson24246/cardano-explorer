// Import the RTK Query methods
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cardano-explorer-backend.herokuapp.com/api'}),
    endpoints: builder => ({
        getLatestEpoch: builder.query({
            query: () => '/epochs/latest'
        })
    })
})

// Export the auto-generated hook for the 'getLatestEpoch' query endpoint
export const { useGetLatestEpochQuery } = apiSlice