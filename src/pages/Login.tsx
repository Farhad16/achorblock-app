import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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
        <button
          type="submit"
          className="bg-[#6941C6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none outline-none w-full h-[44px] font-semibold"
        >
          Sign In
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
