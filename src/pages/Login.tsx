import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IUser } from "../types/shared";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setAuthError } from "../feature/auth/auth.slice";
import { signIn } from "../feature/auth/auth.thunk";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const redirectPath = params.get("redirect");

  const onSubmit = async (values: IUser) => {
    try {
      if (!values.email) {
        setError("email", { type: "manual", message: "The email is required" });
        return;
      }

      if (!values.password) {
        setError("password", {
          type: "manual",
          message: "The password is required",
        });
        return;
      }

      dispatch(setLoading());
      await dispatch<any>(signIn(values));
      navigate(redirectPath || "/dashboard");
      // show toast here later
      console.log("Sign-in successful");
    } catch (error: any) {
      dispatch(setAuthError(error.message || "An error has occurred"));
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen sm:p-8 p-6">
      <form
        className="rounded-lg border border-[#EEE] sm:p-12 p-6 container-shadow"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-3 items-center mb-6">
          <img src="/img/logo.png" alt="logo" className="w-[50px] h-[44px]" />
          <h1 className="text-[#4E5D78] font-bold text-[28px]">Stack</h1>
        </div>
        <p className="text-base font-semibold leading-6 mb-8">
          Sign In to continue with Stack
        </p>
        <div className="mb-6">
          <label htmlFor="email" className="text-sm font-medium text-[#344054]">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className={`mt-1 p-2 w-full rounded-lg border sm:min-w-[320px] focus:outline-none ${
              errors.email
                ? "border-[#FDA29B] input-shadow-error"
                : "border-[#d6bbfb] input-shadow-success"
            }`}
          />
          {errors.email && (
            <p className="text-[#F04438] text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="text-sm font-medium text-[#344054]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`mt-1 p-2 w-full rounded-lg border focus:outline-none ${
              errors.password
                ? "border-[#FDA29B] input-shadow-error"
                : "border-[#d6bbfb] input-shadow-success"
            }`}
          />
          {errors.password && (
            <p className="text-[#F04438] text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#6941C6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none outline-none w-full h-[44px] font-semibold"
        >
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={26} />
          ) : (
            "Sign In"
          )}
        </button>
        <p className="mt-4 text-[#B0B7C3]">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#377DFF] hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
