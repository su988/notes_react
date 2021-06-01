import React from 'react';
import { NoteForm } from '../../components/NoteForm';

export const EditNote = ({ handleClose, id, editNote, selectedNote }) => {
  return (
    <>
      <NoteForm
        handleClose={handleClose}
        id={id}
        editNote={editNote}
        selectedNote={selectedNote}
        isEdit={true}
      />
    </>
  );
};
