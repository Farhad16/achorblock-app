import React from "react";
import { CircularProgress } from "@mui/material";
import { useDeleteUserMutation } from "../../apis/user.api";

interface DeleteUserConfirmationProps {
  id: string;
  onClose: () => void;
}

const DeleteUserConfirmation: React.FC<DeleteUserConfirmationProps> = ({
  id,
  onClose,
}) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDeleteUser = async () => {
    try {
      await deleteUser(id);
      console.log("User deleted successfully");
      onClose();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <div className="mb-6">Do you want to delete this user?</div>
      <div className="flex gap-4 items-center justify-end mt-4">
        <button
          onClick={onClose}
          className="text-sm font-semibold rounded-lg text-black border border-[#D0D5DD] px-4 py-3 min-w-[100px]"
        >
          Cancel
        </button>
        <button
          onClick={handleDeleteUser}
          className="text-sm font-semibold rounded-lg text-white px-4 py-3 bg-[#F04438] min-w-[100px] text-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress className="!text-white !w-6 !h-6" />
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
};

export default DeleteUserConfirmation;
