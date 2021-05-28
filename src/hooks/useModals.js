import { useState } from 'react';

export const useModals = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenNew = () => {
    setOpenNew(true);
  };

  const handleCloseNew = () => {
    setOpenNew(false);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return {
    openNew,
    handleOpenNew,
    handleCloseNew,
    openEdit,
    handleOpenEdit,
    handleCloseEdit,
  };
};
