import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { useModals } from '../../hooks/useModals';
import useStyles from './styles';

export const ModalButton = () => {
  const { handleOpenNew } = useModals();
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenNew}
        style={{ backgroundColor: '#2196F3' }}
      >
        <AddIcon className={classes.leftIcon} style={{ paddingRight: '5px' }} />
        Add Note
      </Button>
    </>
  );
};
