import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Access the environment variables
const BASE_URL = import.meta.env.VITE_APP_BASE_API_URL;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (searchTerm) => ({
        url: '/search',
        params: {
          q: searchTerm,
        },
      }),
    }),
  }),
});

export const {
  useSearchQuery,
} = apiSlice;
