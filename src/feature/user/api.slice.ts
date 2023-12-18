// apiSlice.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, { page: number; itemsPerPage: number }>({
      query: ({ page, itemsPerPage }) =>
        `users?page=${page}&per_page=${itemsPerPage}`,
    }),
  }),
});

export const { useGetUsersQuery } = api;
