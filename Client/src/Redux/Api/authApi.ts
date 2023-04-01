import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.PUBLIC_URL }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (name: string) => "user",
    }),
  }),
});

export const { useGetUserQuery } = authApi;
