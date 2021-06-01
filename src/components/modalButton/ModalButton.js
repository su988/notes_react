import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './styles';

export const ModalButton = ({ handleOpen }) => {
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ backgroundColor: '#2196F3' }}
      >
        <AddIcon className={classes.leftIcon} style={{ paddingRight: '5px' }} />
        Add Note
      </Button>
    </>
  );
};
