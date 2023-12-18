// TableActions.js
import { IconButton } from "@mui/material";
import { useState } from "react";
import ReusableModal from "../../components/shared/ReusableModal";
import DeleteUserConfirmation from "./DeleteUserConfirmation";
import UpdateUserForm from "./UpdateUserForm";

const TableActions = ({ row }: any) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  const handleEditClick = () => {
    setEditModalOpen(!editModalOpen);
  };

  return (
    <div className="flex flex-row gap-2 items-center mr-2">
      <IconButton onClick={handleDeleteClick}>
        <img src="/img/trash.png" alt="trash" className="w-4" />
      </IconButton>
      <IconButton onClick={handleEditClick}>
        <img src="/img/edit.png" alt="edit" className="w-4" />
      </IconButton>
      <ReusableModal
        title="Update User"
        content={
          <UpdateUserForm
            onClose={() => setEditModalOpen(false)}
            id={row.original.id}
          />
        }
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
        }}
      />

      <ReusableModal
        title="Add User"
        content={
          <>
            <DeleteUserConfirmation
              id={row.original.id}
              onClose={() => {
                setDeleteModalOpen(false);
              }}
            />
          </>
        }
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
        }}
      />
    </div>
  );
};

export default TableActions;
