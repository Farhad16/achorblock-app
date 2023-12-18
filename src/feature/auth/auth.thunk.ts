// authThunks.js

import { signInUser, signUpUser } from "../../apis/auth.api";
import { IUser } from "../../types/shared";
import { setAuthError, setLoading, setUser } from "./auth.slice";

export const signUp = (userData: IUser) => async (dispatch: any) => {
  try {
    dispatch(setLoading());
    const response = await signUpUser(userData);
    dispatch(setUser(response));
  } catch (error: any) {
    dispatch(
      setAuthError(error.message || "An error occurred during registration.")
    );
  }
};

export const signIn = (userData: IUser) => async (dispatch: any) => {
  try {
    dispatch(setLoading());
    const response = await signInUser(userData);
    dispatch(setUser(response));
  } catch (error: any) {
    dispatch(
      setAuthError(error.message || "An error occurred during sign-in.")
    );
  }
};
