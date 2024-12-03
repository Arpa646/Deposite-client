// src/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include", // Optional: include credentials like cookies
  }),
  tagTypes: ["user", "recipe"],
  endpoints: (builder) => ({
    // Define your endpoints here
  }),
});

export const {
  // Export hooks for your endpoints here (e.g., useGetUserQuery)
} = baseApi;
