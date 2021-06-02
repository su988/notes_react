import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import useStyles from './styles';

export const DeleteDialog = ({ openDelete, onCloseDelete, id, deleteNote }) => {
  const classes = useStyles();

  const handleDelete = () => {
    deleteNote(id);
    onCloseDelete();
  };

  return (
    <Box className={classes.container}>
      <Dialog
        open={openDelete}
        onClose={onCloseDelete}
        BackdropProps={{ style: { backgroundColor: 'transparent' } }}
        classes={{
          paper: classes.dialog,
        }}
      >
        <p className={classes.title}>{'Delete Note?'}</p>
        <DialogActions>
          <Button onClick={onCloseDelete} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
