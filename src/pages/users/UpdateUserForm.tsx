import { CircularProgress } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdateUserMutation } from "../../apis/user.api";

interface UpdateUserFormProps {
  onClose: () => void;
  id: string;
}

interface FormData {
  name: string;
  job: string;
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ onClose, id }) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const handleUpdateUser: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await updateUser({ userId: id, updatedData: data });
      console.log("User updated successfully:", res);
      onClose();
      reset();
    } catch (error) {
      console.error("Error updating user:", error);
      setError("name", { type: "manual", message: "Failed to update user" });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleUpdateUser)}>
      <div className="mb-6">
        <label htmlFor="name" className="text-sm font-medium text-[#344054]">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className={`mt-1 p-2 w-full rounded-lg border sm:min-w-[320px] focus:outline-none ${
            errors.name
              ? "border-[#FDA29B] input-shadow-error"
              : "border-[#d6bbfb] input-shadow-success"
          }`}
        />
        {errors.name && (
          <p className="text-[#F04438] text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="job" className="text-sm font-medium text-[#344054]">
          Job
        </label>
        <input
          type="text"
          id="job"
          {...register("job", { required: "Job is required" })}
          className={`mt-1 p-2 w-full rounded-lg border focus:outline-none ${
            errors.job
              ? "border-[#FDA29B] input-shadow-error"
              : "border-[#d6bbfb] input-shadow-success"
          }`}
        />
        {errors.job && (
          <p className="text-[#F04438] text-sm mt-1">{errors.job.message}</p>
        )}
      </div>
      <div className="flex gap-4 items-center justify-end mt-4">
        <button
          type="button"
          onClick={() => {
            onClose();
            reset();
          }}
          className="text-sm font-semibold rounded-lg text-black border border-[#D0D5DD] px-4 py-3 min-w-[100px]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-sm font-semibold rounded-lg text-white px-4 py-3 bg-[#7F56D9] min-w-[100px] text-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress className="!text-white !w-6 !h-6" />
          ) : (
            "Update"
          )}
        </button>
      </div>
    </form>
  );
};

export default UpdateUserForm;
