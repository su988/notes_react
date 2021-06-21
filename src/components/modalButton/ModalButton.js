import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { useModals } from '../../hooks/useModals';

export const ModalButton = () => {
  const { handleOpenNew } = useModals();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenNew}
        startIcon={<AddIcon />}
      >
        Add Note
      </Button>
    </>
  );
};
