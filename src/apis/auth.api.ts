import axiosInstance from "../axios/AxiosInstance";
import { IUser } from "../types/shared";

export const signUpUser = async (userData: IUser) => {
  try {
    const response = await axiosInstance.post("/api/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
