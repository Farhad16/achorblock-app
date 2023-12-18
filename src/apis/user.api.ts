// api.slice.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createUserapi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, updatedData }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = createUserapi;
