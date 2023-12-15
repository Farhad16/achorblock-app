import { Divider } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: any) => {};

  // functionality will changes depends on the sign up steps
  const checkActive = (idx: number) => {
    if (idx === 0 || idx === 1) {
      return true;
    }
    return false;
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
          Sign Up to continue with Stack
        </p>
        <div className="mb-6">
          <label htmlFor="email" className="text-sm font-medium text-[#344054]">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className={`mt-1 p-2 w-full rounded-lg border sm:min-w-[320px] ${
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
        <div className="mb-6">
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
            className={`mt-1 p-2 w-full rounded-lg border ${
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
        <div className="grid grid-cols-6 gap-2.5 items-center mb-6">
          {[...Array(6)].map((_, idx) => (
            <Divider
              className={`"w-full h-[4px] rounded-sm" ${
                checkActive(idx) ? "bg-[#F04438]" : "bg-[#F3F3F3]"
              }`}
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-[#6941C6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none outline-none w-full h-[44px] font-semibold"
        >
          Sign Up
        </button>
        <p className="mt-4 text-[#B0B7C3]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#377DFF] hover:underline font-medium"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Registration;
