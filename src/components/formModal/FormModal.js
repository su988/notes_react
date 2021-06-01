import React from 'react';

import { Modal, Backdrop, Fade, Typography, Box } from '@material-ui/core';

import useStyles from './styles';

export const FormModal = ({ openModal, handleClose, title, children }) => {
  const classes = useStyles();

  return (
    <Box>
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
          <Box className={classes.paper}>
            <Typography
              variant="h1"
              id="transition-modal-title"
              className={classes.title}
            >
              {title}
            </Typography>
            <hr className={classes.line} />
            {children}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
