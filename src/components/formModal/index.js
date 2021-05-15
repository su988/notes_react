import React from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import NoteForm from '../noteForm';

import useStyles from './styles';

export default function FormModal({ setNotes, openModal, handleClose }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.title}>
              Add Note
            </h2>
            <hr className={classes.line} />
            <NoteForm handleClose={handleClose} setNotes={setNotes} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
