// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      localStorage.setItem("isAuthenticated", "true");
    },
    setLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("isAuthenticated");
    },
    setAuthError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setUser, setLogout, setAuthError, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
