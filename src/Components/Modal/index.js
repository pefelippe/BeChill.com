import { data } from "./../../data";

import { useState } from "react";
import { Modal } from "@mui/material";

export function LofiList(options) {
  const [open, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Modal
      open={open}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      // setURL={setURL}
    />
  );
}
