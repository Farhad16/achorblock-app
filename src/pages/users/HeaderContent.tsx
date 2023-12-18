import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ReusableModal from "../../components/shared/ReusableModal";
import { useAddUserMutation } from "../../apis/user.api";
import AddUserForm from "./AddUserForm";

const HeaderContent = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleAddClick = () => {
    setAddModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="text-2xl font-medium">Users</p>
        <div className="flex flex-row items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-semibold rounded-lg text-black border border-[#D0D5DD] px-4 py-3">
            <img src="/img/upload.png" alt="upload" className="w-5 h-5" />
            <span>Import</span>
          </button>
          <button
            className="flex items-center gap-2 text-sm font-semibold rounded-lg text-white px-4 py-3 bg-[#7F56D9]"
            onClick={handleAddClick}
          >
            <AddIcon className="w-5 h-5" />
            <span>Add User</span>
          </button>
        </div>
      </div>
      <ReusableModal
        title="Add User"
        content={
          <AddUserForm
            isOpen={addModalOpen}
            onClose={() => setAddModalOpen(false)}
          />
        }
        onClose={() => setAddModalOpen(false)}
        open={addModalOpen}
      />
    </>
  );
};

export default HeaderContent;
