import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include", // Optional: include credentials like cookies
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => {
        // Log the user object before sending the API request
        console.log("User being sent to API:", user);

        return {
          url: "/auth/create-user",
          method: "POST",
          body: user,
        };
      },
      invalidatesTags: ["user"],
    }),

    transferData: builder.mutation({
      query: (data) => ({
        url: `/auth/transfer-balance`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    addBalance: builder.mutation({
      query: (addBalance) => {
        console.log("Adding balance:", addBalance); // Log the addBalance parameter
        return {
          url: `/auth/add-balance`, // Assuming the userId is inside addBalance
          method: "PUT",
          body: addBalance, // Sending the full addBalance object in the body
        };
      },
      invalidatesTags: ["user"],
    }),

    getUser: builder.query({
      query: () => ({
        url: "/auth",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

// Export hooks for the defined endpoints
export const {
  useSignUpMutation,
  useGetUserQuery,
  useAddBalanceMutation, 
  useTransferDataMutation
} = baseApi;
