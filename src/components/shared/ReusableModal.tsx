import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Modal, Typography } from "@mui/material";
import { ReactNode } from "react";

const ReusableModal = ({
  title,
  content,
  open,
  onClose,
}: {
  title: string;
  content: ReactNode;
  open: boolean;
  onClose: () => void;
  disabled?: boolean;
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white shadow-md p-4 rounded-lg flex flex-col min-w-[400px] gap-6">
        <div className="flex justify-between items-center pb-2 mb-2">
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {content}
      </div>
    </Modal>
  );
};

export default ReusableModal;
