import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Access the environment variable for the base API URL
const BASE_URL = import.meta.env.VITE_APP_BASE_API_URL;

// Create an API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  // Define endpoints for the API slice
  endpoints: builder => ({
    // Define a search endpoint
    search: builder.query({
      // Search Query Function
      query: searchTerm => ({
        url: '/search',
        params: {
          q: searchTerm,
        },
      }),
    }),
  }),
});

// Export the generated hook for the search query
export const { useSearchQuery } = apiSlice;
