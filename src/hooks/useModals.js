import { useState } from 'react';

export const useModals = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

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

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return {
    openNew,
    handleOpenNew,
    handleCloseNew,
    openEdit,
    handleOpenEdit,
    handleCloseEdit,
    openDelete,
    handleOpenDelete,
    handleCloseDelete,
  };
};
