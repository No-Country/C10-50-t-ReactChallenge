import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const PATH_URL = 'http://localhost:3001/api/'

export const waiterApi = createApi({
  reducerPath: 'waiterApi',
  baseQuery: fetchBaseQuery({ baseUrl: PATH_URL }),
  endpoints: builder => ({
    getStaff: builder.query({
      query: () => 'staff',
    }),
  }),
})

export const { useGetStaffQuery } = waiterApi
