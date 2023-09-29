import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),
  tagTypes: ["post"],

  endpoints: (builder) => ({
    getPosts:builder.query({
        query:()=>({
            url:`/posts`,
            method:"GET",
        }),
        providesTags:["post"],
    }),
  }),
});

export const {useGetPostsQuery} =postApi;
