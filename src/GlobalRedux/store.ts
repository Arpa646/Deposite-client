"use client";

import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api"; // Import your API slice

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, // Add only the API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // Include the API middleware
});

// Define types for your Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
