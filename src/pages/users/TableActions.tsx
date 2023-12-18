// TableActions.js
import { IconButton } from "@mui/material";

const TableActions = ({ row }: any) => {
  console.log(row);
  return (
    <div className="flex flex-row gap-2 items-center mr-2">
      <IconButton>
        <img src="/img/trash.png" alt="trash" className="w-4" />
      </IconButton>
      <IconButton>
        <img src="/img/edit.png" alt="edit" className="w-4" />
      </IconButton>
    </div>
  );
};

export default TableActions;
