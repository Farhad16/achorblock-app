// store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/auth/auth.slice";
import { api } from "../feature/user/api.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
