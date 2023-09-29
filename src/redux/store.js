import {  configureStore } from "@reduxjs/toolkit";
import { postApi } from "./api/postApi";
import postSlice from "./services/postSlice";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,

    postSlice: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        postApi.middleware,
    ),
});

