// TableActions.js
import { Button, IconButton } from "@mui/material";
import { useState } from "react";

const TableActions = ({ row }: any) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(row.name);
  const [error, setError] = useState("");

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleInputChange = (e: any) => {};

  return (
    <div className="flex flex-row gap-2 items-center mr-2">
      <IconButton onClick={handleEditClick}>
        <img src="/img/trash.png" alt="trash" className="w-4" />
      </IconButton>
      <IconButton onClick={handleDeleteClick}>
        <img src="/img/edit.png" alt="edit" className="w-4" />
      </IconButton>
    </div>
  );
};

export default TableActions;
