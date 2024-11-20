// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// const {VITE_API_URL: API_URL} = import.meta.env;

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: headers => {
      //   const token = localStorage.getItem('token');
      //   console.log('token', token);
      // If we have a token set in state, let's assume that we should be passing it.
      //   if (token) {
      //     headers.set('Authorization', `Bearer ${token}`);
      //   }

      return headers;
    },
  }),
  tagTypes: [],
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
