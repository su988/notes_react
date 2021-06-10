import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import { useModals } from '../../hooks/useModals';
import { useNotes } from '../../hooks/useNotes';
import useStyles from './styles';

export const DeleteDialog = ({ id }) => {
  const { deleteNote } = useNotes();
  const { handleCloseDelete, openDelete } = useModals();
  const classes = useStyles();

  const handleDelete = () => {
    deleteNote(id);
    handleCloseDelete();
  };

  return (
    <Box className={classes.container}>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        BackdropProps={{ style: { backgroundColor: 'transparent' } }}
        classes={{
          paper: classes.dialog,
        }}
      >
        <p className={classes.title}>{'Delete Note?'}</p>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
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
